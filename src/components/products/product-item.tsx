import React from 'react'

interface Props {
  name: string
  onSelect: () => void
}

export const ProductItem = (props: Props) => {
  return (
    <div>
      <div>{props.name}</div>
      <button onClick={() => props.onSelect()}>Press Me</button>
    </div>
  )
}
