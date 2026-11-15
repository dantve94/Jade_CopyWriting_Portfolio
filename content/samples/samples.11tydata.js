export default {
  layout: "layouts/sample.njk",
  permalink: (data) => `/work/${data.page.fileSlug.replace(/^\d+-/, "")}/`,
};
