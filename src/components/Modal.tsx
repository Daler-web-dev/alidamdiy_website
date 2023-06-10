import axios from "axios";
import * as React from "react";
import Context from "./useTranslate";
import { ItranslateData } from "./Types/Types";
import { useContext, useEffect, useRef, useState } from "react";
import { MdClose } from "react-icons/md";
import { IMaskInput } from "react-imask";
import Button from "./children/button";
import { InputMask } from "primereact/inputmask";
import { useForm } from "react-hook-form";
export interface IAppProps { }

export function Modal({ reset, setSuccess }: any) {
  const URL = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TOKEN}/sendMessage`;
  const translation = useContext<ItranslateData>(Context);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const submit = (data: any) => {
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
      setSuccess(true)
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit(submit)}>
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
            {...register("name", { required: true})}
          />
          {errors?.name && <p className="text-red-500">{translation.errors.NameMsg}</p>}
          <InputMask
            mask="+999-(99)-999-99-99"
            className="w-2/5 max-sm:w-full px-6 py-[14px] rounded-[5px] bg-[#D9D9D9]"
            unmask={true}
            placeholder={translation?.modal.phoneNumber}
            {...register("phone", { required: true })}
          />
          <div>
          {errors?.phone && <p className="text-red-500">{translation.errors.NumMsg}</p>}
          </div>
        </div>
        <div className="mt-8 max-sm:mt-4 flex max-sm:flex-col-reverse items-center gap-9 max-xl:gap-5 max-sm:gap-2">
          <div className="h-2/5 max-sm:w-full">
            <Button>{translation?.modal.btn}</Button>
          </div>
          <div className="w-3/4 max-sm:w-full">
            <p className="max-xl:text-sm max-md:text-xs text-[#6A6A6A]">
              {translation?.modal.text}
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
