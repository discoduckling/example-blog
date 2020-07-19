import React from "react";

const BlogPostLayout = frontMatter => {
  return ({ children: content }) => {
    return (
      <div>
        <div style={{ color: "red" }}>{frontMatter.title}</div>
        <div style={{ color: "green" }}>{content}</div>
      </div>
    );
  };
};

export default BlogPostLayout;
