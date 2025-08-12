import React from "react";
import { Link, useParams } from "react-router-dom";
import { users } from "../assets/userList";

function UserDetail() {
  const { id } = useParams();
  const userSelected = users.filter((user) => user.id == id);
  const user = userSelected[0];
  return (
    <>
      <Link to="/users">
        <button className="p-1 m-2 rounded-sm bg-sky-500 hover:bg-sky-400 text-white">
          Go Back
        </button>
      </Link>
      <div className="text-center m-2">
        <p className="text-5xl m-2 text-pink-600">{user.name}</p>
        <p className="text-md sm:text-5xl italic m-2">{user.email}</p>
      </div>
    </>
  );
}

export default UserDetail;
