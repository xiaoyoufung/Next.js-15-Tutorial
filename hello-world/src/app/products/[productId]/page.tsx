// import React from 'react'

import { Metadata } from "next"

type Props = {
    params: {
        productId: string
    }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const { productId } = params
    return {
        title: `Product ${productId}`,
    }
}

export default async function ProductDetails({params}: Props) {
    const productId = params.productId
  return (
    <h1>ProductDetails about product {productId}</h1>
  )
}