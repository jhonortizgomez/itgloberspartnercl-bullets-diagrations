import React, { PropsWithChildren } from 'react'
import { useListContext, ListContextProvider } from 'vtex.list-context'
import { useDevice } from 'vtex.device-detector'

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

  return (
    <ListContextProvider list={newListContextValue}>
      {isMobile ? <div>{bulletsGroup}</div> : children}
    </ListContextProvider>
  )
}

export default BulletGroup
