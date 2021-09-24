import React, { useState } from "react";
import Logo from "../Elements/Logo";
import Profile from "../Pages/Profile";
import Line from "../Elements/Line";
import Video from "../Components/Video";
import Avatar from "../Elements/Avatar";


const Home = () => {

  const data = [1, 2, 3, 4, 5, 6, 7];

  const [showProfile, setShowProfile] = useState();

  const logo = {
    width: "60px",
    height: "18px",
    margin: "19px 16px",
  };

  const avatar_style = {
    width: "32px",
    height: "32px",
    margin: "12px 16px",
  };

  const line = {
    width: "375px",
    height: "1px",
    backgroundColor: "#E4E4E4",
    border: "none",
  };

  const videos = {
    height: "812px",
    overflowX: "auto",
  };


  return (

    <div style={{ backgroundColor: "white" }}>

      {showProfile ? (
        <Profile />
      ) : (
        <>
          <div style={{ display: "flex", justifyContent: "space-between" }}>

            <Logo logoStyle={logo} />
            
            <Avatar
              avatarStyle={avatar_style}
              click={() => {
                setShowProfile(true);
              }}
            />
            
          </div>

          <Line lineStyle={line} />

          <div style={videos}>

            {
              data.map(() => {
              return <Video/>;
            })
            }
          
          </div>

        </>
      )}

    </div>
  );

};

export default Home;
