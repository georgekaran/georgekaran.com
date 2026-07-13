import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

const POSTS_DIR = path.join(process.cwd(), "content", "posts")

export type PostMeta = {
  slug: string
  title: string
  date: string
  tags: string[]
  excerpt: string
  readingTime: number
}

export function readingTimeFor(body: string): number {
  const words = body.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(words / 200))
}

function parseFile(fileName: string): { meta: PostMeta; body: string } {
  const slug = fileName.replace(/\.mdx$/, "")
  const raw = fs.readFileSync(path.join(POSTS_DIR, fileName), "utf8")
  const { data, content } = matter(raw)
  const { title, date, tags, excerpt } = data as Partial<PostMeta>
  if (!title || !date || !excerpt || !Array.isArray(tags)) {
    throw new Error(`Post "${slug}" has invalid frontmatter (need title, date, tags[], excerpt)`)
  }
  return {
    meta: { slug, title, date, tags, excerpt, readingTime: readingTimeFor(content) },
    body: content,
  }
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return []
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => parseFile(f).meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string): { meta: PostMeta; body: string } | null {
  const file = `${slug}.mdx`
  if (!fs.existsSync(path.join(POSTS_DIR, file))) return null
  return parseFile(file)
}
