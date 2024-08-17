import { useRyoAuth } from "./auth/use-ryo-auth";

const Profile = () => {
  const { getProfile } = useRyoAuth();

  return (
    <div>
      <button onClick={getProfile}>Get Profile</button>
    </div>
  );
};

export default Profile;
