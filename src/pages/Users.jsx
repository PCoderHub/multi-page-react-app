import React from "react";
import { users } from "../assets/userList";
import User from "../components/User";

function Users() {
  return (
    <div className="flex flex-col text-center m-1">
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}

export default Users;
