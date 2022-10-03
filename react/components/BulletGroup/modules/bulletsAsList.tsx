import React from 'react'

import Bullet from '../Bullet'
import { BulletsSchema } from '../BulletType'

export const getBulletsAsTSXList = (bullets: BulletsSchema) =>
  bullets.map((bullet: any, index) => {
    return (
      <Bullet
        key={index}
        src={bullet.image}
        titleBullet={bullet.titleBullet}
        link={
          bullet.Link
            ? bullet.Link
            : {
                url: '',
                attributeNofollow: false,
                attributeTitle: '',
                openNewTab: false,
                newTab: false,
              }
        }
      />
    )
  })
