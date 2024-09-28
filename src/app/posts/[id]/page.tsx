import prisma from "@/lib/db";
import { notFound } from "next/navigation";

type Params = {
  id: string;
};

export default async function Page({ params }: { params: Params }) {
  const post = await prisma.pOSTS.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!post) {
    notFound();
  }

  return (
    <div>
      <h2 className="text-4xl mb-5 font-900">{post.title}</h2>
      <p className="max-w-[750px] mx-auto leading-8">{post.body}</p>
    </div>
  );
}
