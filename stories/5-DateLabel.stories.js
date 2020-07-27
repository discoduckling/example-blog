import React from "react";
import { DateLabel } from "../components/styled-components/Text";

export default {
    title: "DateLabel",
    component: DateLabel
};

export const BasicExample = () => {
    return <DateLabel date={"07 July 2020"} />;
};
