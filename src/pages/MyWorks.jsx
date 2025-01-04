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
    <div id="myworks" className="pt-12">
      <h2 className="text-3xl my-8 mt-12 text-center font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
        My Works
      </h2>
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.id} project={project}></Card>
        ))}
      </div>
    </div>
  );
}
