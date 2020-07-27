import React from "react";
import PostOverview from "../components/styled-components/PostOverview";
import OverviewLayout from "../components/page-layouts/OverviewLayout";

export default {
  title: "OverviewLayout",
  component: OverviewLayout
};

export const Home = () => {
  return (
    <OverviewLayout pageTitle={"Home"}>
      <PostOverview title={"My Latest Post"} date={"08 July 2020"} />
      <PostOverview title={"My Second Post"} date={"01 July 2020"} />
      <PostOverview title={"My First Post"} date={"19 June 2020"} />
    </OverviewLayout>
  );
};

export const AnotherPage = () => {
  return (
    <OverviewLayout pageTitle={"My Latest Post"}>
      <div>Content from my first post</div>
    </OverviewLayout>
  );
};
