import * as React from "react";
import { useRouter } from "next/router";

export interface IDescription {
  isActive: string;
  arr: any;
}

const Description: React.FC<IDescription> = ({ arr }) => {
  const router = useRouter();
  const { locale } = router;
  return (
    <>
      <div className="w-full mt-8 h-fit bg-[#fffffe] max-xl:overflow-y-scroll">
        <div className="w-full h-14 bg-[#f5f5f5] py-4">
          <h1 className="text-center">{arr?.name}</h1>
        </div>
        <div className="w-full h-fit py-4 px-4">
          <h1>
            {locale == "ru"
              ? arr?.descriptionRU
              : locale == "uz"
              ? arr?.descriptionRU
              : arr?.descriptionEN}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Description;
