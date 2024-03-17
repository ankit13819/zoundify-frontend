import Layout from "@/components/Layout/Layout";
import Project from "@/components/Home/project";
import ProjectCmp from "@/components/Home/projectCmp";

export default function Home() {
  return (
    <Layout>
      <div id="root">
        <ProjectCmp />
      </div>
    </Layout>
  );
}
