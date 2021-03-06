import React from 'react'
// import useListenOutsideEvents from "../../../tools/useListenOutsideEvents";
// import { mainMenuEventsSettings } from '../config/'
import MainMenuList from '../components/MainMenuList'
// import mainMenuYAML from '@Content/menus/main-menu.yaml'

const MainMenuContainer = ({
  refState,
  mainMenuStatus,
  isMobile,
  wrapperRef,
}) => {
  const mainMenuItems = null
  const isVisibleClass = refState ? 'visible' : 'not-visible'
  const navClasses = isMobile
    ? 'main-nav menu-state-' + isVisibleClass
    : 'main-nav desktop-onl main-header main-header-' + isVisibleClass
  const labelledby = isMobile ? 'check-toggle-icon' : null
  // const { handleRefState } = props;
  // const toggleConfig = mainMenuEventsSettings({
  //   wrapperRef,
  //   handleRefState,
  //   refState,
  // });
  // useListenOutsideEvents(toggleConfig);
  // if (mainMenuStatus !== 'active') {
  // 	return null
  // }
  return (
    <nav
      className={navClasses}
      ref={wrapperRef}
      id="site-navigation"
      itemScope="itemScope"
      itemType="http://schema.org/SiteNavigationElement"
    >
      <ul
        className="main-ul"
        id="mainmenu"
        role="menu"
        aria-labelledby={labelledby}
      >
        {mainMenuItems?.map((listMobile, indxMobile) => (
          <MainMenuList
            list={listMobile}
            key={indxMobile}
            isMobile={isMobile}
          />
        ))}
      </ul>
    </nav>
  )
}
export default MainMenuContainer
