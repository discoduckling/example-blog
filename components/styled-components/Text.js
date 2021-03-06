/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Link from "next/link";

export const PostTitle = ({ title, to }) => {
  return (
    <div
      css={css`
        font-size: 24px;
      `}
    >
      <Link href={to}>
        <a>{title}</a>
      </Link>
    </div>
  );
};

export const PageTitle = ({ title }) => {
  return (
    <div
      css={css`
        font-size: 40px;
        text-decoration: underline;
        color: DodgerBlue;
      `}
    >
      {title}
    </div>
  );
};

export const DateLabel = ({ date }) => {
  return (
    <div
      css={css`
        color: gray;
      `}
    >
      {date}
    </div>
  );
};
