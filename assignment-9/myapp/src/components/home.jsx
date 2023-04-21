import {  useState } from "react";
import axios from "axios";
import Avatar from "./Avatar";
import Active from "./Active";
import "../components/style/home.css";


const Home=() => {
    const [eventResponse, setEventResponse] = useState([]);

  const [userResponse, setUserResponse] = useState();

  const [username, setUsername] = useState("");

  const handleEnter= async (e) => {
    if (e.code !== "Enter") return

    const userName= e.currentTarget.value;

    setUsername(userName);

    try {
      const myEventResponse = await axios.get(
        `https://api.github.com/users/${userName}/events`
      );

      const myUserResponse = await axios.get(
        `https://api.github.com/users/${userName}`
      );

      setEventResponse(myEventResponse.data);

      setUserResponse(myUserResponse.data);
    } catch (e) {
      console.log(e);
    }
    
};
    const avatarProps = {
        displayName: userResponse?.name,
        userName: username,
        imgUrl: userResponse?.avatar_url,
        repos: userResponse?.public_repos,
        followers: userResponse?.followers,
        following: userResponse?.following,
    
};
  return (
    <>
     <div className="profile">
        <div className="logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="logo"
          />
          <h1>GitProfile</h1>
        </div>

        <input
          type="text"
          placeholder="Enter The GitHub Username"
          onKeyDown={handleEnter}
          className="input"
        />
        <br></br>

        {username && <Avatar {...avatarProps} />}
      </div>

      <div className="activity">
        <Active arr={eventResponse} />
      </div>
    </>
  );
};

export default Home;