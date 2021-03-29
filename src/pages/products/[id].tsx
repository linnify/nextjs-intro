import React from 'react'

interface Props {
  product: string
}

const ProductPage = (props: Props) => {
  return <div>{props.product}</div>
}

export default ProductPage

export async function getStaticProps(): Promise<{ props: Props }> {
  // call API to fetch the products
  // TODO Fetch product details from an API

  return {
    props: {
      product: 'Product 2',
    },
  }
}

export async function getStaticPaths() {
  const allProductsIds = ['1', '2'] // call the API to return all the product IDS
  const paths = allProductsIds.map((value) => ({ params: { id: value } }))

  return {
    paths,
    fallback: true, // See the "fallback" section below
  }
}
