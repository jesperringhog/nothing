import Link from "next/link";
import React from "react";

type NavLinkProps = {
    href: string;
    children: React.ReactNode;
}

export const NavLink = ({href, children}: NavLinkProps) =>
<Link href={href} className="tracking-[10] hover:scale-120 transition-transform duration-300">{children}</Link>