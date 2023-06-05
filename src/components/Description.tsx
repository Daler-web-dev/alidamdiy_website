import * as React from "react";
import Context from "./useTranslate";
import { ItranslateData } from "./Types/Types";

export interface IDescription {
  isActive: string;
}

const Description: React.FC<IDescription> = ({ isActive }) => {
  const translation = React.useContext<ItranslateData>(Context);
  const desc = [
    {
      title: translation?.productPage.Engine,
      value: "Турбодвигатель с выприском топлива",
    },
    {
      title: translation?.productPage.count,
      value: "3 подряд",
    },
    {
      title: translation?.productPage.text,
      value: "1.2л",
    },
    {
      title: translation?.productPage.text2,
      value: "180 км/ч (1.2л) 11,1 сек",
    },
    {
      title: translation?.productPage.text3,
      value: "190 при 2000-4000 rpm",
    },
    {
      title: translation?.productPage.text4,
      value: "Автоматическая, 6-ступенчетая",
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
            <h1 className="text-center">Chevrolet Orlando</h1>
          </div>
          <div className="w-full h-fit py-4 px-4">
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              iste quibusdam facere quo reprehenderit, commodi, excepturi ipsum
              blanditiis dolor temporibus asperiores! Sint, ipsam corporis.
              Dolores enim tempore accusantium unde sint.
            </h1>
          </div>
        </div>
      )}
    </>
  );
};

export default Description;
