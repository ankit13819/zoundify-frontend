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
import ProjectCmp from "@/components/Home/projectCmp";
export default function Panel() {
  //define logic with state

  const [menuState, setMenuState] = useState({
    myProjectOpen: false,
    voiceOpen: false,
    statistics: false,
    settingsOpen: false,
    homeMenuOpen: true,
  });

  const handleMenuClick = (menu) => {
    setMenuState({
      myProjectOpen: menu === "my project",
      voiceOpen: menu === "voice",
      statistics: menu === "stats",
      settingsOpen: menu === "settings",
      homeMenuOpen: menu === "home menu",
    });
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
                <Menu
                  handleHomeMenuClick={() => handleMenuClick("home menu")}
                />

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
                          handleMyProjectClick={() =>
                            handleMenuClick("my project")
                          }
                          handleVoiceOnClick={() => handleMenuClick("voice")}
                          handleStatisticsClick={() => handleMenuClick("stats")}
                          handleSettingsClick={() =>
                            handleMenuClick("settings")
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {menuState.myProjectOpen && (
            <menu className={styles["AsanaMain-asanaPageAndTopbar"]}>
              <ProjectCmp />
            </menu>
          )}
          {menuState.voiceOpen && (
            <menu className={styles["AsanaMain-asanaPageAndTopbar"]}>
              <Voice />
            </menu>
          )}
          {menuState.settingsOpen && (
            <menu className={styles["AsanaMain-asanaPageAndTopbar"]}>
              <Statistics />
            </menu>
          )}
          {menuState.statistics && (
            <menu className={styles["AsanaMain-asanaPageAndTopbar"]}>
              <Settings />
            </menu>
          )}
          {menuState.homeMenuOpen && (
            <menu className={styles["AsanaMain-asanaPageAndTopbar"]}>
              <HomeMenu />
            </menu>
          )}
        </div>
      </div>
    </div>
  );
}
