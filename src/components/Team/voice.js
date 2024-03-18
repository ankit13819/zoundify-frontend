import Image from "next/image";
import styles from "../../../components/Home/project.module.css";
import mediaImage from "../../assets/media.png";
import ellipseImage from "../../assets/Ellipse.svg";
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

export default function Voice() {
  return (
    <>
      <div className="project-table" style={{ color: "#fff" }}>
        <h2 style={{ color: "#fff", fontSize: "30px", fontWeight: "600" }}>
          Voices
        </h2>
        <div style={{ marginTop: "-20px" }}>
          <div className={styles["header-container"]}>
            <div className={styles["header-row"]}>
              <div className={styles["header-cell"]}>Person</div>
              <div className={styles["header-cell"]}>Details</div>
              <div className={styles["header-cell"]}>Speech</div>
              <div className={styles["header-cell"]}>Pitch Sift</div>
              <div className={styles["header-cell"]}>Play</div>
              <div className={styles["header-cell"]}>Add to favourites</div>
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
                  <div className={styles["project-cell"]}>{item.duration}</div>
                  <div className={styles["project-cell"]}>{item.dueDate}</div>
                  <div className={styles["project-cell"]}>{item.status}</div>
                </div>
                {/* Repeat for other rows */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
