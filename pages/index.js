import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout/Layout";
import Project from "@/components/Home/project";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <div id="root">
        <Project />
      </div>
    </Layout>
  );
}
