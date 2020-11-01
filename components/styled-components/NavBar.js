/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Link from "next/link";

const NavBarLink = ({ text, to }) => {
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
      <Link href={to}>{text}</Link>
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
      <NavBarLink text={"Home"} to={"/"}/>
    </div>
  );
};

export default NavBar;
