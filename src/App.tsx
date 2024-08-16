import { RyoAuthProvider } from "./auth/ryo-auth-provider";
import { useRyoAuth } from "./auth/use-ryo-auth";
import Login from "./login";

function App() {
  const {} = useRyoAuth();

  return (
    <div className="container">
      <RyoAuthProvider>
        <Login />
      </RyoAuthProvider>
    </div>
  );
}

export default App;
