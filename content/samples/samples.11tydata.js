const join = (...parts) => parts.filter(Boolean).join(" · ");

export default {
  layout: "layouts/sample.njk",
  permalink: (data) => `/work/${data.page.fileSlug.replace(/^\d+-/, "")}/`,
  eleventyComputed: {
    // Short line under the title on cards.
    byline: (d) => {
      if (d.type === "personal") return d.published_on ? `Published on ${d.published_on}` : "Short fiction";
      if (d.type === "academic") return join(d.institution, d.industry);
      return join(d.client, d.industry);
    },
    // Line under the title on the sample page.
    subline: (d) => {
      if (d.type === "personal") return d.published_on ? `Short fiction, published on ${d.published_on}` : "Short fiction";
      if (d.type === "academic") return d.institution ? `${d.format}, ${d.institution}` : d.format;
      return `Written for ${d.client}`;
    },
  },
};
