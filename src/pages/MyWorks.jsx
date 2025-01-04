import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import project1 from "../assets/Screenshot 2025-01-04 135047.png";
import project2 from "../assets/Screenshot 2025-01-04 135749.png";
import project3 from "../assets/Screenshot 2025-01-04 135849.png";
import axios from "axios";

export default function MyWorks() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/projects.json");
      setProjects(data);
    };
    fetchData();
  }, []);

  return (
    <div id="myworks">
      <h2 className="text-3xl my-8 text-center font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
        My Works
      </h2>
      <div className="w-11/12 mx-auto grid grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.id} project={project}></Card>
        ))}
        {/* <Card
          img={project1}
          title={"Study Circle Project"}
          description={
            "StudyCircle is an innovative online group study platform where users can create assignments, submit them, and grade peers' work. With features like theme customization and secure JWT authentication, it fosters collaborative and engaging learning experiences."
          }
        ></Card>
        <Card
          img={project2}
          title={"Crowdcube Project"}
          description={
            "Crowdcube is a dynamic crowdfunding platform that connects entrepreneurs with investors, enabling users to explore, invest in, and support innovative startup projects. The platform offers a seamless user experience with secure authentication and real-time investment tracking features."
          }
        ></Card>
        <Card
          img={project3}
          title={"Winter Donation Project"}
          description={
            "Winter Donation Project is a platform designed to connect donors with volunteers, aiming to provide winter clothing to those in need across Bangladesh. The website facilitates easy browsing of donation campaigns and secure online donations, helping vulnerable individuals stay warm during the cold season."
          }
        ></Card> */}
      </div>
    </div>
  );
}
