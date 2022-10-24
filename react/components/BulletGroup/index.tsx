import React, { PropsWithChildren } from 'react'
import { useListContext, ListContextProvider } from 'vtex.list-context'
import { useDevice } from 'vtex.device-detector'
import { useCssHandles } from 'vtex.css-handles'

import { getBulletsAsTSXList } from './modules/bulletsAsList'
import { BulletsSchema } from './BulletType'

export interface BulletGroupProps {
  bullets: BulletsSchema
}
const BulletGroup = ({
  bullets,
  children,
}: PropsWithChildren<BulletGroupProps>) => {
  const { isMobile } = useDevice()
  const { list } = useListContext() || []

  const bulletsGroup = getBulletsAsTSXList(bullets)
  const newListContextValue = list.concat(bulletsGroup)
  const CSS_HANDLES = ['bullet__container', 'bullet_desktop__container']
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <ListContextProvider list={newListContextValue}>
      {isMobile ? (
        <div className={handles.bullet__container}>{bulletsGroup}</div>
      ) : (
        <div className={handles.bullet_desktop__container}>{children}</div>
      )}
    </ListContextProvider>
  )
}

export default BulletGroup
