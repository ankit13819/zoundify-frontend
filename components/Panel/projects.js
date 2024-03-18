import styles from "../../pages/panel/Panel.module.css";
import greenProject from "../../src/assets/greenProject.svg";
import pinkProject from "../../src/assets/pinkProject.svg";
import blueProject from "../../src/assets/blueProject.svg";
import Image from "next/image";
export default function Projects() {
  return (
    <div>
      <nav
        className={`${styles.SidebarCollapsibleSection} ${styles["SidebarCollapsibleSection--isExpanded"]}`}>
        <div draggable="true">
          <div className={styles.SidebarUpdatedCollapsibleHeader}>
            <div
              className={
                styles["SidebarUpdatedCollapsibleHeader-toggleButton"]
              }>
              <svg
                className={`${styles["SidebarUpdatedCollapsibleHeader-toggleIcon"]} ${styles.Icon}`}
                viewBox="0 0 32 32"
                aria-hidden="true"
                focusable="false">
                <path d="M13.707,6.707L23,16l-9.293,9.293C13.077,25.923,12,25.477,12,24.586V7.414C12,6.523,13.077,6.077,13.707,6.707z"></path>
              </svg>
            </div>
            <h2
              style={{
                margin: "0",
                border: "0",
                padding: "0",
                verticalAlign: "baseline",
                display: "block",
                marginBlockStart: ".83em",
                marginBlockEnd: ".83em",
                marginInlineStart: "0",
                marginInlineEnd: "0",
              }}
              className={`${styles["TypographyPresentation--h6"]} ${styles.TypographyPresentation} ${styles["TypographyPresentation--overflowTruncate"]} ${styles["TypographyPresentation--fontWeightMedium"]} ${styles["TypographyPresentation--colorNavigation"]}`}>
              Projects
            </h2>
          </div>
        </div>
        <div className={styles["RightClickMenu-contextMenuEventListener"]}>
          <a
            className={`${styles.link} ${styles["ThemeableCardPresentation--isValid"]} ${styles["ThemeableInteractiveCardPresentation--isSelected"]} ${styles["ThemeableInteractiveCardPresentation--isEnabled"]} ${styles.ThemeableInteractiveCardPresentation} ${styles.SidebarNavigationLinkCard} ${styles.SidebarItemRow}`}
            aria-label="My media"
            href="#">
            <div className={styles["SidebarNavigationLinkCard-icon"]}>
              <Image src={greenProject} alt="movie icon" />
            </div>
            <span
              className={`${styles["TypographyPresentation--m"]} ${styles.TypographyPresentation} ${styles["SidebarNavigationLinkCard-label"]} ${styles["TypographyPresentation--overflowTruncate"]} ${styles["TypographyPresentation--colorNavigation"]} ${styles.TypographyPresenta}`}>
              Project 1
            </span>
            <div className={styles["SidebarNavigationLinkCard-spacer "]}></div>
          </a>
        </div>
        <div className={styles["RightClickMenu-contextMenuEventListener"]}>
          <a
            className={`${styles.link} ${styles["ThemeableCardPresentation--isValid"]} ${styles["ThemeableInteractiveCardPresentation--isSelected"]} ${styles["ThemeableInteractiveCardPresentation--isEnabled"]} ${styles.ThemeableInteractiveCardPresentation} ${styles.SidebarNavigationLinkCard} ${styles.SidebarItemRow}`}
            aria-label="My media"
            href="#">
            <div className={styles["SidebarNavigationLinkCard-icon"]}>
              <Image src={blueProject} alt="movie icon" />
            </div>
            <span
              className={`${styles["TypographyPresentation--m"]} ${styles.TypographyPresentation} ${styles["SidebarNavigationLinkCard-label"]} ${styles["TypographyPresentation--overflowTruncate"]} ${styles["TypographyPresentation--colorNavigation"]} ${styles.TypographyPresenta}`}>
              Project 2
            </span>
            <div className={styles["SidebarNavigationLinkCard-spacer "]}></div>
          </a>
        </div>
        <div className={styles["RightClickMenu-contextMenuEventListener"]}>
          <a
            className={`${styles.link} ${styles["ThemeableCardPresentation--isValid"]} ${styles["ThemeableInteractiveCardPresentation--isSelected"]} ${styles["ThemeableInteractiveCardPresentation--isEnabled"]} ${styles.ThemeableInteractiveCardPresentation} ${styles.SidebarNavigationLinkCard} ${styles.SidebarItemRow}`}
            aria-label="My media"
            href="#">
            <div className={styles["SidebarNavigationLinkCard-icon"]}>
              <Image src={pinkProject} alt="movie icon" />
            </div>
            <span
              className={`${styles["TypographyPresentation--m"]} ${styles.TypographyPresentation} ${styles["SidebarNavigationLinkCard-label"]} ${styles["TypographyPresentation--overflowTruncate"]} ${styles["TypographyPresentation--colorNavigation"]} ${styles.TypographyPresenta}`}>
              Project 3
            </span>
            <div className={styles["SidebarNavigationLinkCard-spacer "]}></div>
          </a>
        </div>
      </nav>
    </div>
  );
}
