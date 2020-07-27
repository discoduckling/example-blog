import React from "react";
import { PostTitle } from "../components/styled-components/Text";

export default {
  title: "PostTitle",
  component: PostTitle
};

export const BasicExample = () => {
  return <PostTitle title={"My First Post"} />;
};
