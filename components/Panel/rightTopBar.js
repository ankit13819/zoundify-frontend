import styles from "../../pages/panel/Panel.module.css";
export default function RightTopBar() {
  return (
    <div className={styles["GlobalTopbarStructure-rightSide"]}>
      <div
        className={`${styles["GlobalTopbarStructure-rightSide"]} ${styles["GlobalTopbarStructure-rightChildren"]} ${styles["GlobalTopbarStructure - noDrag"]}`}>
        <div className={styles.UnconfirmedTrialReminder}>
          <span
            className={`${styles.TypographyPresentation} ${styles["TypographyPresentation--s"]} ${styles["TypographyPresentation--colorNavigation"]} ${styles["UnconfirmedTrialReminder--countdownText"]}`}>
            30 days left in trial
          </span>
          <div
            className={` ${styles.UpsellButton} ${styles["ThemeableRectangularButtonPresentation--medium"]} ${styles["ThemeableRectangularButtonPresentation--isEnabled"]}`}>
            Add Billing Info
          </div>
          <div
            className={`${styles.ThemeableRectangularButtonPresentation} ${styles.TopbarSettingsMenuButton} ${styles["ThemeableRectangularButtonPresentation--large"]} ${styles["ThemeableRectangularButtonPresentation--isEnabled"]}`}>
            <span
              className={`${styles["ThemeableRectangularButtonPresentation--withNoLabel"]} ${styles["ThemeableRectangularButtonPresentation-leftIcon"]} ${styles.TopbarSettingsMenuButtonIcon}`}>
              <div
                className={`${styles.Avatar} ${styles.AvatarPhoto} ${styles["AvatarPhoto--color2"]} ${styles["AvatarPhoto--medium"]}`}>
                <div className={styles["AvatarPhoto-image"]}></div>
                AM
              </div>
            </span>
            <svg
              className={styles.MiniIcon}
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false">
              <path d="M3.5,8.9c0-0.4,0.1-0.7,0.4-1C4.5,7.3,5.4,7.2,6,7.8l5.8,5.2l6.1-5.2C18.5,7.3,19.5,7.3,20,8c0.6,0.6,0.5,1.5-0.1,2.1 l-7.1,6.1c-0.6,0.5-1.4,0.5-2,0L4,10.1C3.6,9.8,3.5,9.4,3.5,8.9z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
