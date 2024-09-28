import PostList from "@/components/PostList";
import { Suspense } from "react";

export default async function Page() {
  return (
    <div>
      <h2 className="text-4xl mb-5 font-900">All Posts</h2>
      <Suspense fallback="Loading...">
        <PostList />
      </Suspense>
    </div>
  );
}
