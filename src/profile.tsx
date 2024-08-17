import { useRyoAuth } from "./auth/use-ryo-auth";

const Profile = () => {
  const { getProfile, getAccessToken } = useRyoAuth();

  const getToken = async () => {
    const accessToken = await getAccessToken();

    console.log(accessToken);
  };

  return (
    <div>
      <button onClick={getToken}>Get Access Token</button>
      <button onClick={getProfile}>Get Profile</button>
    </div>
  );
};

export default Profile;
