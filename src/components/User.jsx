import React from "react";
import { Link } from "react-router-dom";

function User({ user }) {
  return (
    <Link
      to={`/users/${user.id}`}
      className="m-1 p-1 mx-10 bg-gray-100 rounded-sm hover:bg-gray-200 hover:scale-105 hover:text-sky-500"
    >
      {user.name}
    </Link>
  );
}

export default User;
