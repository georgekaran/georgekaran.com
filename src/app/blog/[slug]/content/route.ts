import { getPostBySlug } from "@/blog/posts"
import { renderMdx } from "@/blog/renderPost"

type RouteContext = { params: Promise<{ slug: string }> }

export async function GET(_req: Request, { params }: RouteContext): Promise<Response> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return new Response("Not found", { status: 404 })
  const { prerender } = await import("react-dom/static")
  const { prelude } = await prerender(renderMdx(post.body))
  const html = await new Response(prelude).text()
  return new Response(html, { headers: { "content-type": "text/html; charset=utf-8" } })
}
