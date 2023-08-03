import Link from "next/link";
import React from "react";
import { FC } from "react";

const NAV_ITEMS = [
  { href: "/", label: "Index" },
  { href: "/posts", label: "Posts" },
  { href: "/users", label: "Users" },
  { href: "/comments", label: "Comments" },
];

const Footer: FC = () => {
  return (
    <footer className="flex justify-around items-center border-b w-full h-24 mb-4">
      {NAV_ITEMS.map(({ href, label }) => (
        <Link
          href={href}
          key={href}
          className="inline-block py-2 px-6 text-xl hover:text-blue-500 focus:text-blue-500 active:text-blue-500"
        >
          {label}
        </Link>
      ))}
    </footer>
  );
};

export default Footer;
