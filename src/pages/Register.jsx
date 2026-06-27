import { Link } from "react-router";

const Register = () => {
  return (
    <div className="card bg-base-100 w-full max-w-sm p-5 shadow-2xl">
      <div className="card-body">
        <h2 className="text-xl font-semibold mb-5 text-center">
          Register Your Account
        </h2>
        <fieldset className="fieldset">
          <label className="label">Your Name</label>
          <input type="text" className="input" placeholder="Enter your name" />
          <label className="label">Photo URL</label>
          <input type="text" className="input" placeholder="Insert photo URL" />
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        <p className="text-xs text-center font-semibold mt-2">
          Already Have An Account ?{" "}
          <Link to="/auth/login">
            <span className="text-secondary">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
