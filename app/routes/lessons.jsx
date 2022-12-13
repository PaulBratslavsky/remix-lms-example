import qs from "qs";
import { Outlet, useLoaderData } from "@remix-run/react";
import LessonList from "~/components/lesson-list";

const QUERY = qs.stringify({
  populate: ["video", "thumbnail"],
});

export async function loader() {
  const res = await fetch(`http://localhost:1337/api/lessons?${QUERY}`);
  return await res.json();
}

export default function () {
  const lessons = useLoaderData().data;
  return (
    <div className="container mx-auto grid grid-cols-3 gap-4 m-4">
      <aside className="col-span-1">
        <LessonList lessons={lessons} />
      </aside>
      <main className="col-span-2">
        <Outlet />
      </main>
    </div>
  );
}
