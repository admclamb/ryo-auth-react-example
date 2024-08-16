import { FormEvent, useState } from "react";
import { useRyoAuth } from "./auth/use-ryo-auth";

const Login = () => {
  const { login } = useRyoAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeEmail = (value: string) => {
    setEmail(value);
  };

  const changePassword = (value: string) => {
    setPassword(value);
  };

  const submitForm = (e: FormEvent) => {
    e.preventDefault();

    login();
  };

  return (
    <div className="form-container">
      <h1>Login</h1>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => changeEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => changePassword(e.target.value)}
          />
        </div>
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default Login;
