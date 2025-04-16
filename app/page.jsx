import { Suspense } from "react";
import Breadcrumb from "./_components/Breadcrumb";
import Comments from "./_components/Comments";
import CourseMaterials from "./_components/CourseMaterials";
import IconsBar from "./_components/IconsBar";
import Topics from "./_components/Topics";
import Video from "./_components/Video";
import Loading from "./loading";

export default function Home() {
  return (
    <div>
      <Breadcrumb />
      <div className="relative container">
        <Suspense fallback={<Loading />}>
          <Video />
        </Suspense>
        <IconsBar />
        <CourseMaterials />
        <Topics />
        <Comments />
      </div>
    </div>
  );
}
