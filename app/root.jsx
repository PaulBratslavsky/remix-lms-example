import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { json } from "@remix-run/node";

import TopNavbar from "~/components/top-navbar";
import styles from "./styles/app.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export async function loader({ params }) {
  const response = await fetch(`http://localhost:1337/api/pages`);
  const data = await response.json();
  if (!data || data.length === 0) return null;
  return json({ ...data });
}

function getMenu(data) {
  return data
    .reduce((acc, item) => {
      return [
        ...acc,
        {
          id: item.id,
          text: item.attributes.title,
          href: item.attributes.slug === "home" ? "/" : item.attributes.slug,
        },
      ];
    }, [])
    .filter((item) => item.slug !== "home");
}

export default function App() {
  const { data } = useLoaderData();

  const menuItems = getMenu(data);
  console.log(menuItems, "Menu Items");

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <TopNavbar menuItems={menuItems} />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
