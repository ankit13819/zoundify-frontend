import Image from "next/image";
import mediaImage from "../../src/assets/media.png";
export default function Project() {
  return (
    <div className="project-table">
      <h1 style={{ color: "#fff", fontSize: "30px", fontWeight: "600" }}>
        My Project
      </h1>
      <div className="project-buttons">
        <button className="buttonOne">Upcoming</button>
        <button className="buttonTwo">Overdue</button>
        <button className="buttonThree">Completed</button>
      </div>
      <table style={{ color: "#ffffff" }}>
        <thead>
          <tr>
            <th>Media</th>
            <th>Details</th>
            <th>Assigned to</th>
            <th>Duration</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Image src={mediaImage} alt="media image" />
            </td>
            <td>
              Title
              <br />
              English-Hindi
            </td>
            <td>Rajesh</td>
            <td>120 mins</td>
            <td>Due 12 March</td>
            <td>STATUS</td>
          </tr>
          <tr>
            <td>
              <Image src={mediaImage} alt="media image" />
            </td>
            <td>
              Title
              <br />
              English-Hindi
            </td>
            <td>Rajesh</td>
            <td>120 mins</td>
            <td>Due 12 March</td>
            <td>STATUS</td>
          </tr>
          <tr>
            <td>
              <Image src={mediaImage} alt="media image" />
            </td>
            <td>
              Title
              <br />
              English-Hindi
            </td>
            <td>Rajesh</td>
            <td>120 mins</td>
            <td>Due 12 March</td>
            <td>STATUS</td>
          </tr>
          <tr>
            <td>
              <Image src={mediaImage} alt="media image" />
            </td>
            <td>
              Title
              <br />
              English-Hindi
            </td>
            <td>Rajesh</td>
            <td>120 mins</td>
            <td>Due 12 March</td>
            <td>STATUS</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
