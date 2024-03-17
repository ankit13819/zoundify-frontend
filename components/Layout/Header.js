import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
    const destination = isLogin ? "/signin" : "/signup";
    router.push(destination);
  };

  return (
    <div className="header">
      <nav style={{ display: "flex", alignItems: "center" }}>
        <Image
          src="/logo.svg" // Assuming logo.svg is in the public directory
          alt="zoundify image"
          width={40}
          height={40}
          style={{ paddingTop: "30px", paddingLeft: "10px", cursor: "pointer" }}
          onClick={() => router.push("/")}
        />
        <button
          style={{
            position: "relative",
            fontSize: "30px",
            marginTop: "30px",
            fontWeight: "900",
          }}
          className="logo"
          onClick={() => router.push("/")}>
          Zoundify
        </button>
        <div className="login-page-new__top-right ng-star-inserted">
          <div className="login-page-new__top-right-text">
            Already playing with Zoundify?
          </div>
          <button
            className="login-page-new__top-right-button ng-star-inserted"
            onClick={handleToggle}>
            {isLogin ? "Login" : "SignUp"}
          </button>
        </div>
      </nav>
    </div>
  );
}
