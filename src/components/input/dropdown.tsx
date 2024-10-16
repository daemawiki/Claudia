"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface DropdownProps {
  title: string;
  content: Array<string>;
  width: number;
  titlePosition?: "column" | "row";
  setForm: React.Dispatch<React.SetStateAction<string>>;
  zIndex: number;
}

interface DropdownItemProps {
  key: number;
  item: string;
  clickHandler: (e: React.MouseEvent<HTMLElement>) => void;
}

const DropdownItem = ({ key, item, clickHandler }: DropdownItemProps) => {
  return (
    <div
      key={key}
      className="border-t border-black p-[10px] h-[24px] box-content bg-white"
      onClick={clickHandler}
    >
      {item}
    </div>
  );
};

const Dropdown = ({
  title,
  content,
  width,
  titlePosition = "column",
  setForm: form,
  zIndex,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [select, setSelect] = useState("");
  const containerStyle = { width: `${width}px`, zIndex: zIndex };
  const flexStyle = {
    flexDirection: titlePosition,
  };
  const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
    setIsOpen(!isOpen);
    setSelect(e.currentTarget.innerText);
    form(e.currentTarget.innerText);
  };
  const renderContent = content.map((item, key) => {
    return <DropdownItem item={item} key={key} clickHandler={clickHandler} />;
  });
  const dropdownRef = useRef<HTMLDivElement>(null);

  const outsideClickHandler = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", outsideClickHandler);
    return () => {
      document.removeEventListener("mousedown", outsideClickHandler);
    };
  }, []);

  return (
    <div
      className="flex flex-col gap-[10px] relative w-fit items-start"
      style={flexStyle}
      ref={dropdownRef}
    >
      <span className="text-base font-bold w-fit pt-[12.5px]">{title}</span>
      <div className="relative h-[45px]" style={containerStyle}>
        <div
          className="border border-solid border-black flex rounded-2xl flex-col absolute overflow-hidden"
          style={containerStyle}
        >
          <div
            className="flex justify-between w-full p-[10px]"
            onClick={clickHandler}
          >
            <div>{select}</div>
            <Image
              src={"/images/caretdown.svg"}
              alt=""
              width={24}
              height={24}
            />
          </div>
          {isOpen && renderContent}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
