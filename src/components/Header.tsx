"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Posts",
    path: "/posts",
  },
  {
    name: "Create Post",
    path: "/create-post",
  },
];
export default function Header() {
  const pathName = usePathname();

  return (
    <header className="bg-slate-400 flex justify-between p-2">
      <Image
        src="https://bytegrad.com/course-assets/youtube/example-logo.png"
        alt="logo"
        className="w-[40px] h-[40px] mt-auto mb-auto"
        width="40"
        height="40"
      />

      <nav className="text-center p-4 text-xls">
        <ul className="flex gap-5">
          {navLinks.map((navItem) => (
            <li key={navItem.path}>
              <Link
                href={navItem.path}
                className={
                  navItem.path === pathName ? "text-zinc-950" : "text-zinc-500"
                }
              >
                {navItem.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
