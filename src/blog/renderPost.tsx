import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import { mdxComponents } from "@/blog/mdxComponents"

export function renderMdx(body: string) {
  return (
    <MDXRemote
      source={body}
      components={mdxComponents}
      options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
    />
  )
}
