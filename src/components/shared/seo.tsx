import { NextSeo } from 'next-seo'
import React from 'react'

interface Props {
  title?: string
  description?: string
  image?: string
}

export const SEO = (props: Props) => {
  const title = props.title || 'Linnify | Simplifying life though innovation.'
  const description = props.description || 'Simplifying life though innovation.'
  const image = props.image || 'https://default-image'

  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        type: 'website',
        locale: 'en_US',
        url: 'https://linnify.com/',
        site_name: 'Linnify', // eslint-disable-line
        title: 'Linnify',
        description: 'Simplifying life though innovation.',
        images: [
          {
            url: image,
            width: 695,
            height: 616,
            alt: 'Simplifying life though innovation.',
          },
        ],
      }}
      twitter={{
        handle: '@handle',
        site: '@linnifyteam',
        cardType: 'summary',
      }}
    />
  )
}
