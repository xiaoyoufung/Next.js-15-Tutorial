import Link from "next/link"

// type Props = {}

export default function Home() {
  return (
    <>
    <h1>Home</h1>
    <Link href="/blog">Blog</Link>
    <Link href="/products"> Products</Link>
    </>
  )
}