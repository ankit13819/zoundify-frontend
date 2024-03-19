import React from "react";
import mediaImage from "../../assets/media.png";
import ellipseImage from "../../assets/Ellipse.svg";
import Image from "next/image";
import styles from "../../../components/Home/project.module.css";

const dummyData = [
  {
    title: "Project 1",
    details: "English-Hindi",
    assignedTo: "Rajesh",
    duration: "120 mins",
    dueDate: "Due 12 March",
    status: "STATUS_1",
  },
  {
    title: "Project 2",
    details: "English-Hindi",
    assignedTo: "Rajesh",
    duration: "90 mins",
    dueDate: "Due 15 March",
    status: "STATUS_2",
  },
  {
    title: "Project 3",
    details: "English-Hindi",
    assignedTo: "Rajesh",
    duration: "150 mins",
    dueDate: "Due 20 March",
    status: "STATUS_3",
  },
  {
    title: "Project 1",
    details: "English-Hindi",
    assignedTo: "Rajesh",
    duration: "120 mins",
    dueDate: "Due 12 March",
    status: "STATUS_1",
  },
  {
    title: "Project 2",
    details: "English-Hindi",
    assignedTo: "Rajesh",
    duration: "90 mins",
    dueDate: "Due 15 March",
    status: "STATUS_2",
  },
  {
    title: "Project 3",
    details: "English-Hindi",
    assignedTo: "Rajesh",
    duration: "150 mins",
    dueDate: "Due 20 March",
    status: "STATUS_3",
  },
  // Add more dummy data as needed
];

export default function HomeMenu() {
  return (
    <div className="project-table" style={{ color: "#fff" }}>
      <h1 style={{ color: "#fff", fontSize: "30px", fontWeight: "600" }}>
        My Projects
      </h1>
      <div className={styles["project-buttons"]}>
        <button className="buttonOne">Upcoming</button>
        <button className="buttonTwo">Overdue</button>
        <button className="buttonThree">Completed</button>
      </div>
      <div className={styles["header-container"]}>
        <div className={styles["header-row"]}>
          <div className={styles["header-cell"]}>Media</div>
          <div className={styles["header-cell"]}>Details</div>
          <div className={styles["header-cell"]}>Assigned to</div>
          <div className={styles["header-cell"]}>Duration</div>
          <div className={styles["header-cell"]}>Due Date</div>
          <div className={styles["header-cell"]}>Status</div>
        </div>
      </div>
      {dummyData.map((item, index) => {
        return (
          <div className={styles["project-container"]} key={index}>
            <div className={styles["project-row"]}>
              <div className={styles["project-cell.media"]}>
                <Image src={mediaImage} alt="media image" />
              </div>
              <div className={styles["project-cell"]}>
                <p>{item.title}</p>
                <p>{item.details}</p>
              </div>
              <div className={styles["project-cell"]}>
                <Image src={ellipseImage} alt="ellipse" />
                <p>{item.assignedTo}</p>
              </div>
              <div className={styles["project-cell"]}>
                <span> {item.duration}</span>
              </div>
              <div className={styles["project-cell"]}>{item.dueDate}</div>
              <div className={styles["project-cell"]}>{item.status}</div>
            </div>
            {/* Repeat for other rows */}
          </div>
        );
      })}
    </div>
  );
}
