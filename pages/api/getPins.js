import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

const query = groq`
*[_type == "pins"]
`;

export default async function handler(req, res) {
  const pins = await sanityClient.fetch(query);
  res.status(200).json({ pins });
}
