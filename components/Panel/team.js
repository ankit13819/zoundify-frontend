import Image from "next/image";
import styles from "../../pages/panel/Panel.module.css";
import Group from "../../src/assets/group.svg";
import Manufacturing from "../../src/assets/manufacturing.svg";
import Query from "../../src/assets/query_stats.svg";
import RecordVoice from "../../src/assets/record_voice_over.svg";

export default function Team({
  handleMyProjectClick,
  handleVoiceOnClick,
  handleStatisticsClick,
  handleSettingsClick,
}) {
  return (
    <nav
      className={`${styles.SidebarCollapsibleSection} ${styles["SidebarCollapsibleSection--isExpanded"]}`}>
      <div draggable="true">
        <div className={styles.SidebarUpdatedCollapsibleHeader}>
          <div
            className={styles["SidebarUpdatedCollapsibleHeader-toggleButton"]}>
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
        className={styles["RightClickMenu-contextMenuEventListener"]}
        onClick={handleMyProjectClick}>
        <a
          className={`${styles.link} ${styles["ThemeableCardPresentation--isValid"]} ${styles["ThemeableInteractiveCardPresentation--isSelected"]} ${styles["ThemeableInteractiveCardPresentation--isEnabled"]} ${styles.ThemeableInteractiveCardPresentation} ${styles.SidebarNavigationLinkCard} ${styles.SidebarItemRow}`}
          aria-label="My media"
          href="#">
          <div className={styles["SidebarNavigationLinkCard-icon"]}>
            <Image src={Group} alt="movie icon" />
          </div>
          <span
            className={`${styles["TypographyPresentation--m"]} ${styles.TypographyPresentation} ${styles["SidebarNavigationLinkCard-label"]} ${styles["TypographyPresentation--overflowTruncate"]} ${styles["TypographyPresentation--colorNavigation"]} ${styles.TypographyPresenta}`}>
            My Projects
          </span>
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
          <div className={styles["SidebarNavigationLinkCard-spacer "]}></div>
        </a>
      </div>
      <div
        className={styles["RightClickMenu-contextMenuEventListener"]}
        onClick={handleVoiceOnClick}>
        <a
          className={`${styles.link} ${styles["ThemeableCardPresentation--isValid"]} ${styles["ThemeableInteractiveCardPresentation--isSelected"]} ${styles["ThemeableInteractiveCardPresentation--isEnabled"]} ${styles.ThemeableInteractiveCardPresentation} ${styles.SidebarNavigationLinkCard} ${styles.SidebarItemRow}`}
          aria-label="My media"
          href="#">
          <div className={styles["SidebarNavigationLinkCard-icon"]}>
            <Image src={RecordVoice} alt="movie icon" />
          </div>
          <span
            className={`${styles["TypographyPresentation--m"]} ${styles.TypographyPresentation} ${styles["SidebarNavigationLinkCard-label"]} ${styles["TypographyPresentation--overflowTruncate"]} ${styles["TypographyPresentation--colorNavigation"]} ${styles.TypographyPresenta}`}>
            Voices
          </span>
          <div className={styles["SidebarNavigationLinkCard-spacer "]}></div>
        </a>
      </div>
      <div
        className={styles["RightClickMenu-contextMenuEventListener"]}
        onClick={handleStatisticsClick}>
        <a
          className={`${styles.link} ${styles["ThemeableCardPresentation--isValid"]} ${styles["ThemeableInteractiveCardPresentation--isSelected"]} ${styles["ThemeableInteractiveCardPresentation--isEnabled"]} ${styles.ThemeableInteractiveCardPresentation} ${styles.SidebarNavigationLinkCard} ${styles.SidebarItemRow}`}
          aria-label="My media"
          href="#">
          <div className={styles["SidebarNavigationLinkCard-icon"]}>
            <Image src={Manufacturing} alt="movie icon" />
          </div>
          <span
            className={`${styles["TypographyPresentation--m"]} ${styles.TypographyPresentation} ${styles["SidebarNavigationLinkCard-label"]} ${styles["TypographyPresentation--overflowTruncate"]} ${styles["TypographyPresentation--colorNavigation"]} ${styles.TypographyPresentation}`}>
            Statistics
          </span>
          <div className={styles["SidebarNavigationLinkCard-spacer"]}></div>
        </a>
      </div>
      <div
        className={styles["RightClickMenu-contextMenuEventListener"]}
        onClick={handleSettingsClick}>
        <a
          className={`${styles.link} ${styles["ThemeableCardPresentation--isValid"]} ${styles["ThemeableInteractiveCardPresentation--isSelected"]} ${styles["ThemeableInteractiveCardPresentation--isEnabled"]} ${styles.ThemeableInteractiveCardPresentation} ${styles.SidebarNavigationLinkCard} ${styles.SidebarItemRow}`}
          aria-label="My media"
          href="#">
          <div className={styles["SidebarNavigationLinkCard-icon"]}>
            <Image src={Query} alt="movie icon" />
          </div>
          <span
            className={`${styles["TypographyPresentation--m"]} ${styles.TypographyPresentation} ${styles["SidebarNavigationLinkCard-label"]} ${styles["TypographyPresentation--overflowTruncate"]} ${styles["TypographyPresentation--colorNavigation"]} ${styles.TypographyPresentation}`}>
            Settings
          </span>
          <div className={styles["SidebarNavigationLinkCard-spacer"]}></div>
        </a>
      </div>
    </nav>
  );
}
