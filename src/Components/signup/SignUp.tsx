import Button from "../index/Button";
import Input from "../index/Input";
import { Link } from "react-router-dom";
import "./signup.css";

function SignUp() {
  return (
    <>
      <div className="signup">
        <img
          src="./public\img\Other 07reg.png"
          className="image img-fluid"
          alt=""
        />
        <div className="d-flex align-items-center flex-column gap-2 ">
          <p className="fs-4 fw-semibold">Please fill out form to Register!</p>
          <Input label="Full name:" />
          <Input label="Username:" />
          <Input label="Email:" />
          <Input label="Password:" />
          <Input label="Confirm Password:" />
          <br />
          <Button btnText="Register" />
          <br />
          <p>
            yes i have an account?
            <Link className="text-decoration-none text-dark" to="/login">
              Login
            </Link>
          </p>
          <img src="./public\img\Social media icons.png" alt="" />
        </div>
      </div>
      <img src="./public\img\Rectangle 7.png" className="rec z-n1" alt="" />
    </>
  );
}

export default SignUp;
