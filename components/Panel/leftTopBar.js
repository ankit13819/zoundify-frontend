import styles from "../../pages/panel/Panel.module.css";
export default function LeftTopBar() {
  return (
    <div
      className={`${styles["GlobalTopbarStructure-leftSide"]} ${styles["GlobalTopbarStructure-leftSide--shouldAlignNavButtons"]}`}>
      <div
        className={`${styles["GlobalTopbarStructure-leftSide"]} ${styles["GlobalTopbarStructure-leftChildren"]} ${styles["GlobalTopbarStructure-noDrag"]}`}>
        <div
          className={`${styles["GlobalTopbar-toggleSidebarButton"]} ${styles["ThemeableIconButtonPresentation"]} ${styles["ThemeableIconButtonPresentation--medium"]} ${styles["ThemeableIconButtonPresentation--isEnabled"]} ${styles["GlobalTopbar-toggleSidebarButton--inverseTheme"]}`}>
          <svg
            className={styles.Icon}
            viewBox="0 0 32 32"
            aria-hidden="true"
            focusable="false">
            <path d="M1,16h30c0.6,0,1,0.4,1,1l0,0c0,0.6-0.4,1-1,1H1c-0.6,0-1-0.4-1-1l0,0C0,16.4,0.4,16,1,16z M1,4h30c0.6,0,1,0.4,1,1l0,0c0,0.6-0.4,1-1,1H1C0.4,6,0,5.6,0,5l0,0C0,4.4,0.4,4,1,4z M1,28h30c0.6,0,1,0.4,1,1l0,0c0,0.6-0.4,1-1,1H1c-0.6,0-1-0.4-1-1l0,0C0,28.4,0.4,28,1,28z"></path>
          </svg>
        </div>
        <div
          className={`${styles.OmnibuttonButtonCard} ${styles["ThemeableCardPresentation--isValid"]} ${styles["ThemeableCardPresentation--isEnabled"]} ${styles.ThemeableCardPresentation} ${styles["ThemeableInteractiveCardPresentation--isNotSelected"]} ${styles.ThemeableInteractiveCardPresentation} ${styles["ThemeableInteractiveCardPresentation--isEnabled"]}`}>
          <div className={styles["OmnibuttonButtonCard-iconContainer"]}>
            <svg
              className={`${styles["OmnibuttonButtonCard-icon"]} ${styles.MiniIcon}`}
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false">
              <path d="M10,10V4c0-1.1,0.9-2,2-2s2,0.9,2,2v6h6c1.1,0,2,0.9,2,2s-0.9,2-2,2h-6v6c0,1.1-0.9,2-2,2s-2-0.9-2-2v-6H4c-1.1,0-2-0.9-2-2s0.9-2,2-2H10z"></path>
            </svg>
          </div>
          <span
            className={`${styles.TypographyPresentation} ${styles["TypographyPresentation--m"]} ${styles["TypographyPresentation--colorNavigation"]} ${styles.OmnibuttonButtonCardLabel}`}>
            Create
          </span>
        </div>
      </div>
    </div>
  );
}
