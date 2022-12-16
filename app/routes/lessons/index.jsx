export const meta = () => ({
  charset: "utf-8",
  title: "No Lessons",
  viewport: "width=device-width,initial-scale=1",
});

export default function LessonsRoute() {
  return (
    <div className="flex justify-center items-center h-3/4">
      <h2 className="text-purple-500 font-bold text-2xl">
        No lesson Selected!
      </h2>
    </div>
  );
}
