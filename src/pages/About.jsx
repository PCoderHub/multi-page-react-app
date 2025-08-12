import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <Link to="/">
        <button className="p-1 m-2 rounded-sm bg-sky-500 hover:bg-sky-400 text-white">
          {" "}
          Back to Home
        </button>
      </Link>
      <h1 className="text-center text-4xl p-1 text-pink-600">
        About User List App
      </h1>
      <p className="text-center italic text-xl p-2 text-violet-800">
        User Directory is a simple and efficient application to browse, manage,
        and organize users. It allows you to quickly find people and view their
        detailed information.
      </p>
      <div className="m-2 flex flex-col items-center">
        <h2 className="text-3xl p-1 text-pink-600">Features</h2>
        <ul className="flex flex-col text-left italic text-xl p-2 text-violet-800">
          <li>View a full list of users</li>
          <li>View detailed user profiles</li>
        </ul>
      </div>
    </>
  );
}

export default About;
