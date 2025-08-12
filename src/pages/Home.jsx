import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="m-5 sm:m-20">
        <h1 className="text-center text-5xl p-10 text-pink-600">
          Welcome to User List App
        </h1>
        <p className="text-center italic text-xl p-2 text-violet-800">
          Explore our community of users from the Users Page . Click a name from
          the list to view details
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center sm:justify-evenly">
        <Link to="/about">
          <button className="text-xl underline text-sky-500 hover:text-sky-700">
            About this app{" "}
          </button>
        </Link>
        <Link to="/users">
          <button className="text-xl underline text-sky-500 hover:text-sky-700">
            View all Users
          </button>
        </Link>
      </div>
    </>
  );
}

export default Home;
