import Image from "next/image";
import NavContainer from "./nav";
import Account from "./account";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-myHeaderColor w-full flex justify-center gap-10 items-center text-white">
      <Link href={"/"}>
        <h1 className="text-4xl font-extrabold text-[#EC7E4F]">대마위키</h1>
      </Link>
      <div className="flex justify-start gap-[10px]">
        <NavContainer text="최근 변경" src="/images/recently.svg" />
        <NavContainer text="분류" src="/images/category.svg" />
        <NavContainer text="인기" src="/images/popular.svg" />
      </div>
      <div className="w-[700px] rounded-[30px] flex bg-[#C7E1BA] items-center px-4 gap-[10px]">
        <div>
          <Image
            src="/images/random.svg"
            alt="shuffle"
            width={48}
            height={48}
          />
        </div>
        <input
          placeholder="검색어를 입력하세요"
          className="h-16 focus:outline-none grow bg-transparent text-xl placeholder-white placeholder:text-base"
        />
        <div>
          <Image
            src="/images/search.svg"
            alt="titleSearch"
            width={48}
            height={48}
          />
        </div>
        <div>
          <Image
            src="/images/document-search.svg"
            alt="documentSearch"
            width={48}
            height={48}
          />
        </div>
      </div>
      <Account />
    </div>
  );
};

export default Header;
