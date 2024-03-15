import GoogleLogin from "@leecheuk/react-google-login";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useState } from "react";
import Layout from "@/components/Layout/Layout";
export default function SignIn() {
  //Input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Error
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const responseGoogle = (response) => {
    console.log(response);
  };

  //Submit form
  async function handleSubmit(e) {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");

    if (email == "" || email == null) {
      setEmailError("Email is Required");
      return false;
    }

    if (password == "" || password == null) {
      setPasswordError("Password is Required");
      return false;
    }
  }
  return (
    <Layout>
      <div className="login-page-new__main-form">
        <div className="login-page-new__main-form-title-brand">
          <h1 className="login-page-new__main-form-title">Welcome Back!</h1>
          <div className="login-page-new__main-form-router-outlet login-page-new__main-form-login">
            <form onSubmit={handleSubmit} autoComplete="off">
              <div className="login-page-new__main-form-row">
                <label className="login-page-new__main-form-row-label">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter Your Email
                    "
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />

                {emailError && <span className="error-text">{emailError}</span>}

                <div
                  className="login-page-new__main-form-row-icon"
                  aria-hidden={true}
                >
                  <MdOutlineMailOutline />
                </div>
              </div>
              <div className="login-page-new__main-form-row">
                <label className="login-page-new__main-form-row-label">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter Your Password
                    "
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <div className="login-page-new__main-form-options">
                  <a
                    id="component-login-forgot"
                    href="https://app.clickup.com/login/forgot"
                    draggable="false"
                    className="cu-show-pwd"
                  >
                    {" "}
                    Forgot <span>Password</span>?{" "}
                  </a>
                </div>
                {passwordError && (
                  <span className="error-text">{passwordError}</span>
                )}
                <div
                  className="login-page-new__main-form-row-icon"
                  aria-hidden={true}
                >
                  <RiLockPasswordLine />
                </div>
              </div>
              <button
                className={`login-page-new__main-form-button `}
                type="submit"
              >
                <span className="login-page-new__main-form-button-text">
                  Log In
                </span>
              </button>

              <GoogleLogin
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
                className="custom-google-login"
              >
                <span> Sign in with Google</span>
              </GoogleLogin>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
