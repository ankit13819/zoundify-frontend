import Layout from "@/components/Layout/Layout";
import Project from "@/components/Home/project";
import ProjectCmp from "@/components/Home/projectCmp";
import NewProject from "@/components/NewProject";

export default function Home() {
  return (
    <Layout>
      <div id="root">
        <NewProject />
      </div>
    </Layout>
  );
}
