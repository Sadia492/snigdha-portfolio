import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaArrowCircleUp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Card({ project }) {
  const { name, image, description, technologies } = project;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} className="object-cover h-52" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="flex justify-end gap-2">
          {technologies.map((technology, idx) => (
            <div key={idx} className="badge badge-secondary">
              {technology}
            </div>
          ))}
        </div>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link to={`/details/${project.id}`}>
            <BsBoxArrowUpRight className="text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}
