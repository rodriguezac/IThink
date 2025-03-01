import React from "react";

const ProfileInfo = ({ user }) => {
  return (
    <div className="p-1 text-[#4E5488]">
      <h2 className="text-3xl font-bold">{user.name} {user.lastname}</h2>
      <p className="text-lg mt-2"><strong>Edad:</strong> {user.age} años</p>
      <p className="text-lg"><strong>Username:</strong> @{user.username}</p>
      <p className="text-lg"><strong>Email:</strong> {user.email}</p>
    </div>
  );
};

export default ProfileInfo;
