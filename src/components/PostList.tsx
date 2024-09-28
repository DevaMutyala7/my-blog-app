import prisma from "@/lib/db";
import Link from "next/link";

export default async function PostList() {
  const posts = await prisma.pOSTS.findMany();
  return (
    <ul>
      {posts &&
        posts?.map((item) => {
          return (
            <li key={item.id} className="leading-8">
              <Link href={`/posts/${item.id}`}>{item.title}</Link>
            </li>
          );
        })}
    </ul>
  );
}
