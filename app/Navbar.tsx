"use client";

import React from "react";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import icon from "../public/images/logo.svg";
import styled from "styled-components";

type MenuState = {
  open: boolean;
};

const StyledBurger = styled.button<MenuState>`
  background-color: ${({ open }) => (open ? "var(--gray-medium)" : "unset")};
  transition: none;

  &:active,
  &:hover {
    background-color: ${({ open }) => (open ? "var(--gray-medium)" : "unset")};
  }
`;

const StyledMenu = styled.div<MenuState>`
  display: ${({ open }) => (open ? "initial" : "none")};
`;

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className={styles.navbarWrapper}>
      <div className={styles.navbar}>
        <div className={styles.logoSec}>
          <Link href="/">
            <Image
              src={icon}
              className={styles.logoImg}
              alt="Cirrus Logo Image"
            />
          </Link>
        </div>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
        <div className={styles.navLinksSec}>
          <Link className={styles.navLink} href="/aboutus">
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
}

const Burger = ({ open, setOpen }: { open: boolean; setOpen: Function }) => {
  return (
    <StyledBurger
      className={styles.navLinksSecMob}
      open={open}
      onClick={() => setOpen(!open)}
    >
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </StyledBurger>
  );
};

const Menu = ({ open }: { open: boolean; setOpen: Function }) => {
  return (
    <StyledMenu className={styles.menu} open={open}>
      <Link className={styles.menuLink} href="/aboutus">
        About Us
      </Link>
      <Link className={styles.menuLink} href="/community">
        Community
      </Link>
      <Link className={styles.menuLink} href="/services">
        Services
      </Link>
      <Link
        className={styles.menuLink}
        href="https://forms.gle/APuFisBnkJhGTkTcA"
      >
        <button>Apply</button>
      </Link>
    </StyledMenu>
  );
};
