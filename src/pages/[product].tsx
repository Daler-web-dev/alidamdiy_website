import { GetServerSideProps } from "next";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Description from "@/components/Description";
import { MdClose } from "react-icons/md";
import Context from "@/components/useTranslate";
import { ItranslateData } from "@/components/Types/Types";
import axios from "axios";
import HeadMeta from "@/components/HeadMeta";
import InputMask from "react-input-mask";
import { useForm } from "react-hook-form";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useRouter } from "next/router";
export interface IAppProps {
  data: any;
  query: number;
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}`);
  const data = await res.json();
  return {
    props: {
      data: data.cars.cars,
      query: query.product,
    },
  };
};

export default function Product({ data, query }: IAppProps) {
  const [arr, setArr] = useState<any>();
  useEffect(() => {
    data.map((i: any) => {
      if (i.id == query) {
        setArr(i);
      }
    });
  }, []);

  const URL = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TOKEN}/sendMessage`;

  const [isActive, setIsActive] = useState<string>("characteristic");

  const [isShow, setIsShow] = useState<boolean>(false);

  const [success, setSuccess] = useState<boolean>(false);

  const [driverStatus, setDriverStatus] = useState<string>("ДА");

  const [baggageStatus, setBaggageStatus] = useState<string>("ДА");

  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const price =
    driverStatus == "ДА" ? arr?.priceWithDriver : arr?.priceWithoutDriver;
  const name = arr?.name;

  const router = useRouter();
  console.log(router);
  const style1 =
    "w-3/5 fixed max-lg:w-full py-[66px] max-xl:py-12 px-14 max-xl:px-10 max-md:px-5 md:rounded-[15px] shadow-[0px_4px_16px_#00000040] bg-[#FAFAFA] ease-in duration-200 z-10";
  const animation =
    "w-3/5 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-lg:w-full py-[66px] max-xl:py-12 px-14 max-xl:px-10 max-md:px-5 md:rounded-[15px] shadow-[0px_4px_16px_#00000040] bg-[#FAFAFA] ease-in duration-200 trnst2 z-10";
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const submit = (data: any) => {
    let msg = `🆕 Новый заказ! \n`;
    msg += `👨 Имя клиента: ${data?.name} \n`;
    msg += `📞 Номер телефона: ${data?.phone} \n\n`;
    msg += `📋 Данные машины👇: \n`;
    msg += `🚘 Марка машины: ${name} \n`;
    msg += `👨‍🦰 С водителем: ${driverStatus} \n`;
    msg += `🧳 С багажом: ${baggageStatus} \n`;
    msg += `💰 Стоимость: ${price}$ \n`;
    axios
      .post(URL, {
        chat_id: process.env.NEXT_PUBLIC_CHAT_ID,
        parse_mode: "html",
        text: msg,
      })
      .catch((err) => console.log(err));
    setSuccess(true);
  };
  const reset = () => {
    setSuccess(false);
    setIsShow(false);
  };
  const translation = React.useContext<ItranslateData>(Context);
  return (
    <>
      <HeadMeta title={`Alidamdiy - ${arr?.name}`} />
      <div className="container mx-auto px-24 max-xl:px-14 max-lg:px-5 mt-4">
        <h1
          className='text-3xl max-lg:text-2xl font-["MyFont"] mb-2'
          onClick={() => router.back()}
        >
          {arr?.name}
        </h1>
        <div className="w-full flex max-lg:flex-col gap-8 justify-between">
          <div className="w-1/2 h-[600px] max-lg:w-full select-none flex flex-col gap-3">
            <Swiper
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              <SwiperSlide>
                <div className="w-full h-full rounded-xl bg-[#ffff] mb-8 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="loader2"></span>
                  </div>
                  <Image
                    alt="car"
                    width={1000}
                    height={1000}
                    src={`/${arr?.img[1]}`}
                    className="z-1 relative"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-full rounded-xl bg-[#D9D9D9] mb-8 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="loader2"></span>
                  </div>
                  <Image
                    alt="car"
                    width={1000}
                    height={1000}
                    src={`/${arr?.img[2]}`}
                    className="z-1 relative"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-full rounded-xl bg-[#D9D9D9] mb-8 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="loader2"></span>
                  </div>
                  <Image
                alt="car"
                width={1000}
                height={1000}
                src={`/${arr?.img[3]}`}
                className="z-1 relative"
              />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-full rounded-xl bg-[#D9D9D9] mb-8 relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="loader2"></span>
                  </div>
                  <Image
                    alt="car"
                    width={1000}
                    height={1000}
                    src={`/${arr?.img[4]}`}
                    className="z-1 relative"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              <div className="w-full flex items-center justify-between gap-7 max-lg:gap-6 max-md:gap-4">
                <SwiperSlide>
                  <div className="w-full h-full bg-[#D9D9D9] rounded-xl relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="loader2"></span>
                  </div>
                    <Image
                      alt="car"
                      width={1000}
                      height={1000}
                      src={`/${arr?.img[1]}`}
                      className="object-cover z-1 relative"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full h-full bg-[#D9D9D9] rounded-xl object-cover relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="loader2"></span>
                  </div>
                    <Image
                      alt="car"
                      width={1000}
                      height={1000}
                      src={`/${arr?.img[2]}`}
                      className="object-cover z-1 relative"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full h-full bg-[#D9D9D9] rounded-xl relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="loader2"></span>
                  </div>
                    <Image
                  alt="car"
                  width={1000}
                  height={1000}
                  src={`/${arr?.img[3]}`}
                  className="object-cover z-1 relative"
                />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full h-full bg-[#D9D9D9] rounded-xl relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="loader2"></span>
                  </div>
                    <Image
                      alt="car"
                      width={1000}
                      height={1000}
                      src={`/${arr?.img[4]}`}
                      className="object-cover z-1 relative"
                    />
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
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
                {arr?.priceWithoutDriver == 0 ? null : (
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
                )}
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
                  {arr?.countOfPlaces}
                </button>
              </div>
            </div>
            <hr className="border-0 h-px bg-[#858585] mb-4" />
            <div className="w-full flex items-center justify-between mb-2">
              <h1 className='font-["MyFont"] text-3xl max-lg:text-2xl max-md:text-xl'>
                {translation?.productPage?.price}:
              </h1>
              <h1 className='font-["MyFont"] text-3xl max-lg:text-2xl max-md:text-xl text-[#E31E24]'>
                {driverStatus === "ДА"
                  ? arr?.priceWithDriver
                  : arr?.priceWithoutDriver}
                $
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
              type="submit"
              className="px-3 py-2 rounded-md bg-[#D9D9D9]"
              onClick={() => setIsActive("description")}
            >
              {translation?.productPage?.description}
            </button>
          </div>
          <hr className="border-0 h-px bg-[#858585] mb-4" />
          <Description isActive={isActive} arr={arr} />
        </div>
      </div>
      <form action="" onSubmit={handleSubmit(submit)}>
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
                <div className="flex max-sm:flex-col  gap-6 max-md:gap-4 max-sm:gap-3">
                  <input
                    type="text"
                    placeholder={translation?.modal.placeholder}
                    className="w-3/5 max-sm:w-full px-6 py-[14px] rounded-[5px] bg-[#D9D9D9]"
                    {...register("name", { required: true })}
                  />
                  {errors?.name && (
                    <p className="text-red-500">{translation.errors.NameMsg}</p>
                  )}
                  <InputMask
                    mask="+\9\98-(99)-999-99-99"
                    className="w-2/5 max-sm:w-full px-6 py-[14px] rounded-[5px] bg-[#D9D9D9]"
                    placeholder={translation?.modal.phoneNumber}
                    {...register("phone", { required: true })}
                  />
                  <div>
                    {errors?.phone && (
                      <p className="text-red-500">
                        {translation.errors.NumMsg}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mt-8 max-sm:mt-4 flex max-sm:flex-col-reverse items-center gap-9 max-xl:gap-5 max-sm:gap-2">
                  <div className="h-2/5 max-sm:w-full">
                    <button
                      type="submit"
                      className="font-medium leading-[150%] tracking-[-0.011em] px-6 max-lg:px-4 py-2 rounded-[5px] ease-in duration-150 hover:shadow-[0_0_10px_#E31E24] bg-[#E31E24] text-white"
                    >
                      {translation?.modal.btn}
                    </button>
                  </div>
                  <div className="w-3/4 max-sm:w-full">
                    <p className="max-xl:text-sm max-md:text-xs text-[#6A6A6A]">
                      {translation?.modal.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </form>
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
    </>
  );
}
