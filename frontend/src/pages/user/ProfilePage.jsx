import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getUserAPI } from "../../api/user-api";
import { userDefault } from "../../assets";
import MainLayout from "../../components/layout/MainLayout";
import StoreCard from "../../components/stores/StoreCard";
import AuthContext from "../../context/auth-context";

const ProfilePage = () => {
  const { profile, stores, token } = useContext(AuthContext);
  const [userProfile, setUserProfile] = useState({});
  const [userStores, setUserStores] = useState([]);
  const [profilePicture, setProfilePicture] = useState("");
  const [isUser, setIsUser] = useState(false);

  const { userId } = useParams();

  useEffect(() => {
    if (userId === undefined) {
      setUserProfile(profile);
      setUserStores(stores);
      setProfilePicture(profile.imageUrl);
      setIsUser(profile.userId === userProfile.userId);
    }

    if (userId !== undefined && userId !== 0) {
      getUserAPI(userId, token)
        .then((res) => {
          setUserProfile(res.data.profile);
          setUserStores(res.data.stores);
          setProfilePicture(res.data.profile.imageUrl);
        })
        .catch((err) => {
          setUserProfile({ name: "User not found!!" });
        });
    }
  }, [userId, token, profile, stores, userProfile.userId]);

  return (
    <MainLayout>
      <div className="flex w-full md:max-w-[700px] mt-8 py-4 px-5 rounded-lg bg-white shadow shadow-gray-300">
        <img
          src={profilePicture ? profilePicture : userDefault}
          alt="profile_picture"
          className="rounded-full
            w-24 h-24 sm:w-40 sm:h-40 mr-5"
        />
        <div className="mt-2 font-inter font-medium text-gray-400 w-full">
          <h3 className="text-2xl md:text-3xl text-primary mb-1 pb-2 border-b">
            {userProfile.name}
          </h3>
          <div className="grid grid-cols-1 gap-2">
            <div>
              <p className="text-secondary">Email</p>
              <p>{userProfile.email}</p>
            </div>
            <div>
              <p className="text-secondary">Address</p>
              <p>{userProfile.address}</p>
            </div>
            <div>
              <p className="text-secondary">Phone Number</p>
              <p>{userProfile.phoneNumber}</p>
            </div>
          </div>
        </div>
        {isUser && (
          <Link to="/profile/edit">
            <i className="fa-solid fa-pen-to-square text-2xl hover:text-color1 transition duration-100" />
          </Link>
        )}
      </div>
    </MainLayout>
  );
};

export default ProfilePage;
