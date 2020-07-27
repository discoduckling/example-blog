import React from "react";
import { PageTitle } from "../components/styled-components/Text";

export default {
  title: "PageTitle",
  component: PageTitle
};

export const BasicExample = () => {
  return <PageTitle title={"Home"} />;
};
