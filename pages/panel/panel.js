import Image from "next/image";
import styles from "./Panel.module.css";
import AvatarImg from "../../src/assets/zoundify.png";
import mediaImg from "../../src/assets/movie.svg";
import uploadImg from "../../src/assets/upload.svg";
import greenProject from "../../src/assets/greenProject.svg";
import pinkProject from "../../src/assets/pinkProject.svg";
import blueProject from "../../src/assets/blueProject.svg";
import Group from "../../src/assets/group.svg";
import Manufacturing from "../../src/assets/manufacturing.svg";
import Query from "../../src/assets/query_stats.svg";
import RecordVoice from "../../src/assets/record_voice_over.svg";
export default function Panel() {
  return (
    <div className={styles.AppRoot} id="asana_root">
      <div className={styles["AppRoot-fullPage"]}>
        <div className={styles.GlobalTopbarStructure}>
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
          {/*Global Structure Right Side */}
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
        </div>
        {/*Asana Main*/}
        <div className={styles.AsanaMain}></div>
        <div className={styles["AsanaMain-mainLayer"]} id="asana_main">
          <div className={styles.LearningHubTransitionManager}></div>
          {/* Asana Sidebar */}
          <div
            className={`${styles["AsanaMain-sidebarResizableContainer "]} ${styles.SidebarResizableContainer}`}
            style={{ width: "240px" }}>
            {/* all side bar contain inside this div */}
            <div
              className={styles["SidebarResizableContainer-sidebarWrapper "]}
              style={{ flex: "0 0 240px" }}>
              {/* Navbar container */}
              <div
                className={`${styles["SidebarResizableContainer-sidebar"]} ${styles.Sidebar}`}>
                <nav
                  className={`${styles["SidebarCollapsibleSection--isFirstSection"]} ${styles["SidebarCollapsibleSection--isExpanded"]} ${styles.SidebarCollapsibleSection} ${styles.SidebarTopNavLinks}`}>
                  {/* Nav Menu */}
                  <div
                    className={
                      styles["RightClickMenu-contextMenuEventListener"]
                    }>
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
                      <div
                        className={
                          styles["SidebarNavigationLinkCard-spacer "]
                        }></div>
                    </a>
                  </div>
                  <div
                    className={
                      styles["RightClickMenu-contextMenuEventListener"]
                    }>
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
                      <div
                        className={
                          styles["SidebarNavigationLinkCard-spacer "]
                        }></div>
                    </a>
                  </div>
                  <div
                    className={
                      styles["RightClickMenu-contextMenuEventListener"]
                    }>
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
                      <div
                        className={
                          styles["SidebarNavigationLinkCard-spacer "]
                        }></div>
                    </a>
                  </div>
                </nav>
                {/* Project Started Here */}
                <div
                  className={`${styles.CustomScrollbarScrollable} ${styles["Sidebar-customScrollbarScrollable"]}`}>
                  <div
                    className={`${styles["Scrollable--vertical"]} ${styles["Scrollable--withCompositingLayer"]} ${styles["CustomScrollbarScrollable-scrollable"]}`}>
                    <div
                      className={`${styles["Sidebar-customScrollbarScrollable"]} ${styles["CustomScrollbarScrollable-content"]} ${styles.Sidebar}`}>
                      <div className={styles["Sidebar-sectionsSortableList"]}>
                        <div>
                          <nav
                            className={`${styles.SidebarCollapsibleSection} ${styles["SidebarCollapsibleSection--isExpanded"]}`}>
                            <div draggable="true">
                              <div
                                className={
                                  styles.SidebarUpdatedCollapsibleHeader
                                }>
                                <div
                                  className={
                                    styles[
                                      "SidebarUpdatedCollapsibleHeader-toggleButton"
                                    ]
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
                                <div
                                  className={`${styles.ThemeableIconButtonPresentationSidebar} ${styles["ThemeableIconButtonPresentation--small"]} ${styles["SidebarUpdatedCollapsibleHeader-addButton"]} ${styles["SidebarUpdatedCollapsibleHeader-addButton"]} ${styles["ThemeableIconButtonPresentation--isEnabled "]} ${styles["SidebarUpdatedCollapsibleHeader-addButton"]}`}>
                                  <svg
                                    className={styles.MiniIcon}
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    focusable="false">
                                    <path d="M10,10V4c0-1.1,0.9-2,2-2s2,0.9,2,2v6h6c1.1,0,2,0.9,2,2s-0.9,2-2,2h-6v6c0,1.1-0.9,2-2,2s-2-0.9-2-2v-6H4c-1.1,0-2-0.9-2-2s0.9-2,2-2H10z"></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div
                              className={
                                styles[
                                  "RightClickMenu-contextMenuEventListener"
                                ]
                              }>
                              <a
                                className={`${styles.link} ${styles["ThemeableCardPresentation--isValid"]} ${styles["ThemeableInteractiveCardPresentation--isSelected"]} ${styles["ThemeableInteractiveCardPresentation--isEnabled"]} ${styles.ThemeableInteractiveCardPresentation} ${styles.SidebarNavigationLinkCard} ${styles.SidebarItemRow}`}
                                aria-label="My media"
                                href="#">
                                <div
                                  className={
                                    styles["SidebarNavigationLinkCard-icon"]
                                  }>
                                  <Image src={greenProject} alt="movie icon" />
                                </div>
                                <span
                                  className={`${styles["TypographyPresentation--m"]} ${styles.TypographyPresentation} ${styles["SidebarNavigationLinkCard-label"]} ${styles["TypographyPresentation--overflowTruncate"]} ${styles["TypographyPresentation--colorNavigation"]} ${styles.TypographyPresenta}`}>
                                  Project 1
                                </span>
                                <div
                                  className={
                                    styles["SidebarNavigationLinkCard-spacer "]
                                  }></div>
                              </a>
                            </div>
                            <div
                              className={
                                styles[
                                  "RightClickMenu-contextMenuEventListener"
                                ]
                              }>
                              <a
                                className={`${styles.link} ${styles["ThemeableCardPresentation--isValid"]} ${styles["ThemeableInteractiveCardPresentation--isSelected"]} ${styles["ThemeableInteractiveCardPresentation--isEnabled"]} ${styles.ThemeableInteractiveCardPresentation} ${styles.SidebarNavigationLinkCard} ${styles.SidebarItemRow}`}
                                aria-label="My media"
                                href="#">
                                <div
                                  className={
                                    styles["SidebarNavigationLinkCard-icon"]
                                  }>
                                  <Image src={blueProject} alt="movie icon" />
                                </div>
                                <span
                                  className={`${styles["TypographyPresentation--m"]} ${styles.TypographyPresentation} ${styles["SidebarNavigationLinkCard-label"]} ${styles["TypographyPresentation--overflowTruncate"]} ${styles["TypographyPresentation--colorNavigation"]} ${styles.TypographyPresenta}`}>
                                  Project 2
                                </span>
                                <div
                                  className={
                                    styles["SidebarNavigationLinkCard-spacer "]
                                  }></div>
                              </a>
                            </div>
                            <div
                              className={
                                styles[
                                  "RightClickMenu-contextMenuEventListener"
                                ]
                              }>
                              <a
                                className={`${styles.link} ${styles["ThemeableCardPresentation--isValid"]} ${styles["ThemeableInteractiveCardPresentation--isSelected"]} ${styles["ThemeableInteractiveCardPresentation--isEnabled"]} ${styles.ThemeableInteractiveCardPresentation} ${styles.SidebarNavigationLinkCard} ${styles.SidebarItemRow}`}
                                aria-label="My media"
                                href="#">
                                <div
                                  className={
                                    styles["SidebarNavigationLinkCard-icon"]
                                  }>
                                  <Image src={pinkProject} alt="movie icon" />
                                </div>
                                <span
                                  className={`${styles["TypographyPresentation--m"]} ${styles.TypographyPresentation} ${styles["SidebarNavigationLinkCard-label"]} ${styles["TypographyPresentation--overflowTruncate"]} ${styles["TypographyPresentation--colorNavigation"]} ${styles.TypographyPresenta}`}>
                                  Project 3
                                </span>
                                <div
                                  className={
                                    styles["SidebarNavigationLinkCard-spacer "]
                                  }></div>
                              </a>
                            </div>
                          </nav>
                        </div>
                        <nav
                          className={`${styles.SidebarCollapsibleSection} ${styles["SidebarCollapsibleSection--isExpanded"]}`}>
                          <div draggable="true">
                            <div
                              className={
                                styles.SidebarUpdatedCollapsibleHeader
                              }>
                              <div
                                className={
                                  styles[
                                    "SidebarUpdatedCollapsibleHeader-toggleButton"
                                  ]
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
                                Team
                              </h2>
                            </div>
                          </div>
                          <div
                            className={
                              styles["RightClickMenu-contextMenuEventListener"]
                            }>
                            <a
                              className={`${styles.link} ${styles["ThemeableCardPresentation--isValid"]} ${styles["ThemeableInteractiveCardPresentation--isSelected"]} ${styles["ThemeableInteractiveCardPresentation--isEnabled"]} ${styles.ThemeableInteractiveCardPresentation} ${styles.SidebarNavigationLinkCard} ${styles.SidebarItemRow}`}
                              aria-label="My media"
                              href="#">
                              <div
                                className={
                                  styles["SidebarNavigationLinkCard-icon"]
                                }>
                                <Image src={Group} alt="movie icon" />
                              </div>
                              <span
                                className={`${styles["TypographyPresentation--m"]} ${styles.TypographyPresentation} ${styles["SidebarNavigationLinkCard-label"]} ${styles["TypographyPresentation--overflowTruncate"]} ${styles["TypographyPresentation--colorNavigation"]} ${styles.TypographyPresenta}`}>
                                My Workspaces
                              </span>
                              <div
                                className={
                                  styles["SidebarNavigationLinkCard-spacer "]
                                }></div>
                            </a>
                          </div>
                          <div
                            className={
                              styles["RightClickMenu-contextMenuEventListener"]
                            }>
                            <a
                              className={`${styles.link} ${styles["ThemeableCardPresentation--isValid"]} ${styles["ThemeableInteractiveCardPresentation--isSelected"]} ${styles["ThemeableInteractiveCardPresentation--isEnabled"]} ${styles.ThemeableInteractiveCardPresentation} ${styles.SidebarNavigationLinkCard} ${styles.SidebarItemRow}`}
                              aria-label="My media"
                              href="#">
                              <div
                                className={
                                  styles["SidebarNavigationLinkCard-icon"]
                                }>
                                <Image src={RecordVoice} alt="movie icon" />
                              </div>
                              <span
                                className={`${styles["TypographyPresentation--m"]} ${styles.TypographyPresentation} ${styles["SidebarNavigationLinkCard-label"]} ${styles["TypographyPresentation--overflowTruncate"]} ${styles["TypographyPresentation--colorNavigation"]} ${styles.TypographyPresenta}`}>
                                Voices
                              </span>
                              <div
                                className={
                                  styles["SidebarNavigationLinkCard-spacer "]
                                }></div>
                            </a>
                          </div>
                          <div
                            className={
                              styles["RightClickMenu-contextMenuEventListener"]
                            }>
                            <a
                              className={`${styles.link} ${styles["ThemeableCardPresentation--isValid"]} ${styles["ThemeableInteractiveCardPresentation--isSelected"]} ${styles["ThemeableInteractiveCardPresentation--isEnabled"]} ${styles.ThemeableInteractiveCardPresentation} ${styles.SidebarNavigationLinkCard} ${styles.SidebarItemRow}`}
                              aria-label="My media"
                              href="#">
                              <div
                                className={
                                  styles["SidebarNavigationLinkCard-icon"]
                                }>
                                <Image src={Manufacturing} alt="movie icon" />
                              </div>
                              <span
                                className={`${styles["TypographyPresentation--m"]} ${styles.TypographyPresentation} ${styles["SidebarNavigationLinkCard-label"]} ${styles["TypographyPresentation--overflowTruncate"]} ${styles["TypographyPresentation--colorNavigation"]} ${styles.TypographyPresentation}`}>
                                Statistics
                              </span>
                              <div
                                className={
                                  styles["SidebarNavigationLinkCard-spacer"]
                                }></div>
                            </a>
                          </div>
                          <div
                            className={
                              styles["RightClickMenu-contextMenuEventListener"]
                            }>
                            <a
                              className={`${styles.link} ${styles["ThemeableCardPresentation--isValid"]} ${styles["ThemeableInteractiveCardPresentation--isSelected"]} ${styles["ThemeableInteractiveCardPresentation--isEnabled"]} ${styles.ThemeableInteractiveCardPresentation} ${styles.SidebarNavigationLinkCard} ${styles.SidebarItemRow}`}
                              aria-label="My media"
                              href="#">
                              <div
                                className={
                                  styles["SidebarNavigationLinkCard-icon"]
                                }>
                                <Image src={Query} alt="movie icon" />
                              </div>
                              <span
                                className={`${styles["TypographyPresentation--m"]} ${styles.TypographyPresentation} ${styles["SidebarNavigationLinkCard-label"]} ${styles["TypographyPresentation--overflowTruncate"]} ${styles["TypographyPresentation--colorNavigation"]} ${styles.TypographyPresentation}`}>
                                Settings
                              </span>
                              <div
                                className={
                                  styles["SidebarNavigationLinkCard-spacer"]
                                }></div>
                            </a>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
