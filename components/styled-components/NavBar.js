/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const NavBarLink = ({ text }) => {
  return (
    <div
      css={css`
        font-size: 20px;
        text-decoration: underline;
        font-weight: bold;
        cursor: pointer;
        color: white;
      `}
    >
      {text}
    </div>
  );
};

const NavBar = () => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        padding-left: 20px;
        height: 60px;
        background-color: DodgerBlue;
      `}
    >
      <NavBarLink text={"Home"} />
    </div>
  );
};

export default NavBar;
