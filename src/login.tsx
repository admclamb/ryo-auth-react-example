import { FormEvent, useState } from "react";
import { useRyoAuth } from "./auth/use-ryo-auth";

const Login = () => {
  const { login } = useRyoAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordShowing, setIsPasswordShowing] = useState(true);

  const changeEmail = (value: string) => {
    setEmail(value);
  };

  const changePassword = (value: string) => {
    setPassword(value);
  };

  const submitForm = (e: FormEvent) => {
    e.preventDefault();

    login(email, password);
  };

  const hidePassword = (e: FormEvent) => {
    e.preventDefault();

    setIsPasswordShowing((curr) => !curr);
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={submitForm} className="form">
        <div className="form-container">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => changeEmail(e.target.value)}
          />
        </div>
        <div className="form-container">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type={isPasswordShowing ? "text" : "password"}
            value={password}
            onChange={(e) => changePassword(e.target.value)}
          />
          <button onClick={(e) => hidePassword(e)}>
            {isPasswordShowing ? "Hide password" : "Show password"}
          </button>
        </div>
        <button type="submit" className="form-button">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
