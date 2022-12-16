import qs from "qs";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import BlockRenderer from "~/components/block-renderer";

export const meta = ({ data }) => {
  const { title, description } = data.data[0].attributes;
  return {
    title: title,
    description: description,
  };
};

const getQuery = (slug) =>
  qs.stringify({
    populate: {
      Blocks: { populate: ["image", "Link", "Benefit", "Step", "SingleFaq"] },
    },
    filters: { slug: slug },
  });

export async function loader() {
  const response = await fetch(
    `http://localhost:1337/api/pages?${getQuery("home")}`
  );
  const data = await response.json();
  return json({ ...data });
}

export default function Index() {
  const { data } = useLoaderData();
  const blocks = data[0].attributes.Blocks;
  return (
    <div className="container mx-auto">
      <BlockRenderer blocks={blocks} />
    </div>
  );
}
