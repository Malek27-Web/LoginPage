import { Link } from "react-router-dom";
import Button from "../index/Button";
import Input from "../index/Input";
import "./login.css";

function Login() {
  return (
    <div>
      <div className="d-flex justify-content-around align-items-center login">
        <div className="d-flex align-items-center flex-column gap-2">
          <p className="fs-4 fw-semibold">Welcome Back !</p>
          <Input label="Username:" />
          <Input label="Password:" />
          <br />
          <Button btnText="Login" />
          <br />
          <p>
            Do you have an account ?
            <Link className="text-decoration-none text-dark" to="/signup">
              Register
            </Link>
          </p>
          <img src="/img/Social_media_icons.png" alt="" />
        </div>
        <img src="/img/Other_03.png" className="img-fluid" alt="" />
      </div>
      <img src="/img/Rectangle_1.png" className="rectangle h-100" alt="" />
      <img
        src="/img/Rectangle_6.png"
        className="position-absolute bottom-0 start-0 rec1 "
        alt=""
      />
    </div>
  );
}

export default Login;
