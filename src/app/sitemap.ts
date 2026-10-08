import type { MetadataRoute } from "next";
import { createClient } from "@supabase/supabase-js";

const baseUrl = "https://reportofolio.my.id";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const urls: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const { data: projects } = await supabase
      .from("projects")
      .select("slug, created_at")
      .order("created_at", { ascending: false });

    if (projects) {
      for (const project of projects) {
        if (!project.slug) continue;

        urls.push({
          url: `${baseUrl}/projects/${encodeURIComponent(project.slug)}`,
          lastModified: project.created_at
            ? new Date(project.created_at)
            : new Date(),
          changeFrequency: "monthly",
          priority: 0.8,
        });
      }
    }
  } catch (error) {
    console.error("Sitemap error:", error);
  }

  return urls;
}