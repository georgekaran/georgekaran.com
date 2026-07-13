import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"

export function renderMdx(body: string) {
  return (
    <MDXRemote
      source={body}
      options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
    />
  )
}
