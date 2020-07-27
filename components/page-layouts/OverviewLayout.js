/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import NavBar from "../styled-components/NavBar";
import { PageTitle } from "../styled-components/Text";

const OverviewLayout = props => {
  const { pageTitle } = props;
  return (
    <div>
      <NavBar />
      <div
        css={css`
          padding: 20px 40px;
        `}
      >
        <PageTitle title={pageTitle} />
        <div
          css={css`
            margin-top: 30px;
          `}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default OverviewLayout;
