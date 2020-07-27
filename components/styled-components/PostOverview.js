/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { DateLabel, PostTitle } from "./Text";

const PostOverview = ({ title, date }) => {
  return (
    <div css={css`
      height: 70px;
    `}>
      <PostTitle title={title} />
      <DateLabel date={date} />
    </div>
  );
};

export default PostOverview;
