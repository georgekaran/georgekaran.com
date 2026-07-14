import fs from "node:fs"
import path from "node:path"
import { cache } from "react"
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

type ParsedPost = {
  meta: PostMeta
  body: string
}

const parseFile = cache((fileName: string): ParsedPost => {
  const slug = fileName.replace(/\.mdx$/, "")
  const raw = fs.readFileSync(path.join(POSTS_DIR, fileName), "utf8")
  const { data, content } = matter(raw)
  const { title, date, tags, excerpt } = data as Partial<PostMeta>
  if (typeof title !== "string" || typeof date !== "string" || typeof excerpt !== "string" || !Array.isArray(tags)) {
    throw new Error(`Post "${slug}" has invalid frontmatter (need title, date, tags[], excerpt; quote the date)`)
  }
  return {
    meta: { slug, title, date, tags, excerpt, readingTime: readingTimeFor(content) },
    body: content,
  }
})

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return []
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => parseFile(f).meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string): ParsedPost | null {
  // Reject anything that isn't a bare filename, so an encoded "../" in the URL
  // slug can't escape POSTS_DIR and read arbitrary files.
  if (path.basename(slug) !== slug) return null
  const file = `${slug}.mdx`
  if (!fs.existsSync(path.join(POSTS_DIR, file))) return null
  return parseFile(file)
}
