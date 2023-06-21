import * as React from "react";
import Context from "./useTranslate";
import { ItranslateData } from "./Types/Types";
import { useRouter } from "next/router";

export interface IDescription {
  isActive: string;
  arr: any
}

const Description: React.FC<IDescription> = ({ isActive, arr }) => {
  const translation = React.useContext<ItranslateData>(Context);
  const router = useRouter();
  const { locale } = router;
  const desc = [
    {
      title: translation?.productPage.Engine,
      value: arr?.carInfo.engine.ruTitle,
    },
    {
      title: translation?.productPage.count,
      value: arr?.carInfo.engine2.ruTitle,
    },
    {
      title: translation?.productPage.text,
      value: arr?.carInfo.volume,
    },
    {
      title: translation?.productPage.text2,
      value: arr?.carInfo.powerSpeed,
    },
    {
      title: translation?.productPage.text3,
      value: arr?.carInfo.torque,
    },
    {
      title: translation?.productPage.text4,
      value: arr?.carInfo.transmission,
    },
  ];
  return (
    <>
      {isActive == "characteristic" ? (
        <div className="w-full mt-8 h-fit bg-[#fffffe] max-xl:overflow-y-scroll">
          <div className="max-xl:w-[1240px]">
            <div className="w-full h-14 bg-[#f5f5f5] py-4">
              <h1 className="text-center">
                {translation?.productPage.description}
              </h1>
            </div>
            {desc.map((i, idx) => (
              <div key={idx} className="flex items-center">
                <div className="w-3/5 h-14 border py-4 px-4">
                  <h1>{i.title}</h1>
                </div>
                <div className="w-3/5 h-14 border border-l-0 py-4 px-4">
                  <h1 className="text-center">{i.value}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full mt-8 h-fit bg-[#fffffe] max-xl:overflow-y-scroll">
          <div className="w-full h-14 bg-[#f5f5f5] py-4">
            <h1 className="text-center">{arr.name}</h1>
          </div>
          <div className="w-full h-fit py-4 px-4">
            <h1>
              { locale == 'ru' ? arr.descriptionRU : locale == 'uz' ? arr.descriptionRU : arr.descriptionEN }
            </h1>
          </div>
        </div>
      )}
    </>
  );
};

export default Description;
