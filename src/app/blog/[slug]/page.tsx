import { Desktop } from "@/os/Desktop"
import { getAllPosts, getPostBySlug } from "@/blog/posts"
import { renderMdx } from "@/blog/renderPost"

type Params = {
  slug: string
}

type RouteContext = {
  params: Promise<Params>
}

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export default async function BlogPostPage({ params }: RouteContext) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  const posts = getAllPosts()
  if (!post) {
    // Unknown slug → desktop with blog window on the list view.
    return <Desktop posts={posts} initialSlug={null} />
  }
  return <Desktop posts={posts} initialSlug={slug} initialRenderedPost={renderMdx(post.body)} />
}
