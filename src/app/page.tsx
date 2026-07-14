import { Desktop } from "@/os/Desktop"
import { getAllPosts } from "@/blog/posts"

export default function Home() {
  return <Desktop posts={getAllPosts()} />
}
