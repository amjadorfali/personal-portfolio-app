export async function GET() {
  return new Response(
    `
      <?xml version="1.0" encoding="UTF-8" ?>
      <urlset
        xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="https://www.w3.org/1999/xhtml"
        xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
      >
        <url>
            <loc>https://www.amjadorfali.com/</loc>
            <lastmod>2023-03-26</lastmod>
        </url>

        <url>
        <loc>https://www.amjadorfali.com/projects</loc>
        <lastmod>2023-03-26</lastmod>
        </url>
   
        <url>
        <loc>https://www.amjadorfali.com/projects/just-do-it</loc>
        <lastmod>2023-03-26</lastmod>
        </url>

        <url>
        <loc>https://www.amjadorfali.com/projects/washmen</loc>
        <lastmod>2023-03-26</lastmod>
        </url>

        <url>
        <loc>https://www.amjadorfali.com/projects/personal-portfolio</loc>
        <lastmod>2023-03-26</lastmod>
        </url>

        <url>
        <loc>https://www.amjadorfali.com/contact</loc>
        <lastmod>2023-03-26</lastmod>
        </url>
        
        <url>
        <loc>https://www.amjadorfali.com/about</loc>
        <lastmod>2023-03-26</lastmod>
        </url>

      </urlset>`.trim(),
    {
      headers: {
        'Content-Type': 'application/xml'
      }
    }
  );
}
