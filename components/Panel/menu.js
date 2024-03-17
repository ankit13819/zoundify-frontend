import Image from "next/image";
import styles from "../../pages/panel/Panel.module.css";
import mediaImg from "../../src/assets/movie.svg";
import uploadImg from "../../src/assets/upload.svg";
export default function Menu({ handleHomeMenuClick }) {
  return (
    <nav
      className={`${styles["SidebarCollapsibleSection--isFirstSection"]} ${styles["SidebarCollapsibleSection--isExpanded"]} ${styles.SidebarCollapsibleSection} ${styles.SidebarTopNavLinks}`}>
      {/* Nav Menu */}
      <div
        className={styles["RightClickMenu-contextMenuEventListener"]}
        onClick={handleHomeMenuClick}>
        <a
          className={`${styles.link} ${styles["ThemeableCardPresentation--isValid"]} ${styles["ThemeableInteractiveCardPresentation--isSelected"]} ${styles["ThemeableInteractiveCardPresentation--isEnabled"]} ${styles.ThemeableInteractiveCardPresentation} ${styles.SidebarNavigationLinkCard} ${styles.SidebarItemRow} ${styles.ThemeableCardPresentationNav}`}
          aria-label="Home"
          href="#">
          <div className={styles["SidebarNavigationLinkCard-icon"]}>
            <svg
              className={styles.NavIcon}
              services="[object Object]"
              viewBox="0 0 40 40"
              aria-hidden="true"
              focusable="false">
              <path d="M37.9,15L22.2,3.8c-1.3-1-3.1-1-4.4-0.1L2.2,14.4c-0.7,0.5-0.9,1.4-0.4,2.1c0.5,0.7,1.4,0.9,2.1,0.4L6,15.4v12.3c0,4.6,3.7,8.3,8.3,8.3h11.4c4.6,0,8.3-3.7,8.3-8.3V15.9l2.1,1.5c0.3,0.2,0.6,0.3,0.9,0.3c0.5,0,0.9-0.2,1.2-0.6C38.7,16.4,38.5,15.5,37.9,15z M31,27.7c0,2.9-2.4,5.3-5.3,5.3H14.3C11.4,33,9,30.6,9,27.7V13.3l10.6-7.2c0.2-0.2,0.5-0.2,0.8,0L31,13.7V27.7z"></path>
            </svg>
          </div>
          <span
            className={`${styles["TypographyPresentation--m"]} ${styles.TypographyPresentation} ${styles["SidebarNavigationLinkCard-label"]} ${styles["TypographyPresentation--overflowTruncate"]} ${styles["TypographyPresentation--colorNavigation"]} ${styles.TypographyPresenta}`}>
            Home
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
            <Image src={mediaImg} alt="movie icon" />
          </div>
          <span
            className={`${styles["TypographyPresentation--m"]} ${styles.TypographyPresentation} ${styles["SidebarNavigationLinkCard-label"]} ${styles["TypographyPresentation--overflowTruncate"]} ${styles["TypographyPresentation--colorNavigation"]} ${styles.TypographyPresenta}`}>
            My media
          </span>
          <div className={styles["SidebarNavigationLinkCard-spacer "]}></div>
        </a>
      </div>
      <div className={styles["RightClickMenu-contextMenuEventListener"]}>
        <a
          className={`${styles.link} ${styles["ThemeableCardPresentation--isValid"]} ${styles["ThemeableInteractiveCardPresentation--isSelected"]} ${styles["ThemeableInteractiveCardPresentation--isEnabled"]} ${styles.ThemeableInteractiveCardPresentation} ${styles.SidebarNavigationLinkCard} ${styles.SidebarItemRow}`}
          aria-label="Inbox"
          href="#">
          <div className={styles["SidebarNavigationLinkCard-icon"]}>
            <Image src={uploadImg} alt="upload image" />
          </div>
          <span
            className={`${styles["TypographyPresentation--m"]} ${styles.TypographyPresentation} ${styles["SidebarNavigationLinkCard-label"]} ${styles["TypographyPresentation--overflowTruncate"]} ${styles["TypographyPresentation--colorNavigation"]} ${styles.TypographyPresenta}`}>
            Upload media
          </span>
          <div className={styles["SidebarNavigationLinkCard-spacer "]}></div>
        </a>
      </div>
    </nav>
  );
}
