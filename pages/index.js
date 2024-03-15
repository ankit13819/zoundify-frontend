import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <div id="root">
        <h1 style={{ color: "#ffffff" }}>Home Page</h1>
      </div>
    </Layout>
  );
}
