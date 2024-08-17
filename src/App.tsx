import { RyoAuthProvider } from "./auth/ryo-auth-provider";
import { useRyoAuth } from "./auth/use-ryo-auth";
import Login from "./login";
import Profile from "./profile";
import Signup from "./signup";

function App() {
  const {} = useRyoAuth();

  return (
    <div className="container">
      <RyoAuthProvider>
        <Login />
        <Signup />
        <Profile />
      </RyoAuthProvider>
    </div>
  );
}

export default App;
