import createPost from "@/actions/serverAction";

export default async function Page() {
  return (
    <div className="w-[500px]">
      <h2 className="text-2xl">Create Post</h2>
      <form method="post" action={createPost}>
        <div className="flex flex-col mb-10">
          <label htmlFor="title" className="self-start">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="text-black"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description" className="self-start">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="text-black"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-white mt-10 pt-2 pb-2 pl-5 pr-5 text-black rounded hover:bg-slate-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
