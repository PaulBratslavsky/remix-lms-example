import qs from "qs";
import { useLoaderData } from "@remix-run/react";
import BlockRenderer from "~/components/block-renderer";

const getQuery = (slug) =>
  qs.stringify({
    populate: {
      Blocks: { populate: ["image", "Link", "Benefit", "Step", "SingleFaq"] },
    },
    filters: { slug: slug },
  });

export async function loader() {
  const res = await fetch(
    `http://localhost:1337/api/pages?${getQuery("home")}`
  );
  console.log(`http://localhost:1337/api/pages?${getQuery("home")}`);
  return await res.json();
}

export default function Index() {
  const blocks = useLoaderData().data[0].attributes.Blocks;

  return (
    <div className="container mx-auto">
      <BlockRenderer blocks={blocks} />
    </div>
  );
}
