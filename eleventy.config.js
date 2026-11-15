export default function (eleventyConfig) {
  // Notes and drafts that live in the repo but are not pages.
  eleventyConfig.ignores.add("docs/**");
  eleventyConfig.ignores.add("content/REVIEW.md");
  eleventyConfig.ignores.add("content/bio.md");
  eleventyConfig.ignores.add("README.md");

  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // All writing samples, in the order set by each file's `order` field.
  eleventyConfig.addCollection("samples", (api) =>
    api
      .getFilteredByGlob("content/samples/*.md")
      .sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99))
  );

  // Sections in the order they should appear (Websites, Blogs, Short Stories…).
  eleventyConfig.addFilter("sections", (samples) => {
    const seen = [];
    for (const s of samples) if (!seen.includes(s.data.section)) seen.push(s.data.section);
    return seen;
  });

  eleventyConfig.addFilter("bySection", (samples, section) =>
    samples.filter((s) => s.data.section === section)
  );

  // Unique client names (or story titles for personal work) for a section.
  eleventyConfig.addFilter("rangeNames", (samples) => [
    ...new Set(samples.map((s) => (s.data.type === "personal" ? s.data.title : s.data.client))),
  ]);

  eleventyConfig.addFilter("featured", (samples) => samples.filter((s) => s.data.featured));

  eleventyConfig.addFilter("slugify", (str) =>
    String(str).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
  );

  // "2023-09-04" -> "September 2023"
  eleventyConfig.addFilter("monthYear", (value) => {
    if (!value) return "";
    const d = new Date(value + "T00:00:00Z");
    if (isNaN(d)) return value;
    return d.toLocaleDateString("en-GB", { month: "long", year: "numeric", timeZone: "UTC" });
  });

  eleventyConfig.addFilter("readingTime", (html) => {
    const words = String(html).replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 230)) + " min read";
  });

  eleventyConfig.addFilter("hostname", (url) => {
    try {
      return new URL(url).hostname.replace(/^www\./, "");
    } catch {
      return url;
    }
  });

  // Tidy the extracted copy for display:
  // - drop the leading "Copy" heading (the page supplies its own label)
  // - turn **[CTA] Label** into a button-style marker
  eleventyConfig.addFilter("presentCopy", (html) =>
    String(html)
      .replace(/^\s*<h2[^>]*>Copy<\/h2>\s*/, "")
      .replace(/<strong>\[CTA\]\s*(.*?)<\/strong>/g, '<span class="cta-marker">$1</span>')
  );

  // Previous / next sample for in-page navigation.
  eleventyConfig.addFilter("neighbours", (samples, url) => {
    const i = samples.findIndex((s) => s.url === url);
    return {
      prev: i > 0 ? samples[i - 1] : null,
      next: i >= 0 && i < samples.length - 1 ? samples[i + 1] : null,
    };
  });

  return {
    dir: {
      input: ".",
      includes: "src/_includes",
      data: "src/_data",
      output: "_site",
    },
    markdownTemplateEngine: false,
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk"],
  };
}
