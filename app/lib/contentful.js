import { createClient } from "contentful";

if (
  !process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ||
  !process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
) {
  throw new Error("Missing required Contentful environment variables");
}

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export default client;
