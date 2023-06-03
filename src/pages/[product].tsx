// import Button from "@/components/children/Button";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import * as React from "react";
import Description from "@/components/Description";
import { MdClose } from "react-icons/md";
import { CSSTransition } from "react-transition-group";
import Context from "@/components/useTranslate";
import { ItranslateData } from "@/components/Types/Types";
import Button from "../components/children/button"

export interface IAppProps { }

export default function Product(props: IAppProps) {
  const [isActive, setIsActive] = React.useState<string>("characteristic");
  const [isShow, setIsShow] = React.useState<boolean>(false);
  const [success, setSuccess] = React.useState<boolean>(false);
  const nodeRef = React.useRef(null);
  const sbmt = (e: any) => {
    e.preventDefault();
  };
  const reset = () => {
    setSuccess(false);
    setIsShow(false);
  };
  const translation = React.useContext<ItranslateData>(Context)

  return (
    <>
      <div className="container mx-auto px-24 max-xl:px-14 max-lg:px-5 mt-4">
        <h1 className='text-3xl max-lg:text-2xl font-["MyFont"] mb-2'>
          Chevrolet Orlando
        </h1>
        <p className="max-md:text-sm mb-2 text-[#474747]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum error,
          mollitia
        </p>
        <div className="w-full flex max-lg:flex-col gap-8 justify-between">
          <div className="w-1/2 max-lg:w-full">
            <div className="w-full rounded-xl bg-[#D9D9D9] mb-8">
              <Image
                alt="car"
                width={1000}
                height={1000}
                src="/images/Cars/orlando.svg"
              />
            </div>
            <div className="w-full flex items-center justify-between gap-7 max-lg:gap-6 max-md:gap-4">
              <div className="w-full bg-[#D9D9D9] rounded-xl">
                <Image
                  alt="car"
                  width={1000}
                  height={1000}
                  src="/images/Cars/orlando.svg"
                />
              </div>
              <div className="w-full bg-[#D9D9D9] rounded-xl">
                <Image
                  alt="car"
                  width={1000}
                  height={1000}
                  src="/images/Cars/orlando.svg"
                />
              </div>
              <div className="w-full bg-[#D9D9D9] rounded-xl">
                <Image
                  alt="car"
                  width={1000}
                  height={1000}
                  src="/images/Cars/orlando.svg"
                />
              </div>
            </div>
          </div>

          <div className="w-1/2 max-lg:w-full">
            <h1 className='text-3xl font-["MyFont"] mb-4'>{ translation?.productPage?.parametres }</h1>
            <form action="" onSubmit={(e) => sbmt(e)}>
              <div className="w-full flex items-center justify-between mb-2">
                <h1>{ translation?.productPage?.driver }</h1>
                <div className="flex items-center gap-3">
                  <button className="px-3 py-2 bg-[#D9D9D9] rounded-md">
                  { translation?.productPage?.yesText }
                  </button>
                  <button className="px-3 py-2 rounded-md">{ translation?.productPage?.noText }</button>
                </div>
              </div>
              <hr className="border-0 h-px bg-[#858585] mb-4" />
              <div className="w-full flex items-center justify-between mb-2">
                <h1>{ translation?.productPage?.baggage }</h1>
                <div className="flex items-center gap-3">
                  <button className="px-3 py-2 bg-[#D9D9D9] rounded-md">
                  { translation?.productPage?.yesText }
                  </button>
                  <button className="px-3 py-2 rounded-md">{ translation?.productPage?.noText }</button>
                </div>
              </div>
              <hr className="border-0 h-px bg-[#858585] mb-4" />
              <div className="w-full flex items-center justify-between mb-2">
                <h1>{ translation?.productPage?.passenger }</h1>
                <div className="flex items-center gap-3">
                  <button className="px-4 py-2 bg-[#D9D9D9] rounded-md">
                    6
                  </button>
                </div>
              </div>
              <hr className="border-0 h-px bg-[#858585] mb-4" />
              <div className="w-full flex items-center justify-between mb-2">
                <h1>{ translation?.productPage?.fuel }</h1>
                <button className="h-9 rounded-md">15 л/км</button>
              </div>
              <hr className="border-0 h-px bg-[#858585] mb-4" />
              <div className="w-full flex items-center justify-between mb-2">
                <h1 className='font-["MyFont"] text-3xl max-lg:text-2xl max-md:text-xl'>
                { translation?.productPage?.price }:
                </h1>
                <h1 className='font-["MyFont"] text-3xl max-lg:text-2xl max-md:text-xl text-[#E31E24]'>
                  250$
                </h1>
              </div>
              <hr className="border-0 h-px bg-[#858585]" />
              <div className="flex items-center gap-3 mt-9">
                <div onClick={() => setIsShow(true)}>
                  <Button> { translation?.header?.orderBtn } </Button>
                </div>
                <button className="font-medium px-6 py-2 rounded-md border border-[#E31E24] ">
                { translation?.header?.consult }
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full mt-8">
          <div className="flex items-center  gap-3 mb-3">
            <button
              className="px-3 py-1 h-9 rounded-md"
              style={{
                backgroundColor: isActive === "characteristic" ? "#D9D9D9" : "",
              }}
              onClick={() => setIsActive("characteristic")}
            >
              { translation?.productPage?.characteristic }
            </button>
            <hr className="w-5 border-0 h-px bg-[#858585] rotate-90" />
            <button
              className="px-3 py-2 rounded-md"
              style={{
                backgroundColor: isActive === "characteristic" ? "" : "#D9D9D9",
              }}
              onClick={() => setIsActive("description")}
            >
              { translation?.productPage?.description }
            </button>
          </div>
          <hr className="border-0 h-px bg-[#858585] mb-4" />
          <Description isActive={isActive} />
        </div>
      </div>
      {isShow ? (
        <div
            className="w-full h-screen fixed top-0 left-0 bg-[rgba(236,236,236,.8)]"
            onClick={reset}
          >
            <div
              className="w-3/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-lg:w-full py-[66px] max-xl:py-12 px-14 max-xl:px-10 max-md:px-5 md:rounded-[15px] shadow-[0px_4px_16px_#00000040] bg-[#FAFAFA] trnst"
              ref={nodeRef}
              onClick={(e) => e.stopPropagation()}
            >
              {success ? (
                <div>
                  <div className="w-full m-auto flex justify-center">
                    <img src="/images/icons/success.svg" alt="success" />
                  </div>
                  <div className="absolute top-2 right-2" onClick={reset}>
                    <MdClose size={"30"} />
                  </div>
                  <h1 className="text-6xl text-center mt-4">{ translation?.productPage?.successText }</h1>
                  <p className="text-center text-xl mt-4">
                      { translation?.productPage?.successText2 }
                  </p>
                </div>
              ) : (
                <div>
                  <h2 className="text-4xl max-xl:text-3xl max-md:text-2xl font-bold leading-[115%] tracking-[-0.011em] font-[MyFontSemiBold] mb-8">
                  {translation?.modal.application}
                  </h2>
                  <div className="absolute top-2 right-2" onClick={reset}>
                    <MdClose size={"30"} />
                  </div>
                  <div className="flex items-center gap-6 max-md:gap-4 max-sm:gap-3">
                    <input
                      type="text"
                      placeholder={translation?.modal.placeholder}
                      className="w-3/5 px-6 py-[14px] rounded-[5px] bg-[#D9D9D9]"
                    />
                    <input
                      type="text"
                      className="w-2/5 px-6 py-[14px] rounded-[5px] bg-[#D9D9D9]"
                    />
                  </div>
                  <div className="mt-8 flex items-center gap-9 max-xl:gap-5">
                    <div className="h-2/5" onClick={() => setSuccess(true)}>
                      <Button>{translation?.modal.btn}</Button>
                    </div>
                    <div className="w-3/4">
                      <p className="max-xl:text-sm max-md:text-xs text-[#6A6A6A]">
                         {translation?.modal.text}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
      ) : null}
    </>
  );
}