import React from "react";
import faker from "faker";

const profileData = {
  user1: {
    name: faker.name.findName(),
    description: faker.lorem.paragraph()
  },
  user2: {
    name: faker.name.findName(),
    description: faker.lorem.paragraph()
  }
};

const Profile = ({ match }) => {
  // console.log(match.params); //{username: "user1"}
  const { username } = match.params;
  const { name, description } = profileData[username];

  return (
    <>
      <h4>{name}</h4>
      <p>{description}</p>
    </>
  );
};

export default Profile;
