import { notFound } from "next/navigation"
import { Desktop } from "@/os/Desktop"
import { getAllPosts, getPostBySlug } from "@/blog/posts"
import { renderMdx } from "@/blog/renderPost"

type RouteContext = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export default async function BlogPostPage({ params }: RouteContext) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()
  const posts = getAllPosts()
  return <Desktop posts={posts} initialSlug={slug} initialRenderedPost={renderMdx(post.body)} />
}
