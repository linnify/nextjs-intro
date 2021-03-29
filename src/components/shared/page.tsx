import React from 'react'
import { PageMetadata } from '../../types'
import { SEO } from './seo'

interface Props {
  children: React.ReactNode
  metadata?: PageMetadata
}

export const Page = ({ children, metadata }: Props) => {
  return (
    <div>
      <SEO
        title={metadata?.title}
        description={metadata?.description}
        image={metadata?.image}
      />
      {children}
    </div>
  )
}
