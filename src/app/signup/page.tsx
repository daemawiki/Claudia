"use client";
import Button from "@/components/button";
import Header from "@/components/header/header";
import Title from "@/components/title/title";
import Input from "@/components/input/input";
import SideBar from "@/components/sideBar/sideBar";
import Dropdown from "@/components/input/dropdown";
import { majorMenu, periodMenu } from "@/constant/dropdownItem";
import PasswordForm from "@/components/input/passwordForm";
import Link from "next/link";
import { SetStateAction } from "react";
import { useState } from "react";

export default function SignUp() {
  const [gen, setGen] = useState<string>("");
  const [major, setMajor] = useState<string>("");
  return (
    <>
      <main className="flex min-h-screen justify-center flex-wrap gap-5">
        <div className="flex w-[1000px] bg-white min-h-screen flex-col gap-[20px] px-[100px] py-[60px]">
          <Title title="회원가입" />
          <div className="flex flex-col gap-[10px]">
            <Input title="이름" width={"full"} />
            <Input
              title="DSM 이메일"
              width={"full"}
              buttonText={"인증"}
              buttonFontSize={14}
              buttonStyle={{ position: "absolute", right: "10px" }}
            />
            <Input
              title="인증코드"
              width={"full"}
              isNumber
              buttonText="확인"
              buttonFontSize={14}
              buttonStyle={{ position: "absolute", right: "10px" }}
            />
            <Dropdown
              title="기수"
              content={periodMenu}
              width={110}
              setForm={function (value: SetStateAction<string>): void {
                throw new Error("Function not implemented.");
              }}
            />
            <Dropdown
              title="전공"
              content={majorMenu}
              width={180}
              setForm={function (value: SetStateAction<string>): void {
                throw new Error("Function not implemented.");
              }}
            />
            <PasswordForm />
            <div className="flex justify-end items-end gap-[10px] pt-5">
              <Link href={"/login"}>
                <Button
                  text="로그인"
                  color="black"
                  width={139}
                  height={48}
                  fontSize={20}
                  rounded={16}
                />
              </Link>
              <Button text="회원가입" width={139} height={48} rounded={16} />
            </div>
          </div>
        </div>
        <SideBar />
      </main>
    </>
  );
}
