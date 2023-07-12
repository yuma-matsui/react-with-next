import Link from "next/link";
import React from "react";
import { FC } from "react";

const NAV_ITEMS = [
  { href: "/", label: "Index" },
  { href: "/posts", label: "Posts" },
  { href: "/users", label: "Users" },
  { href: "/comments", label: "Comments" },
];

const Header: FC = () => {
  return (
    <header>
      {NAV_ITEMS.map(({ href, label }) => (
        <Link href={href} key={href}>
          {label}
        </Link>
      ))}
    </header>
  );
};

export default Header;
