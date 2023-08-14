import { useWeb3React } from '@web3-react/core'
import Column from 'components/Column'
import WalletModal from 'components/WalletModal'
import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'

import AuthenticatedHeader from './AuthenticatedHeader'
import SettingsMenu from './SettingsMenu'

const DefaultMenuWrap = styled(Column)`
  width: 100%;
  height: 100%;
`

enum MenuState {
  DEFAULT,
  SETTINGS,
}

function DefaultMenu({ drawerOpen }: { drawerOpen: boolean }) {
  const { account } = useWeb3React()
  const isAuthenticated = !!account

  const [menu, setMenu] = useState<MenuState>(MenuState.DEFAULT)
  const openSettings = useCallback(() => setMenu(MenuState.SETTINGS), [])
  const closeSettings = useCallback(() => setMenu(MenuState.DEFAULT), [])

  useEffect(() => {
    if (!drawerOpen && menu === MenuState.SETTINGS) {
      // wait for the drawer to close before resetting the menu
      const timer = setTimeout(() => {
        closeSettings()
      }, 250)
      return () => clearTimeout(timer)
    }
    return
  }, [drawerOpen, menu, closeSettings])

  return (
    <DefaultMenuWrap>
      {menu === MenuState.DEFAULT &&
        (isAuthenticated ? (
          <AuthenticatedHeader account={account} openSettings={openSettings} />
        ) : (
          <WalletModal openSettings={openSettings} />
        ))}
      {menu === MenuState.SETTINGS && <SettingsMenu onClose={closeSettings} />}
    </DefaultMenuWrap>
  )
}

export default DefaultMenu
