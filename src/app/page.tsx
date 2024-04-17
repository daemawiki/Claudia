import Footer from "@/components/footer";
import Header from "@/components/header/header";
import Index from "@/components/index";
import SideBar from "@/components/sideBar/sideBar";
import Table from "@/components/table/table";
import Title from "@/components/title/title";
import Lesson from "@/components/lesson/lesson";
import { mainPageIndex } from "@/constant/indexItem";
import { mainTableItem } from "@/constant/tableItem";
import "react-quill/dist/quill.snow.css";
import Header2 from "@/components/header/Header2";

export default function Main() {
  const index = mainPageIndex;
  const renderContent = () => {
    return index.map(item => {
      return (
        <Lesson
          title={item.title}
          index={item.index}
          content={item.detail}
          key={item.index}
        />
      );
    });
  };
  return (
    <>
      <Header2 />
      {/* <Header />
      <main className="flex min-h-screen justify-center flex-wrap gap-5">
        <div className="flex w-[1000px] bg-white min-h-screen flex-col gap-[60px] px-[100px] py-[60px]">
          <Title title="대마위키" lastModifiedTime={"2023-11-12 20:56:08"} />
          <Table
            info={mainTableItem}
            name="대마위키"
            subName="대덕소프트웨어마이스터고등학교의 위키"
          />
          <div className="flex flex-col gap-[10px]">
            <Index index={index} />
            {renderContent()}
          </div>
          <Footer />
        </div>
        <SideBar />
      </main> */}
    </>
  );
}
