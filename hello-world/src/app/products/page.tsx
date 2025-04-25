import Link from "next/link"

// type Props = {}

export default function Products() {
  return (
    <>
    <Link href="/">Home</Link>
    <h1>Products</h1>
    <Link href="/products/1">Product 1</Link>
    <Link href="/products/2">Product 2</Link>
    <Link href="/products/3" replace>Product 3</Link>
    </>
  )
}