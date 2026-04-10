import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
	const posts = await getCollection("blog");

	return rss({
		title: "Astro Learner | Blog",
		description: "My journey learning Astro",
		site: `${context.site}`,
		items: posts.map(({ data: { title, pubDate, description }, id }) => ({
			title,
			pubDate,
			description,
			link: `/posts/${id}/`,
		})),
		customData: `<language>en-us</language>`,
	});
}
