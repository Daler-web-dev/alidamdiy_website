import { GetServerSideProps } from "next";
import Image from "next/image";
import * as React from "react";
import Description from "@/components/Description";
import { MdClose } from "react-icons/md";
import Context from "@/components/useTranslate";
import { ItranslateData } from "@/components/Types/Types";
import axios from "axios";

export interface IAppProps {}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const res = await fetch(`http://localhost:3000/api/carsApi`);
  const data = await res.json();
  return {
    props: {
      data: data.cars.cars,
      query: query.product
    }
  }
}

export default function Product({ data, query }: any) {
  const [arr, setArr] = React.useState<any>()
  React.useEffect(() => {
    data.map((i: any) => {
        if(i.id == query){
        setArr(i);
      }
    })
  }, [])
  const URL = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TOKEN}/sendMessage`;

  const [isActive, setIsActive] = React.useState<string>("characteristic");

  const [isShow, setIsShow] = React.useState<boolean>(false);

  const [success, setSuccess] = React.useState<boolean>(false);

  const [driverStatus, setDriverStatus] = React.useState<string>("ДА");

  const [baggageStatus, setBaggageStatus] = React.useState<string>("ДА");
  const style1 =
    "w-3/5 absolute max-lg:w-full py-[66px] max-xl:py-12 px-14 max-xl:px-10 max-md:px-5 md:rounded-[15px] shadow-[0px_4px_16px_#00000040] bg-[#FAFAFA] ease-in duration-200";
  const animation =
    "w-3/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-lg:w-full py-[66px] max-xl:py-12 px-14 max-xl:px-10 max-md:px-5 md:rounded-[15px] shadow-[0px_4px_16px_#00000040] bg-[#FAFAFA] ease-in duration-200 trnst2";
    
  const sbmt = (e: any) => {
    e.preventDefault();

    const data: any = {};
    let fr = new FormData(e.target);

    fr.forEach((value, key) => {
      data[key] = value;
    });

    let msg = `Новый заказ! \n`;
    msg += `Имя: ${data?.name} \n`;
    msg += `Номер телефона: ${data?.phone} \n`;
    msg += `Тип машины: Орландо \n`;
    msg += `С водителем: ${driverStatus} \n`;
    msg += `С багажом: ${baggageStatus} \n`;
    msg += `Стоимость: 250$ \n`;
    axios
      .post(URL, {
        chat_id: process.env.NEXT_PUBLIC_CHAT_ID,
        parse_mode: "html",
        text: msg,
      })
      .catch((err) => console.log(err));
  };
  const reset = () => {
    setSuccess(false);
    setIsShow(false);
  };
  const translation = React.useContext<ItranslateData>(Context);

  return (
    <>
        <div className="container mx-auto px-24 max-xl:px-14 max-lg:px-5 mt-4">
          <h1 className='text-3xl max-lg:text-2xl font-["MyFont"] mb-2'>
            { arr?.name }
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
                  src={`/${arr?.img[0]}`}
                />
              </div>
              <div className="w-full flex items-center justify-between gap-7 max-lg:gap-6 max-md:gap-4">
                <div className="w-full bg-[#D9D9D9] rounded-xl">
                  <Image
                    alt="car"
                    width={1000}
                    height={1000}
                    src={`/${arr?.img[0]}`}
                  />
                </div>
                <div className="w-full bg-[#D9D9D9] rounded-xl">
                  <Image
                    alt="car"
                    width={1000}
                    height={1000}
                    src={`/${arr?.img[0]}`}
                  />
                </div>
                <div className="w-full bg-[#D9D9D9] rounded-xl">
                  <Image
                    alt="car"
                    width={1000}
                    height={1000}
                    src={`/${arr?.img[0]}`}
                  />
                </div>
              </div>
            </div>
            <div className="w-1/2 max-lg:w-full">
              <h1 className='text-3xl font-["MyFont"] mb-4'>
                {translation?.productPage?.parametres}
              </h1>

              <div className="w-full flex items-center justify-between mb-2">
                <h1>{translation?.productPage?.driver}</h1>
                <div className="flex items-center gap-3">
                  <button
                    className="px-3 py-2 rounded-md"
                    onClick={() => setDriverStatus("ДА")}
                    type="button"
                    style={{
                      backgroundColor: driverStatus == "ДА" ? "#D9D9D9" : "",
                    }}
                  >
                    {translation?.productPage?.yesText}
                  </button>
                  <button
                    className="px-3 py-2 rounded-md"
                    onClick={() => setDriverStatus("НЕТ")}
                    type="button"
                    style={{
                      backgroundColor: driverStatus == "НЕТ" ? "#D9D9D9" : "",
                    }}
                  >
                    {translation?.productPage?.noText}
                  </button>
                </div>
              </div>
              <hr className="border-0 h-px bg-[#858585] mb-4" />
              <div className="w-full flex items-center justify-between mb-2">
                <h1>{translation?.productPage?.baggage}</h1>
                <div className="flex items-center gap-3">
                  <button
                    className="px-3 py-2  rounded-md"
                    onClick={() => setBaggageStatus("ДА")}
                    type="button"
                    style={{
                      backgroundColor: baggageStatus == "ДА" ? "#D9D9D9" : "",
                    }}
                  >
                    {translation?.productPage?.yesText}
                  </button>
                  <button
                    className="px-3 py-2 rounded-md"
                    onClick={() => setBaggageStatus("НЕТ")}
                    type="button"
                    style={{
                      backgroundColor: baggageStatus == "НЕТ" ? "#D9D9D9" : "",
                    }}
                  >
                    {translation?.productPage?.noText}
                  </button>
                </div>
              </div>
              <hr className="border-0 h-px bg-[#858585] mb-4" />
              <div className="w-full flex items-center justify-between mb-2">
                <h1>{translation?.productPage?.passenger}</h1>
                <div className="flex items-center gap-3">
                  <button
                    className="px-4 py-2 bg-[#D9D9D9] rounded-md"
                    type="button"
                  >
                    6
                  </button>
                </div>
              </div>
              <hr className="border-0 h-px bg-[#858585] mb-4" />
              <div className="w-full flex items-center justify-between mb-2">
                <h1>{translation?.productPage?.fuel}</h1>
                <button className="h-9 rounded-md" type="button">
                  15 л/км
                </button>
              </div>
              <hr className="border-0 h-px bg-[#858585] mb-4" />
              <div className="w-full flex items-center justify-between mb-2">
                <h1 className='font-["MyFont"] text-3xl max-lg:text-2xl max-md:text-xl'>
                  {translation?.productPage?.price}:
                </h1>
                <h1 className='font-["MyFont"] text-3xl max-lg:text-2xl max-md:text-xl text-[#E31E24]'>
                  250$
                </h1>
              </div>
              <hr className="border-0 h-px bg-[#858585]" />
              <div className="flex items-center gap-3 mt-9">
                <div onClick={() => setIsShow(true)}>
                  <button
                    type="button"
                    className="font-medium leading-[150%] tracking-[-0.011em] px-6 max-lg:px-4 py-2 rounded-[5px] ease-in duration-150 hover:shadow-[0_0_10px_#E31E24] bg-[#E31E24] text-white"
                  >
                    {translation?.header?.orderBtn}
                  </button>
                </div>
                <button
                  className="font-medium px-6 py-2 rounded-md border border-[#E31E24] "
                  type="button"
                >
                  {translation?.header?.consult}
                </button>
              </div>
            </div>
          </div>
          <div className="w-full mt-8">
            <div className="flex items-center  gap-3 mb-3">
              <button
                className="px-3 py-1 h-9 rounded-md"
                style={{
                  backgroundColor:
                    isActive === "characteristic" ? "#D9D9D9" : "",
                }}
                onClick={() => setIsActive("characteristic")}
                type="submit"
              >
                {translation?.productPage?.characteristic}
              </button>
              <hr className="w-5 border-0 h-px bg-[#858585] rotate-90" />
              <button
              type="submit"
                className="px-3 py-2 rounded-md"
                style={{
                  backgroundColor:
                    isActive === "characteristic" ? "" : "#D9D9D9",
                }}
                onClick={() => setIsActive("description")}
              >
                {translation?.productPage?.description}
              </button>
            </div>
            <hr className="border-0 h-px bg-[#858585] mb-4" />
            <Description isActive={isActive} arr={arr} />
          </div>
        </div>
        <form action="" onSubmit={(e) => sbmt(e)}>
        {isShow ? (
          <div
            className="w-full h-screen fixed top-0 left-0 bg-[rgba(236,236,236,.8)] z-10"
            onClick={reset}
          >
            <div
              className={isShow ? animation : style1}
              onClick={(e) => e.stopPropagation()}
            >
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
                    name="name"
                  />
                  <input
                    type="text"
                    className="w-2/5 px-6 py-[14px] rounded-[5px] bg-[#D9D9D9]"
                    placeholder={translation?.modal.phoneNumber}
                    name="phone"
                  />
                </div>
                <div className="mt-8 flex items-center gap-9 max-xl:gap-5">
                  <div className="h-2/5" onClick={() => setSuccess(true)}>
                    <button
                      type="submit"
                      className="font-medium leading-[150%] tracking-[-0.011em] px-6 max-lg:px-4 py-2 rounded-[5px] ease-in duration-150 hover:shadow-[0_0_10px_#E31E24] bg-[#E31E24] text-white"
                    >
                      {translation?.modal.btn}
                    </button>
                  </div>
                  <div className="w-3/4">
                    <p className="max-xl:text-sm max-md:text-xs text-[#6A6A6A]">
                      {translation?.modal.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {success ? (
              <div
                className={isShow ? animation : style1}
                onClick={(e) => e.stopPropagation()}
              >
                <div>
                  <div className="w-full m-auto flex justify-center">
                    <img src="/images/icons/success.svg" alt="success" />
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
        </form>
      {/* </form> */}
    </>
  );
}
