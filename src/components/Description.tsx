import * as React from "react";

export interface IDescription {
  isActive: string;
}

const Description: React.FC<IDescription> = ({ isActive }) => {
  const desc = [
    {
      title: "Двигатель",
      value: "Турбодвигатель с выприском топлива",
    },
    {
      title: "Количество, расположение цилиндров",
      value: "3 подряд",
    },
    {
      title: "Рабочий объём (куб.см)",
      value: "1.2л",
    },
    {
      title: "Максимальная мощность (л.с. при об/мин)",
      value: "180 км/ч (1.2л) 11,1 сек",
    },
    {
      title: "Максимальный крутящий момент (Нм при об/мин)",
      value: "190 при 2000-4000 rpm",
    },
    {
      title: "Тип передачи",
      value: "Автоматическая, 6-ступенчетая",
    },
  ];
  return (
    <>
      {isActive == "characteristic" ? (
        <div className="w-full mt-8 h-fit bg-[#fffffe] max-xl:overflow-y-scroll">
          <div className="max-xl:w-[1240px]">
            <div className="w-full h-14 bg-[#f5f5f5] py-4">
              <h1 className="text-center">Двигатель и трансмиссия</h1>
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
