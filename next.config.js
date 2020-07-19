const withMdxEnhanced = require("next-mdx-enhanced");

module.exports = withMdxEnhanced({
  layoutPath: "components/page-layouts",
  defaultLayout: false,
  fileExtensions: ["mdx"],
  remarkPlugins: [],
  rehypePlugins: [],
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => {},
    phase: "prebuild|loader|both"
  }
})({
  pageExtensions: ["js", "jsx", "md", "mdx"]
});
