import { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { GoogleLogin } from "@leecheuk/react-google-login";
import Layout from "@/components/Layout/Layout";

export default function SignUp() {
  //Input
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    showPassword: false,
  });

  //Error
  const [errors, setErrors] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
  });

  const responseGoogle = (response) => {
    console.log(response);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleTogglePasswordVisibility = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  //Submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = values;
    let formErrors = {};

    if (!name.trim()) {
      formErrors.nameError = "Name is Required";
    }

    if (!email.trim()) {
      formErrors.emailError = "Email is Required";
    }

    if (!password.trim()) {
      formErrors.passwordError = "Password is Required";
    }

    setErrors(formErrors);

    // Proceed with form submission if there are no errors
    if (Object.keys(formErrors).length === 0) {
      // Handle form submission
    }
  };

  return (
    <Layout>
      <div className="login-page-new__main-form">
        <div className="login-page-new__main-form-title-brand">
          <h1 className="login-page-new__main-form-title">Let&apos;s go!</h1>

          <div className="login-page-new__main-form-router-outlet login-page-new__main-form-login">
            <form onSubmit={handleSubmit} autoComplete="off">
              <div className="login-page-new__main-form-row">
                <label className="login-page-new__main-form-row-label">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="John Duo"
                  name="name"
                  onChange={handleInputChange}
                  value={values.name}
                />

                {errors.nameError && (
                  <span className="error-text">{errors.nameError}</span>
                )}

                <div
                  className="login-page-new__main-form-row-icon"
                  aria-hidden={true}
                >
                  <IoPersonOutline />
                </div>
              </div>
              <div className="login-page-new__main-form-row">
                <label className="login-page-new__main-form-row-label">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  onChange={handleInputChange}
                  value={values.email}
                />

                {errors.emailError && (
                  <span className="error-text">{errors.emailError}</span>
                )}

                <div
                  className="login-page-new__main-form-row-icon"
                  aria-hidden={true}
                >
                  <MdOutlineMailOutline />
                </div>
              </div>
              <div className="login-page-new__main-form-row">
                <label className="login-page-new__main-form-row-label">
                  Choose Password
                </label>
                <input
                  type={values.showPassword ? "text" : "password"}
                  placeholder="Enter Your Password"
                  name="password"
                  onChange={handleInputChange}
                  value={values.password}
                />
                <div className="login-page-new__main-form-options">
                  <button
                    type="button"
                    className="cu-show-pwd"
                    onClick={handleTogglePasswordVisibility}
                  >
                    {values.showPassword ? "Hide" : "Show"} Password
                  </button>
                </div>
                {errors.passwordError && (
                  <span className="error-text">{errors.passwordError}</span>
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
