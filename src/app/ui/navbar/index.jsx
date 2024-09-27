"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Project" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-black/70 p-4 w-full fixed z-[1000] flex justify-center items-center">
      <ul className="flex space-x-4 ">
        {links.map(({ href, label }) => (
          <li
            key={href}
            className={`${
              pathname === href ? "text-blue-500 " : "text-gray-200"
            } transition-all`}
          >
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
