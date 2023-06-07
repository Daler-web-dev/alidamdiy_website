import { Inter } from "next/font/google";
import Image from "next/image";

import Item from "@/components/children/Item";
import Button from "../components/children/button";
import { useContext, useEffect, useState } from "react";
import Context from "@/components/useTranslate";
import { ItranslateData } from "@/components/Types/Types";
import { useRouter } from "next/router";
import Link from "next/link";
import { MdClose } from "react-icons/md";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });
interface IMainProps {

}
const Home: React.FC<IMainProps> = ({ data }: any) => {
    
  console.log(data);
  
  const arr = [
    {
      id: 1,
      title: "Все",
    },
    {
      id: 2,
      title: "Седаны",
    },
    {
      id: 3,
      title: "Хетчбэки",
    },
    {
      id: 4,
      title: "Минивэны",
    },
    {
      id: 5,
      title: "Лимузины",
    },
    {
      id: 6,
      title: "Пикапы",
    },
  ];
  const URL = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TOKEN}/sendMessage`;
  const sbmt = (e: any) => {
    e.preventDefault();
    const data: any = {};
    let fr = new FormData(e.target);

    fr.forEach((value, key) => {
      data[key] = value;
    });
    let msg = `Новая заявка! \n`;
    msg += `Имя: ${data?.name} \n`;
    msg += `Номер телефона: ${data?.phone} \n`;
    axios
      .post(URL, {
        chat_id: process.env.NEXT_PUBLIC_CHAT_ID,
        parse_mode: "html",
        text: msg,
      })
      .catch((err) => console.log(err));
  };
  const router = useRouter();
  const { locale } = router;
  const translation = useContext<ItranslateData>(Context);
  const [isShow, setIsShow] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const style1 =
    "w-3/5 absolute max-lg:w-full py-[66px] max-xl:py-12 px-14 max-xl:px-10 max-md:px-5 md:rounded-[15px] shadow-[0px_4px_16px_#00000040] bg-[#FAFAFA] ease-in duration-200";
  const animation =
    "w-3/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-lg:w-full py-[66px] max-xl:py-12 px-14 max-xl:px-10 max-md:px-5 md:rounded-[15px] shadow-[0px_4px_16px_#00000040] bg-[#FAFAFA] ease-in duration-200 trnst2";
  const reset = () => {
    setSuccess(false);
    setIsShow(false);
  };
  return (
    <>
      <section className="relative">
        <div className="w-full h-full hidden max-sm:block">
          <Image
            className="w-full h-full object-cover"
            src={"/images/car.png"}
            width={1000}
            height={1000}
            alt="car"
          />
        </div>
        <div className="container mx-auto px-24 max-xl:px-14 max-lg:px-5 flex items-start justify-center mb-10">
          <div className="w-full h-full absolute left-0 z-[-1] rounded-b-3xl overflow-hidden max-sm:hidden">
            <Image
              className="w-full h-full object-cover"
              src={"/images/car.png"}
              width={1000}
              height={1000}
              alt="car"
            />
          </div>
          <div className="w-full py-24 max-lg:py-14 max-md:py-10 max-sm:py-[14px] flex items-center justify-start">
            <div className="max-w-[623px] w-full px-[39px] max-sm:px-0 py-[33px] max-sm:py-0 rounded-[15px] backdrop-blur bg-[#ffffff99] max-sm:bg-transparent">
              <div className="mb-3 max-sm:mb-0">
                <p className="text-xl font-semibold">
                  {translation?.banner?.rentText}
                </p>
              </div>
              <div className="mb-3 max-sm:mb-0">
                <h2 className="font-[MyFont] text-5xl max-lg:text-4xl max-md:text-3xl font-bold leading-[120%] max-md:leading-[130%] tracking-[-0.011em]">
                  {locale === "uz" ? (
                    <span className="font-[MyFont] text-[#E31E24]">
                      O&apos;zbekiston
                    </span>
                  ) : (
                    translation?.banner?.mainText
                  )}
                  <span className="font-[MyFont] text-[#E31E24]">
                    {" "}
                    {locale === "uz" ? (
                      <span className="font-[MyFont] text-[#E31E24]">
                        dunyosini biz
                      </span>
                    ) : (
                      translation?.banner?.world
                    )}{" "}
                  </span>
                  <span className="font-[MyFont] text-[#211F20]">
                    {locale === "uz" ? (
                      <span className="font-[MyFont]">bilan oching</span>
                    ) : (
                      translation?.banner?.us
                    )}
                    !
                  </span>
                </h2>
              </div>
              <div className="mb-7 max-md:mb-[7px]">
                <p className="max-md:text-xs font-[MyFontMedium] leading-[190%] tracking-[-0.011em] text-[#474747]">
                  {translation?.banner?.text2}
                </p>
                <p className="text-[#E31E24]">+998 91 123 32 33</p>
              </div>
              <div className="flex gap-5">
                <div onClick={() => setIsShow(true)}>
                <Button>{translation?.banner?.orderBtn}</Button>
                </div>
                <Link href="/catalog">
                  <button className="font-medium px-6 py-2 rounded-[5px] border border-[#E31E24]">
                    {translation?.banner?.infoBtn}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-24 max-xl:px-14 max-lg:px-5 mb-60">
          <div className="flex items-center gap-14 px-72 max-xl:px-40 max-lg:px-0 max-md:hidden">
            <div className="">
              <h2 className="text-5xl font-bold leading-[120%] tracking-[-0.011em] text-[#E31E24]">
                {translation?.cars?.carsText}
              </h2>
            </div>
            <div className="">
              <p className="leading-[190%] tracking-[-0.011em] text-[#474747]">
                {translation?.cars?.carsText2}
              </p>
            </div>
          </div>
          <div className="">
            <div className="mt-12 flex items-center justify-center">
              <ul className="flex justify-between max-lg:overflow-auto max-lg:pb-2">
                {arr.map((item: { id: number; title: string }) => {
                  return (
                    <li
                      key={item.id}
                      className="px-6 leading-[115%] tracking-[-0.011em] last:border-0 border-r border-[#000]"
                    >
                      <p className="py-2 px-[19px] rounded-[5px] ease-in duration-100 cursor-pointer hover:bg-[#BFBFBF]">
                        {item.title}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="w-full grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-[500px]:grid-cols-1 gap-[30px] max-lg:gap-[20px] mt-[45px]">
              {data.map((item: any) => (
                <Item key={item} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#1E1E1E] mb-[63px] max-lg:mb-14 max-md:mb-[43px]">
        <div className="relative -top-20 w-full overflow-hidden py-6">
          <div className="relative right-4 w-[110%] py-10 max-sm:px-5 rotate-[-1.28deg] bg-[#E31E24]">
            <h2 className="text-center text-[64px] max-xl:text-5xl max-lg:text-4xl max-md:text-[32px] font-[MyFontBoldMega] leading-[105%] tracking-[-0.011em] text-white">
              {translation?.statistics?.num}
            </h2>
          </div>
        </div>

        <div className="container mx-auto px-24 max-xl:px-14 max-lg:px-5">
          <div className="flex flex-wrap justify-center items-center gap-20 max-xl:gap-10 max-md:gap-[35px]">
            <div className="w-fit flex flex-col items-center justify-center">
              <div className="py-8 px-8 max-lg:px-5 border-b border-white">
                <h3 className="text-center text-8xl font-semibold leading-[115%] tracking-[-0.011em] text-[#E31E24]">
                  120+
                </h3>
              </div>
              <div className="p-3 text-white">
                <p className="text-center leading-[115%] tracking-[-0.011em]">
                  {translation?.statistics?.cars}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="py-8 px-8 max-lg:px-5 border-b border-white">
                <h3 className="text-center text-8xl font-semibold leading-[115%] tracking-[-0.011em] text-[#E31E24]">
                  1200+
                </h3>
              </div>
              <div className="text-center p-3 text-white">
                <p className="leading-[115%] tracking-[-0.011em]">
                  {translation?.statistics?.rentedCars}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="py-8 px-8 max-lg:px-5 border-b border-white">
                <h3 className="text-center text-8xl font-semibold leading-[115%] tracking-[-0.011em] text-[#E31E24]">
                  23
                </h3>
              </div>
              <div className="p-3 text-white">
                <p className="text-center leading-[115%] tracking-[-0.011em]">
                  {translation?.statistics?.count}
                </p>
              </div>
            </div>
          </div>
          <div className="py-14">
            <p className="font-[MyFontMedium] text-3xl max-lg:text-2xl leading-[190%] tracking-[-0.011em] text-[#E6E6E6]">
              {translation?.banner?.text2}
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-24 max-xl:px-14 max-lg:px-5 mb-[30px]">
          <div className="flex max-md:flex-col max-md:gap-5">
            <div className="w-3/5 max-xl:w-1/2 max-md:w-full max-md:px-5">
              <h3 className="text-[64px] max-xl:text-5xl max-lg:text-4xl max-md:text-[32px] font-[MyFontSemiBold] leading-[105%] tracking-[-0.011em] text-[#E31E24]">
                {translation?.questions?.questionText}
              </h3>
            </div>
            <div className="w-2/5 max-xl:w-1/2 max-md:w-full flex flex-col gap-8 max-md:px-5">
              <div className="relative">
                <div className="absolute top-5 -left-8 z-[-1] w-6 h-6 animate-ping rounded-full bg-[#E31E24]"></div>
                <div className="absolute top-5 -left-8 w-6 h-6 rounded-full bg-[#E31E24]"></div>
                <div className="w-3/5 max-xl:w-3/4 max-md:w-full">
                  <h3 className="mb-3 font-[MyFontBold] text-[28px] max-lg:text-2xl leading-[115%] tracking-[-0.011em]">
                    {translation?.questions?.title}
                  </h3>
                </div>
                <p className="leading-[190%] tracking-[-0.011em] text-[#474747]">
                  {translation?.questions?.titleText}
                </p>
              </div>
              <div className="relative">
                <div className="absolute top-5 -left-8 z-[-1] w-6 h-6 animate-ping rounded-full bg-[#E31E24]"></div>
                <div className="absolute top-5 -left-8 w-6 h-6 rounded-full bg-[#E31E24]"></div>
                <div className="w-4/5 max-md:w-full">
                  <h3 className="mb-3 font-[MyFontBold] text-[28px] max-lg:text-2xl leading-[115%] tracking-[-0.011em]">
                    {translation?.questions?.title2}
                  </h3>
                </div>
                <p className="leading-[190%] tracking-[-0.011em] 32text-[#474747]">
                  {translation?.questions?.titleText}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-[68px] max-lg:mt-10 max-sm:mt-[35px]">
            <p className="text-3xl max-md:text-2xl leading-[190%] tracking-[-0.011em]">
              {translation?.banner?.text2}
            </p>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="overflow-hidden w-full h-[350px] z-[-1] absolute top-0 left-0 py-6">
          <div className="relative right-5 w-[110%] h-[300px] rotate-[-1.28deg] bg-[#E31E24]"></div>
        </div>
        <div className="container mx-auto px-24 max-xl:px-14 max-lg:px-5 max-md:px-0 max-lg:pt-20 flex max-lg:flex-col items-center justify-between gap-[70px] max-2xl:gap-14 max-xl:gap-5 mb-10">
          <div className="w-2/5 max-lg:w-full max-md:px-5">
            <div className="w-3/4 mb-3">
              <h3 className="text-[28px] font-bold leading-[115%] tracking-[-0.011em] text-[#EEEEEE]">
                {translation?.questions?.questions}
              </h3>
            </div>
            <div className="w-full">
              <p className="text-xl leading-[190%] tracking-[-0.011em] text-[#FAFAFA]">
                {translation?.questions?.questions2}
              </p>
            </div>
          </div>
          <div className="w-3/5 max-lg:w-full py-[66px] max-xl:py-12 px-14 max-xl:px-10 max-md:px-5 md:rounded-[15px] shadow-[0px_4px_16px_#00000040] bg-[#FAFAFA]">
            <h2 className="text-4xl max-xl:text-3xl max-md:text-2xl font-bold leading-[115%] tracking-[-0.011em] font-[MyFontSemiBold] mb-8">
              {translation?.modal?.application}
            </h2>
            <div className="flex items-center gap-6 max-md:gap-4 max-sm:gap-3">
              <input
                type="text"
                placeholder={translation?.modal?.placeholder}
                className="w-3/5 px-6 py-[14px] rounded-[5px] bg-[#D9D9D9]"
              />
              <input
                type="text"
                className="w-2/5 px-6 py-[14px] rounded-[5px] bg-[#D9D9D9]"
              />
            </div>
            <div className="mt-8 flex items-center gap-9 max-xl:gap-5">
              <div className="h-2/5">
                <Button>{translation?.modal?.btn}</Button>
              </div>
              <div className="w-3/4">
                <p className="max-xl:text-sm max-md:text-xs text-[#6A6A6A]">
                  {translation?.modal?.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section>
				<div className="container mx-auto px-24 max-xl:px-14 max-lg:px-5 max-md:px-0">
					<div className="mb-6">
						<h2 className="max-md:text-center text-[64px] max-lg:text-5xl max-md:text-4xl max-sm:text-[32px] font-[MyFontSemiBold] font-bold leading-[105%] tracking-[-0.011em] text-[#E31E24]">
							Наш офис
						</h2>
					</div>
					<div className="w-full">
						<div className="w-full h-[500px] rounded-[15px] overflow-hidden">
							<iframe
								className="w-full h-full"
								src="https://yandex.uz/map-widget/v1/?ll=66.941788%2C39.659413&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgk3NzEyNzc5ODUSF0_Ku3piZWtpc3RvbiwgU2FtYXJxYW5kIgoNoPOFQhUbnh5C&sctx=ZAAAAAgCEAAaKAoSCW3jT1Q2IElAEQe0dAXbnkpAEhIJ5s%2B3BUt13D8RkkHuIkxRxD8iBgABAgMEBSgKOABA3lBIAWI6cmVsZXZfcmFua2luZ19oZWF2eV9yZWxldl9zZXJwX2Zvcm11bGE9MC42OmwzX2RjMTg5MjA3X2V4cGI7cmVsZXZfcmFua2luZ19oZWF2eV9yZWxldl93b3JsZF9mb3JtdWxhPTAuNzpsM19kYzE4OTIwN19leHBiOnJlbGV2X3JhbmtpbmdfaGVhdnlfcmVsZXZfbWFwc19mb3JtdWxhPTAuNjpsM19kYzE4OTIwN19leHBqAnV6nQHNzEw9oAEAqAEAvQH4HQUvwgEqlOSR%2FMQG1qSCw8wFtsnX2MgEmZWj3NsCqrvnqp4Fnaya%2F7oG05rFkZYE6gEA8gEA%2BAEAggIl0KHQsNC80LDRgNC60LDQvdC0INC%2B0LHQu9Cw0YHRgtC90LDRj4oCAJICBTEwMzM0mgIMZGVza3RvcC1tYXBz&sll=66.942032%2C39.661041&sspn=0.001092%2C0.000502&text=%D0%A1%D0%B0%D0%BC%D0%B0%D1%80%D0%BA%D0%B0%D0%BD%D0%B4%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D0%BD%D0%B0%D1%8F&z=16.96"
								width="560"
								height="400"
								frameBorder="1"
							></iframe>
						</div>
					</div>
				</div>
			</section> */}
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
              <form action="" onSubmit={(e) => sbmt(e)}>
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
                    <Button>{translation?.modal.btn}</Button>
                  </div>
                  <div className="w-3/4">
                    <p className="max-xl:text-sm max-md:text-xs text-[#6A6A6A]">
                      {translation?.modal.text}
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {success ? (
            <div
              className={isShow ? animation : style1}
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="w-full m-auto flex justify-center">
                <Image src="/images/icons/success.svg" alt="success" width={1000} height={1000}/>
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
    </>
  );
}
export default Home;

export const getStaticProps = async () => { 
  const res = await axios.get('https://alidamdiyindustry.com/api/carsApi') 
  
  console.log(res);
  
  
  const data = await res.data
  
  return { 
   props: {
    data: data.cars.cars
   }
  } 
 }
