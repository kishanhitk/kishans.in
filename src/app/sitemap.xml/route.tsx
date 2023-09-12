import { getAllPostByUsername } from "@functions/hashnode";
export const runtime = "edge";
export async function GET() {
  const baseURL = "https://kishans.in";
  // Static pages
  const pages = ["/", "/resume", "/projects", "/blogs", "/about"];

  const posts = await getAllPostByUsername("blog.kishans.in");

  // Dynamic pages
  posts.forEach((post) => {
    pages.push(`/blogs/${post.slug}`);
  });

  // Construct the XML content dynamically
  let xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  for (let page of pages) {
    const fullURL = `${baseURL}${page}`;
    xmlContent += `
    <url>
      <loc>${fullURL}</loc>
    </url>`;
  }

  xmlContent += `
  </urlset>`;

  return new Response(xmlContent, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
