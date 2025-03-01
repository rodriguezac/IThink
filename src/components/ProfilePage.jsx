import React from "react";
import { useParams } from "react-router-dom";
import BackButton from "./BackButton";
import ProfileInfo from "./ProfileInfo";
import BlogList from "./BlogList";

const ProfilePage = () => {
  const { id } = useParams();
  
  const user = {
    name: "John",
    lastname: "Doe",
    age: 30,
    username: "johndoe",
    email: "john.doe@example.com",
  };

  return (
    <div>
    
      <div className="max-w-4xl mx-auto mt-10 p-6">
        <div className="flex items-start space-x-4">
          <BackButton />
          <ProfileInfo user={user} />
        </div>
        <BlogList userId={id} />
      </div>
    </div>
  );
};

export default ProfilePage;
