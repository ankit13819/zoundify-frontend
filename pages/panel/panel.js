import styles from "./Panel.module.css";
import LeftTopBar from "@/components/Panel/leftTopBar";
import RightTopBar from "@/components/Panel/rightTopBar";
import Menu from "@/components/Panel/menu";
import Projects from "@/components/Panel/projects";
import Team from "@/components/Panel/team";
import Project from "@/components/Home/project";
import { useState } from "react";
import Voice from "@/src/components/Team/voice";
import Statistics from "@/src/components/Team/statistics";
import Settings from "@/src/components/Team/settings";
import HomeMenu from "@/src/components/menu/homeMenu";
export default function Panel() {
  //define logic with state
  const [myProjectOpen, setMyProjectOpen] = useState(false);
  const [voiceOpen, setVoiceOpen] = useState(false);
  const [statistics, setStatistics] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [homeMenuOpen, setHomeMenuOpen] = useState(true);
  console.log("@@", homeMenuOpen);
  const handleMyProjectClick = () => {
    setMyProjectOpen(true);
    setVoiceOpen(false);
    setStatistics(false);
    setSettingsOpen(false);
    setHomeMenuOpen(false);
  };

  const handleVoiceOnClick = () => {
    setVoiceOpen(true);
    setMyProjectOpen(false);
    setStatistics(false);
    setSettingsOpen(false);
    setHomeMenuOpen(false);
  };

  const handleStatisticsClick = () => {
    setStatistics(true);
    setVoiceOpen(false);
    setMyProjectOpen(false);
    setSettingsOpen(false);
    setHomeMenuOpen(false);
  };

  const handleSettingsClick = () => {
    setSettingsOpen(true);
    setVoiceOpen(false);
    setMyProjectOpen(false);
    setStatistics(false);
    setHomeMenuOpen(false);
  };

  const handleHomeMenuClick = () => {
    setHomeMenuOpen(true);
    setVoiceOpen(false);
    setMyProjectOpen(false);
    setStatistics(false);
    setSettingsOpen(false);
  };

  return (
    <div className={styles.AppRoot} id="asana_root">
      <div className={styles["AppRoot-fullPage"]}>
        <div className={styles.GlobalTopbarStructure}>
          {/* topbar left*/}
          <LeftTopBar />
          {/*Global Structure Right Side */}
          <RightTopBar />
        </div>
        {/*Asana Main*/}
        <div className={styles.AsanaMain}></div>
        <div className={styles["AsanaMain-mainLayer"]} id="asana_main">
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
                {/*menu started here */}
                <Menu handleHomeMenuClick={handleHomeMenuClick} />

                {/* Project Started Here */}
                <div
                  className={`${styles.CustomScrollbarScrollable} ${styles["Sidebar-customScrollbarScrollable"]}`}>
                  <div
                    className={`${styles["Scrollable--vertical"]} ${styles["Scrollable--withCompositingLayer"]} ${styles["CustomScrollbarScrollable-scrollable"]}`}>
                    <div
                      className={`${styles["Sidebar-customScrollbarScrollable"]} ${styles["CustomScrollbarScrollable-content"]} ${styles.Sidebar}`}>
                      <div className={styles["Sidebar-sectionsSortableList"]}>
                        {/*Projects section */}
                        <Projects />
                        {/* Team section */}
                        <Team
                          handleMyProjectClick={handleMyProjectClick}
                          handleVoiceOnClick={handleVoiceOnClick}
                          handleStatisticsClick={handleStatisticsClick}
                          handleSettingsClick={handleSettingsClick}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {myProjectOpen && (
            <menu className={styles["AsanaMain-asanaPageAndTopbar"]}>
              <Project />
            </menu>
          )}
          {voiceOpen && (
            <menu className={styles["AsanaMain-asanaPageAndTopbar"]}>
              <Voice />
            </menu>
          )}
          {statistics && (
            <menu className={styles["AsanaMain-asanaPageAndTopbar"]}>
              <Statistics />
            </menu>
          )}
          {settingsOpen && (
            <menu className={styles["AsanaMain-asanaPageAndTopbar"]}>
              <Settings />
            </menu>
          )}
          {homeMenuOpen && (
            <menu className={styles["AsanaMain-asanaPageAndTopbar"]}>
              <HomeMenu />
            </menu>
          )}
        </div>
      </div>
    </div>
  );
}
