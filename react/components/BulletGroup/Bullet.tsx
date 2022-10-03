import React from 'react'
import { Link } from 'vtex.render-runtime'
import { useCssHandles } from 'vtex.css-handles'

import './styles.css'
import { LinkProps } from './BulletType'

type Props = {
  src: string
  titleBullet: string
  link: LinkProps
}

const Bullet = ({ src, titleBullet, link }: Props) => {
  const CSS_HANDLE = [
    'bullet__item',
    'bullet__item--title',
    'bullet__item--image',
    'bullet__item--link',
  ]

  const handles = useCssHandles(CSS_HANDLE)

  return (
    <div className={handles.bullet__item}>
      <Link to={link.url} className={handles['bullet__item--link']}>
        <img
          className={`${handles['bullet__item--image']} externalClass`}
          src={src}
          alt={titleBullet}
        />
        <p className={handles['bullet__item--title']}>{titleBullet}</p>
      </Link>
    </div>
  )
}

Bullet.schema = {
  title: 'bullet',
  type: 'object',
  properties: {
    src: {
      title: 'Imagen de Bullet',
      type: 'string',
      widget: {
        'ui.widget': 'image-uploader',
      },
    },
  },
}

export default Bullet
