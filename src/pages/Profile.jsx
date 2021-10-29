import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUserbyUsername } from "../services/firebase";
import * as ROUTES from "../constants/routes";
import Header from "../components/Header";
import UserProfile from "../components/Profile";

const Profile = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const checkUserExists = async () => {
      const [user] = await getUserbyUsername(username);
      if (user?.userId) {
        setUser(user);
      } else {
        history.push(ROUTES.NOT_FOUND);
      }
    };
    checkUserExists();
  }, [username, history]);

  return user?.username ? (
    <div className="bg-gray-background">
      <Header />
      <div className="mx-auto max-w-screen-lg">
        <UserProfile user={user} />
      </div>
    </div>
  ) : null;
};

export default Profile;
