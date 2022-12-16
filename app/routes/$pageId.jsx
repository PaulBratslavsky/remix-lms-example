import qs from "qs";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import BlockRenderer from "~/components/block-renderer";

const getQuery = (slug) =>
  qs.stringify({
    populate: {
      Blocks: { populate: ["image", "Link", "Benefit", "Step", "SingleFaq"] },
    },
    filters: { slug: slug },
  });

// export const meta = ({ data }) => {
//   if (!data || data.length === 0) return null

//   const { title, description } = data.data[0].attributes;
//   return {
//     title: title,
//     description: description,
//   };
// };

export async function loader({ params }) {
  console.log(params.pageId, "Page ID")
  const response = await fetch(
    `http://localhost:1337/api/pages?${getQuery(params.pageId)}`
  );
  const data = await response.json();
  console.log(data, "Data")
  if (!data || data.length === 0) return null
  return json({ ...data });
}

export default function () {
  const { data } = useLoaderData();
  if (!data || data.length === 0) return <h2 className='container mx-auto'>Page not found</h2>
  const blocks = data[0].attributes.Blocks;
  
  return (
    <main className="container mx-auto">
      <BlockRenderer blocks={blocks} />
    </main>
  );
}
