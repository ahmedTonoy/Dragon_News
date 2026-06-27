import { Link } from "react-router";

const Login = () => {
  return (
    <div className="card bg-base-100 w-full max-w-sm p-5 shadow-2xl">
      <div className="card-body">
        <h2 className="text-xl font-semibold mb-5 text-center">
          Login Your Account
        </h2>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p className="text-xs text-center font-semibold mt-2">
          Don't Have An Account ?{" "}
          <Link to="/auth/register">
            <span className="text-secondary">Register</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
