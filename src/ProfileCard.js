import React from 'react';

const ProfileCard = (props) => {
  return (
    <div style={{ border: "1px solid black", padding: "10px", width: "250px", textAlign: "center"}}>
    <img src={props.image} alt='profile' width="100"/>
    <h2>{props.name}</h2>
    <p>{props.bio}</p>
    </div>
  );
}

export default ProfileCard;