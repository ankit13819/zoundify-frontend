import Image from "next/image";
import zoundifyImage from "../../src/assets/zoundify.png";
import { useRouter } from "next/router";
export default function Header() {
  const router = useRouter();
  return (
    <div className="header">
      <nav>
        <Image
          src={zoundifyImage}
          alt="zoundify image"
          className="login-page-new__logo-img"
        />
        <div class="login-page-new__top-right ng-star-inserted">
          <div class="login-page-new__top-right-text">
            {" "}
            Already playing with Zoundify?{" "}
          </div>
          <button
            className="login-page-new__top-right-button ng-star-inserted"
            onClick={() => router.push("/signin")}
          >
            Login
          </button>
        </div>
      </nav>
    </div>
  );
}
