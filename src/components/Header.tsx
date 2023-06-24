import Image from "next/image";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/router";
import Context from "./useTranslate";
import { ItranslateData } from "./Types/Types";
import { useContext, useState } from "react";
import Button from "../components/children/button";
import { MdClose } from "react-icons/md";
import { Select } from "antd";
import axios from "axios";
import SearchInput from "./children/SearchInput";
import { Modal } from "./Modal";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  const router = useRouter();
  const { locale } = router;
  const [hide, setHide] = useState<boolean>(false);
  const [isShow, setIsShow] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [searchInp, setSearchInp] = useState<boolean>(false);
  const [localeValue, setLocaleValue] = useState<any>(locale);
  const style1 =
    "w-3/5 absolute max-lg:w-full py-[66px] max-xl:py-12 px-14 max-xl:px-10 max-md:px-5 md:rounded-[15px] shadow-[0px_4px_16px_#00000040] bg-[#FAFAFA] ease-in duration-200";
  const animation =
    "w-3/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-lg:w-full py-[66px] max-xl:py-12 px-14 max-xl:px-10 max-md:px-5 md:rounded-[15px] shadow-[0px_4px_16px_#00000040] bg-[#FAFAFA] ease-in duration-200 trnst2";
  const reset = () => {
    setSuccess(false);
    setIsShow(false);
    setSearchInp(false);
  };
  const changeLang = (e: any) => {
    const locale = e;
    // console.log(e);
    

    router.push("/", "/", { locale });
    setLocaleValue(locale);
  };
  const translation = useContext<ItranslateData>(Context);

  return (
    <>
      <header className="w-full bg-[#BBBBBB]">
        <div className="container mx-auto px-24 max-xl:px-14 max-lg:px-5 py-7 max-md:py-5 max-sm:py-4 flex items-center justify-between bg-[#BBBBBB]">
          <div className="flex items-center gap-10 max-xl:gap-5">
            <div className="max-lg:hidden block w-[170px] max-2xl:w-[150px] max-xl:w-[120px]">
              <Link href={"/"}>
                <Image
                  src={"/images/logo.svg"}
                  width={1000}
                  height={1000}
                  alt="logo"
                />
              </Link>
            </div>
            <div className="flex gap-5 max-sm:gap-2">
              <button
                className="w-fit h-fit p-3 max-sm:p-2 rounded-md bg-[#E31E24]"
                onClick={() => setSearchInp(true)}
              >
                <BiSearch color="white" size={15} />
              </button>
            </div>
          </div>

          <div className="w-[170px] max-lg:block hidden">
            <Link href={"/"}>
              <Image
                src={"/images/logo.png"}
                width={1000}
                height={1000}
                alt="logo"
              />
            </Link>
          </div>

          <div
            className={
              hide
                ? "w-full max-lg:h-screen max-lg:fixed max-lg:right-0 max-lg:top-0 flex max-lg:flex-col justify-between items-center max-lg:justify-start pt-10 z-50 max-lg:backdrop-blur-md max-lg:bg-white/30 ease-in duration-200"
                : "w-full max-lg:h-screen max-lg:fixed max-lg:right-[200%] max-lg:top-0 flex max-lg:flex-col justify-between items-center z-50 max-lg:backdrop-blur-md max-lg:bg-white/30 ease-in duration-200"
            }
            onClick={() => setHide(false)}
          >
            <button
              onClick={() => setHide(false)}
              className="max-lg:block hidden absolute top-5 right-5 p-3 max-sm:p-2 rounded-md bg-[#E31E24]"
            >
              <IoMdClose color="white" size={15} />
            </button>
            <div
              className="h-fit flex flex-1 max-lg:flex-none items-center max-lg:items-start justify-center max-lg:mb-7"
              onClick={(e) => e.stopPropagation()}
            >
              <nav>
                <ul className="flex max-lg:flex-col gap-7 max-2xl:gap-5 max-lg:gap-3">
                  <li className="font-medium max-lg:text-2xl text-[#474747]">
                    <Link href={"/catalog"} onClick={() => setHide(false)}>
                      {translation.header.catalog}
                    </Link>
                  </li>
                  <li className="font-medium max-lg:text-2xl  text-[#474747]">
                    <Link href={"#"} onClick={() => setHide(false)}>
                      {translation?.header?.drivers}
                    </Link>
                  </li>
                  <li className="font-medium max-lg:text-2xl text-[#474747]">
                    <Link href={"#"} onClick={() => setHide(false)}>
                      {translation?.header?.company}
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div
              className="flex items-center justify-end gap-10 max-2xl:gap-5"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-1 py-1 rounded-[5px] hover:shadow-[0_0_10px_#E31E24] selectBoi bg-[#E31E24]">
                <Select
                  defaultValue={localeValue}
                  style={{ width: 100 }}
                  value={localeValue}
                  onChange={(e: any) => changeLang(e)}
                  options={[
                    { value: "ru", label: (
                      <span className="flex items-center gap-1">
                      <img src="/Images/Flags/russia.svg" alt="russia" className="w-[20px]" /> {"RU"}
                      </span>
                    ) },
                    { value: "uz", label: (
                      <span className="flex items-center gap-1">
                      <img src="/Images/Flags/uzb.png" alt="uzb" className="w-[20px]" /> {"UZ"}
                      </span>
                    ) },
                    { value: "en", label: (
                      <span className="flex items-center gap-1">
                      <img src="/Images/Flags/usa.png" alt="usa" className="w-[20px]" /> {"USA"}
                      </span>
                    ) },
                  ]}
                />
              </div>
              <div className="" onClick={() => setIsShow(true)}>
                <Button>{translation?.header?.orderBtn}</Button>
              </div>
            </div>
          </div>
          <div className="max-lg:block hidden">
            <button
              onClick={() => setHide(true)}
              className="p-3 max-sm:p-2 rounded-md bg-[#E31E24]"
            >
              <GiHamburgerMenu color="white" size={15} />
            </button>
          </div>
        </div>
      </header>
      {isShow ? (
        <div
          className="w-full h-screen fixed top-0 left-0 bg-[rgba(236,236,236,.8)] z-10"
          onClick={reset}
        >
          <div
            className={isShow ? animation : style1}
            onClick={(e) => e.stopPropagation()}
          >
            <Modal reset={reset} setSuccess={setSuccess} />
          </div>
          {success ? (
            <div
              className={isShow ? animation : style1}
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="w-full m-auto flex justify-center">
                  <Image
                    src="/images/icons/success.svg"
                    alt="success"
                    width={110}
                    height={110}
                  />
                </div>
                <div className="absolute top-2 right-2" onClick={reset}>
                  <MdClose size={"30"} />
                </div>
                <h1 className="text-6xl text-center mt-4">
                  {translation?.productPage?.successText}
                </h1>
                <p className="text-center text-xl mt-4">
                  {translation?.productPage?.successText2}
                </p>
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
      <div
        className={
          searchInp
            ? "w-full h-screen fixed top-0 left-0 bg-[rgba(236,236,236,.8)] z-50 duration-200 ease-in"
            : "w-full h-screen absolute -top-[200%] left-0 bg-[rgba(236,236,236,.8)] z-50 duration-200 ease-in"
        }
        onClick={reset}
      >
        <div className="w-full absolute top-6 ease-in duration-200">
          <SearchInput />
        </div>
      </div>
    </>
  );
};
export default Header;