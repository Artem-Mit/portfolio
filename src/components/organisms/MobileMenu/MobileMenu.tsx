'use client'
import { FC, useContext, useEffect } from "react";
import { MenuContext } from "@/contexts/menuProvider";
import styles from './mobilemenu.module.scss'
import { HeaderActions } from "@/components/molecules/HeaderActions/HeaderActions";
import { MobileMenuProps } from "./types";
import { Navigation } from "@/components/molecules/Navigation/Navigation";


export const MobileMenu: FC<MobileMenuProps> = ({ aboutLinkName, worksLinkName, contactsLinkName, downloadButtonText, anotherLanguage }) => {
  const { isOpened, setIsOpened } = useContext(MenuContext);

  const closeMenu = () => {
    setIsOpened(!isOpened)
  }

  return (
    <div className={`${styles.menu} ${isOpened ? styles.menu_active : ''}`}>
      <div className={styles.closeButton} onClick={closeMenu} />
      <Navigation aboutLinkName={aboutLinkName} contactsLinkName={contactsLinkName} worksLinkName={worksLinkName} onClick={() => closeMenu()} />
      <HeaderActions buttonText={downloadButtonText} language={anotherLanguage} />
    </div>
  )
}

