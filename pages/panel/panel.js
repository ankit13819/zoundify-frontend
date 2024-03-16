import Image from "next/image";
import styles from "./Panel.module.css";
import AvatarImg from "../../src/assets/zoundify.png";
export default function Panel() {
  return (
    <div className={styles.AppRoot} id="asana_root">
      <div className={styles["AppRoot-fullPage"]}>
        <div className={styles.GlobalTopbarStructure}>
          <div
            className={`${styles["GlobalTopbarStructure-leftSide"]} ${styles["GlobalTopbarStructure-leftSide--shouldAlignNavButtons"]}`}
          >
            <div
              className={`${styles["GlobalTopbarStructure-leftSide"]} ${styles["GlobalTopbarStructure-leftChildren"]} ${styles["GlobalTopbarStructure-noDrag"]}`}
            >
              <div
                className={`${styles["GlobalTopbar-toggleSidebarButton"]} ${styles["ThemeableIconButtonPresentation"]} ${styles["ThemeableIconButtonPresentation--medium"]} ${styles["ThemeableIconButtonPresentation--isEnabled"]} ${styles["GlobalTopbar-toggleSidebarButton--inverseTheme"]}`}
              >
                <svg
                  className={styles.Icon}
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M1,16h30c0.6,0,1,0.4,1,1l0,0c0,0.6-0.4,1-1,1H1c-0.6,0-1-0.4-1-1l0,0C0,16.4,0.4,16,1,16z M1,4h30c0.6,0,1,0.4,1,1l0,0c0,0.6-0.4,1-1,1H1C0.4,6,0,5.6,0,5l0,0C0,4.4,0.4,4,1,4z M1,28h30c0.6,0,1,0.4,1,1l0,0c0,0.6-0.4,1-1,1H1c-0.6,0-1-0.4-1-1l0,0C0,28.4,0.4,28,1,28z"></path>
                </svg>
              </div>
              <div
                className={`${styles.OmnibuttonButtonCard} ${styles["ThemeableCardPresentation--isValid"]} ${styles["ThemeableCardPresentation--isEnabled"]} ${styles.ThemeableCardPresentation} ${styles["ThemeableInteractiveCardPresentation--isNotSelected"]} ${styles.ThemeableInteractiveCardPresentation} ${styles["ThemeableInteractiveCardPresentation--isEnabled"]}`}
              >
                <div className={styles["OmnibuttonButtonCard-iconContainer"]}>
                  <svg
                    className={`${styles["OmnibuttonButtonCard-icon"]} ${styles.MiniIcon}`}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M10,10V4c0-1.1,0.9-2,2-2s2,0.9,2,2v6h6c1.1,0,2,0.9,2,2s-0.9,2-2,2h-6v6c0,1.1-0.9,2-2,2s-2-0.9-2-2v-6H4c-1.1,0-2-0.9-2-2s0.9-2,2-2H10z"></path>
                  </svg>
                </div>
                <span
                  className={`${styles.TypographyPresentation} ${styles["TypographyPresentation--m"]} ${styles["TypographyPresentation--colorNavigation"]} ${styles.OmnibuttonButtonCardLabel}`}
                >
                  Create
                </span>
              </div>
            </div>
          </div>
          {/*Global Structure Right Side */}
          <div className={styles["GlobalTopbarStructure-rightSide"]}>
            <div
              className={`${styles["GlobalTopbarStructure-rightSide"]} ${styles["GlobalTopbarStructure-rightChildren"]} ${styles["GlobalTopbarStructure - noDrag"]}`}
            >
              <div className={styles.UnconfirmedTrialReminder}>
                <span
                  className={`${styles.TypographyPresentation} ${styles["TypographyPresentation--s"]} ${styles["TypographyPresentation--colorNavigation"]} ${styles["UnconfirmedTrialReminder--countdownText"]}`}
                >
                  30 days left in trial
                </span>
                <div
                  className={` ${styles.UpsellButton} ${styles["ThemeableRectangularButtonPresentation--medium"]} ${styles["ThemeableRectangularButtonPresentation--isEnabled"]}`}
                >
                  Add Billing Info
                </div>
                <div
                  className={`${styles.ThemeableRectangularButtonPresentation} ${styles.TopbarSettingsMenuButton} ${styles["ThemeableRectangularButtonPresentation--large"]} ${styles["ThemeableRectangularButtonPresentation--isEnabled"]}`}
                >
                  <span
                    className={`${styles["ThemeableRectangularButtonPresentation--withNoLabel"]} ${styles["ThemeableRectangularButtonPresentation-leftIcon"]} ${styles.TopbarSettingsMenuButtonIcon}`}
                  >
                    <div
                      className={`${styles.Avatar} ${styles.AvatarPhoto} ${styles["AvatarPhoto--color2"]} ${styles["AvatarPhoto--medium"]}`}
                    >
                      <div className={styles["AvatarPhoto-image"]}></div>
                      AM
                    </div>
                  </span>
                  <svg
                    className={styles.MiniIcon}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M3.5,8.9c0-0.4,0.1-0.7,0.4-1C4.5,7.3,5.4,7.2,6,7.8l5.8,5.2l6.1-5.2C18.5,7.3,19.5,7.3,20,8c0.6,0.6,0.5,1.5-0.1,2.1 l-7.1,6.1c-0.6,0.5-1.4,0.5-2,0L4,10.1C3.6,9.8,3.5,9.4,3.5,8.9z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Asana Main*/}
        <div className={styles.AsanaMain}></div>
        <div className={styles["AsanaMain-mainLayer"]} id="asana_main">
          <div className={styles.LearningHubTransitionManager}></div>
          {/* Asana Sidebar */}
          <div
            className={`${styles["AsanaMain-sidebarResizableContainer "]} ${styles.SidebarResizableContainer}`}
            style={{ width: "240px" }}
          >
            {/* all side bar contain inside this div */}
            <div
              className={styles["SidebarResizableContainer-sidebarWrapper "]}
              style={{ flex: "0 0 240px" }}
            >
              {/* Navbar container */}
              <div
                className={`${styles["SidebarResizableContainer-sidebar"]} ${styles.Sidebar}`}
              >
                <nav
                  className={`${styles["SidebarCollapsibleSection--isFirstSection"]} ${styles["SidebarCollapsibleSection--isExpanded"]} ${styles.SidebarCollapsibleSection} ${styles.SidebarTopNavLinks}`}
                >
                  {/* Nav Menu */}
                  <div
                    className={
                      styles["RightClickMenu-contextMenuEventListener"]
                    }
                  >
                    <a
                      className={`${styles.link} ${styles["ThemeableCardPresentation--isValid"]} ${styles["ThemeableInteractiveCardPresentation--isSelected"]} ${styles["ThemeableInteractiveCardPresentation--isEnabled"]} ${styles.ThemeableInteractiveCardPresentation} ${styles.SidebarNavigationLinkCard} ${styles.SidebarItemRow}`}
                      aria-label="Home"
                      href="#"
                    >
                      <div className={styles["SidebarNavigationLinkCard-icon"]}>
                        <svg
                          className={styles.NavIcon}
                          services="[object Object]"
                          viewBox="0 0 40 40"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path d="M37.9,15L22.2,3.8c-1.3-1-3.1-1-4.4-0.1L2.2,14.4c-0.7,0.5-0.9,1.4-0.4,2.1c0.5,0.7,1.4,0.9,2.1,0.4L6,15.4v12.3c0,4.6,3.7,8.3,8.3,8.3h11.4c4.6,0,8.3-3.7,8.3-8.3V15.9l2.1,1.5c0.3,0.2,0.6,0.3,0.9,0.3c0.5,0,0.9-0.2,1.2-0.6C38.7,16.4,38.5,15.5,37.9,15z M31,27.7c0,2.9-2.4,5.3-5.3,5.3H14.3C11.4,33,9,30.6,9,27.7V13.3l10.6-7.2c0.2-0.2,0.5-0.2,0.8,0L31,13.7V27.7z"></path>
                        </svg>
                      </div>
                      <span
                        className={`${styles["TypographyPresentation--m"]} ${styles.TypographyPresentation} ${styles["SidebarNavigationLinkCard-label"]} ${styles["TypographyPresentation--overflowTruncate"]} ${styles["TypographyPresentation--colorNavigation"]} ${styles.TypographyPresenta}`}
                      >
                        Home
                      </span>
                      <div
                        className={styles["SidebarNavigationLinkCard-spacer "]}
                      ></div>
                    </a>
                  </div>
                  <div
                    className={
                      styles["RightClickMenu-contextMenuEventListener"]
                    }
                  >
                    <a
                      className={`${styles.link} ${styles["ThemeableCardPresentation--isValid"]} ${styles["ThemeableInteractiveCardPresentation--isSelected"]} ${styles["ThemeableInteractiveCardPresentation--isEnabled"]} ${styles.ThemeableInteractiveCardPresentation} ${styles.SidebarNavigationLinkCard} ${styles.SidebarItemRow}`}
                      aria-label="My tasks"
                      href="#"
                    >
                      <div className={styles["SidebarNavigationLinkCard-icon"]}>
                        <svg
                          className={styles.NavIcon}
                          viewBox="0 0 40 40"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path d="M20,2.5C10.4,2.5,2.5,10.4,2.5,20S10.4,37.5,20,37.5S37.5,29.6,37.5,20S29.6,2.5,20,2.5z M20,34.5C12,34.5,5.5,28,5.5,20S12,5.5,20,5.5S34.5,12,34.5,20S28,34.5,20,34.5z M27.7,15c0.6,0.6,0.6,1.5,0,2.1l-10,10c-0.2,0.2-0.6,0.3-1,0.3c-0.4,0-0.8-0.1-1.1-0.4l-4.1-4.1c-0.6-0.6-0.6-1.5,0-2.1c0.6-0.6,1.5-0.6,2.1,0l3.1,3.1l8.9-8.9C26.2,14.4,27.1,14.4,27.7,15z"></path>
                        </svg>
                      </div>
                      <span
                        className={`${styles["TypographyPresentation--m"]} ${styles.TypographyPresentation} ${styles["SidebarNavigationLinkCard-label"]} ${styles["TypographyPresentation--overflowTruncate"]} ${styles["TypographyPresentation--colorNavigation"]} ${styles.TypographyPresenta}`}
                      >
                        My tasks
                      </span>
                      <div
                        className={styles["SidebarNavigationLinkCard-spacer "]}
                      ></div>
                    </a>
                  </div>
                  <div
                    className={
                      styles["RightClickMenu-contextMenuEventListener"]
                    }
                  >
                    <a
                      className={`${styles.link} ${styles["ThemeableCardPresentation--isValid"]} ${styles["ThemeableInteractiveCardPresentation--isSelected"]} ${styles["ThemeableInteractiveCardPresentation--isEnabled"]} ${styles.ThemeableInteractiveCardPresentation} ${styles.SidebarNavigationLinkCard} ${styles.SidebarItemRow}`}
                      aria-label="Inbox"
                      href="#"
                    >
                      <div className={styles["SidebarNavigationLinkCard-icon"]}>
                        <svg
                          className={styles.NavIcon}
                          services="[object Object]"
                          viewBox="0 0 40 40"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path d="M7.5,32L7.5,32h-1c-1.5,0-2.8-0.8-3.4-2c-0.8-1.5-0.4-3.4,0.9-4.5c1.2-1,1.9-2.4,2-3.9v-6.1C6,8.1,12.3,2,20,2s14,6.1,14,13.5V22c0.2,1.4,0.9,2.6,2,3.5c1.3,1.1,1.7,2.9,0.9,4.5c-0.6,1.2-2,2-3.4,2h-0.9H7.5z M7.6,29h25.8c0.3,0,0.7-0.2,0.8-0.4c0.2-0.4,0-0.7-0.2-0.8l0,0c-1.6-1.4-2.7-3.3-3-5.5c0-0.1,0-0.1,0-0.2v-6.6C31,9.7,26.1,5,20,5S9,9.7,9,15.5v6.1v0.1c-0.2,2.4-1.3,4.5-3.1,6c-0.2,0.2-0.3,0.5-0.2,0.8C5.9,28.8,6.2,29,6.5,29H7.6L7.6,29z M24.7,34c-0.7,1.9-2.5,3.2-4.7,3.2s-4-1.3-4.7-3.2H24.7z"></path>
                        </svg>
                      </div>
                      <span
                        className={`${styles["TypographyPresentation--m"]} ${styles.TypographyPresentation} ${styles["SidebarNavigationLinkCard-label"]} ${styles["TypographyPresentation--overflowTruncate"]} ${styles["TypographyPresentation--colorNavigation"]} ${styles.TypographyPresenta}`}
                      >
                        Inbox
                      </span>
                      <div
                        className={styles["SidebarNavigationLinkCard-spacer "]}
                      ></div>
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
