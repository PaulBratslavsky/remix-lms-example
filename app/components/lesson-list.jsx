import { Link } from "@remix-run/react";
import { durationToTime } from "~/utils/duration-to-time";

function LessonItem({ lesson }) {
  const { duration, isReady } = lesson.attributes.video.data.attributes;
  const thumbnail =
    lesson.attributes?.thumbnail.data?.attributes.formats?.thumbnail.url;
  if (!isReady) return null;
  return (
    <Link
      to={`/lessons/${lesson.id}`}
      className="relative max-h-24 bg-white flex flex-row overflow-hidden shadow-lg rounded-lg m-2"
      prefetch='intent'
    >
      <div className="h-full w-1/3 overflow-hidden">
       
        <img
          className="h-full w-full object-cover"
          src={
            thumbnail
              ? "http://localhost:1337" + thumbnail
              : `https://images.pexels.com/photos/7004706/pexels-photo-7004706.jpeg`
          }
          alt=""
        />
      </div>
      <p className="absolute top-2 right-2 z-10 bg-purple-600 rounded-md px-2 py-1 text-sm font-semibold text-slate-100">
          Strapi
        </p>
      <div className="flex justify-center items-center px-4">
      
        <div className="">
          <h3 className="text-lg font-semibold text-purple-800 inline-block">
            {lesson.attributes.title}
          </h3>
          <p className="font-medium flex items-center gap-2">
            <span className="text-sm lg:text-base text-slate-700">
              Duration: {durationToTime(duration)}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default function LessonList({ lessons = [] }) {
  return (
    <div>
      {lessons.map((lesson, index) => (
        <LessonItem key={index} lesson={lesson} />
      ))}
    </div>
  );
}
