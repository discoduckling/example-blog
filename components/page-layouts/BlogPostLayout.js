import React from "react";
import OverviewLayout from "./OverviewLayout";

const BlogPostLayout = frontMatter => {
  return ({ children: content }) => {
    return (
      <OverviewLayout pageTitle={frontMatter.title}>{content}</OverviewLayout>
    );
  };
};

export default BlogPostLayout;
