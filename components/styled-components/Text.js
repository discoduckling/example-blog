/** @jsx jsx */
import { jsx, css } from "@emotion/core";

export const PostTitle = ({ title }) => {
  return (
    <div
      css={css`
        font-size: 24px;
      `}
    >
      {title}
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
