import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Details() {
  const { id } = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/projects.json");
        console.log("Fetched data:", data);

        // Ensure the id matches the type in the JSON (e.g., convert id to string if necessary)
        const newData = data?.find(
          (item) => item.id.toString() === id.toString()
        );

        if (newData) {
          setProject(newData);
        }
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchData();
  }, [id]);

  const {
    name,
    image,
    description,
    technologies,
    year,
    challenges,
    limitations,
    improvements,
  } = project;

  return (
    <div className="w-11/12 mx-auto mt-10">
      {/* Back to Home Link */}
      <div className="mb-8 text-right">
        <Link
          to="/#home"
          className="btn bg-gradient-to-r from-secondary to-primary text-white"
        >
          Back to Home
        </Link>
      </div>

      {/* Project Details */}
      <div className=" gap-8 items-start">
        {/* Image Section */}
        <div className=" rounded-xl shadow-lg overflow-hidden">
          <img className="w-full h-auto object-cover" src={image} alt={name} />
        </div>

        {/* Text Information Section */}
        <div className=" text-center lg:text-left  text-white mt-4">
          <h2 className="text-4xl font-bold  mb-4 text-center text-primary">
            {name}
          </h2>
          <p className="text-lg mb-6 text-center">{description}</p>
          <div className="grid grid-cols-2 gap-x-8">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-secondary mb-2">
                Technologies Used:
              </h3>
              <p className="text-lg ">{technologies?.join(",")}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-secondary mb-2">
                Year:
              </h3>
              <p className="text-lg ">{year}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-accent mb-2">
                Challenges:
              </h3>
              <p className="text-lg ">{challenges}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl text-accent font-semibold  mb-2">
                Limitations:
              </h3>
              <p className="text-lg ">{limitations}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl text-primary font-semibold  mb-2">
                Improvements:
              </h3>
              <p className="text-lg ">{improvements}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
