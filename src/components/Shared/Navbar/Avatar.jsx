import React, { useContext } from "react";
import avatarImg from "../../../assets/images/placeholder.jpg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Avatar = () => {
    const {user} = useContext(AuthContext);
  return (
    <div>
      <Link to="/">
        <img
          className="rounded-full"
          src={user && user.photoURL ? user.photoURL : avatarImg}
          alt="profile"
          width="30"
          height="30"
        />
      </Link>
    </div>
  );
};

export default Avatar;
