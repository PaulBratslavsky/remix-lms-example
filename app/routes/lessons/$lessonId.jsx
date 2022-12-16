import { useLoaderData } from "@remix-run/react";
import MuxPlayer from "@mux/mux-player-react";
import qs from "qs";
import { durationToTime } from "~/utils/duration-to-time";
import { formatDate } from "~/utils/format-date";

export const meta = ({ data }) => {
  const { title } = data.data.attributes;
  return {
    title: title,
  };
};

const QUERY = qs.stringify({
  populate: ["video"],
});

export async function loader({ params }) {
  const res = await fetch(
    `http://localhost:1337/api/lessons/${params.lessonId}?${QUERY}`
  );
  return await res.json();
}

export default function SingleLessonRoute() {
  const lesson = useLoaderData().data;
  const { video, title, description, createdAt } = lesson.attributes;
  const { duration, playback_id } = video.data.attributes;
  return (
    <div className="m-2 shadow-lg rounded-lg p-4">
      <MuxPlayer
        className="rounded-lg overflow-hidden"
        streamType="on-demand"
        playbackId={playback_id}
        metadata={{
          video_id: "video-id-54321",
          video_title: "Test video title",
          viewer_user_id: "user-id-007",
        }}
      />
      <div className="py-4 lg:py-6 space-y-5 lg:space-y-8">
        <div className="flex items-center gap-5 lg:gap-10 flex-wrap">
          <p className="font-medium flex items-center gap-2">
            <i className="far fa-user text-sm text-primary"></i>
            <span className="text-sm lg:text-base text-slate-700">
              Duration: {durationToTime(duration)}
            </span>
          </p>
          <p className="font-medium flex items-center gap-2">
            <span className="text-sm lg:text-base text-slate-700">
              {formatDate(createdAt)}
            </span>
          </p>
        </div>
        <p className="text-xl lg:text-3xl font-semibold text-purple-600 transition-all duration-500 inline-block">
          {title}
        </p>
        <p className="text-lg font-medium text-slate-600 leading-loose">
          {description}
        </p>
        <div className="flex items-center gap-5 lg:gap-10 flex-wrap"></div>
      </div>
    </div>
  );
}
