import React from "react";
import PostOverview from "../components/styled-components/PostOverview";

export default {
  title: "PostOverview",
  component: PostOverview
};

export const BasicExample = () => {
  return (
    <div>
      <PostOverview title={"My Latest Post"} date={"08 July 2020"} />
      <PostOverview title={"My Second Post"} date={"01 July 2020"} />
      <PostOverview title={"My First Post"} date={"19 June 2020"} />
    </div>
  );
};
