import React from "react";
import ProfileCard from "./ProfileCard";

function App() {
  return (
    <div>
      <h1>My Profile</h1>
      <ProfileCard
      name="Tahir"
      image="https://avatars.githubusercontent.com/u/121556994?v=4"
      bio="Web Developer & Tech Enthusiast"
      />
    </div>
  );
}

export default App;