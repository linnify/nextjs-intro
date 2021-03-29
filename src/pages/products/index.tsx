import * as React from 'react'
import { Page } from '@app/components/shared'
import { ProductItem } from '@app/components/products'

interface Props {
  products: string[]
}

const Products = (props: Props) => {
  const onPress = () => {
    // console.log('pressed')
  }

  const products = props.products

  return (
    <Page>
      <div>
        <h1>Products Page </h1>
      </div>

      {products.map((product, index) => (
        <ProductItem key={index} name={product} onSelect={onPress} />
      ))}
    </Page>
  )
}

export default Products

export async function getStaticProps(): Promise<{ props: Props }> {
  // call API to fetch the products
  // TODO Fetch products from an API

  const products = ['Product 2', 'Product 3', 'Product 4']
  // console.log('Building Products page')

  return {
    props: {
      products,
    },
  }
}
