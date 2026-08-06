import Link from "next/link";
import { NavLink } from "./NavLink";

export const Header = () => (
  <header className="h-37.5 pt-8 text-2xl text-background bg-foreground">
    <nav className="w-full px-20 flex justify-between items-center">
      <NavLink href="/write">WRITE</NavLink>
      <p className="font-sanspace text-5xl tracking-[-0.2rem]">NOTHING</p>
      <NavLink href="/create">CREATE</NavLink>
    </nav>
  </header>
);
