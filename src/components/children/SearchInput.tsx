import axios from "axios";
import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { SearchResult } from "./SearchResult";
import Image from "next/image";
import Context from "../useTranslate";
import { ItranslateData } from "../Types/Types";

export interface IAppProps { }

const SearchInput: React.FC<IAppProps> = ({ }) => {
  const [value, setValue] = useState<string>('')
  const [result, setResult] = useState([])
  const [arr, setArr] = useState<any>()
  const [hide, setHide] = useState<boolean>(false)
  const translation = useContext<ItranslateData>(Context);
  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_URL}`)
      .then(res => setArr(res.data.cars.cars))
  }, [])

  const filterData = () => {
    setResult(arr?.filter((i: any) => {
      if (i.name.toLowerCase().includes(value.toLowerCase())) {
        return i;
      } else {
        setHide(true)
      }
    }))
  }
  return (
    <div>
      <div className="w-[80%] m-auto" onClick={(e) => e.stopPropagation()}>
        <div className="w-[100%] m-auto flex items-center justify-between bg-white rounded-lg px-3 p-3">
          <input
            type="text"
            className="w-[90%] h-full rounded-lg outline-none text-xl"
            value={value}
            onChange={e => setValue(e.target.value)}
            onKeyUp={filterData}
          />
          <button className="w-fit h-fit p-3 max-sm:p-2 rounded-md bg-[#E31E24]">
            <BiSearch color="white" size={15} />
          </button>
        </div>
        {
          value ? <div className="w-full flex flex-col max-sm:gap-3 bg-[#FFFFFF] px-3 py-3 mt-2 rounded-lg">
            {
              result.length > 0 ? result.map((i: any) => <SearchResult key={i.id} item={i} />) : hide ?
                <div className="mb-4">
                  <div className="w-full px-24 py-6 flex justify-center mt-4">
                    <Image
                      width={100}
                      height={100}
                      alt="search"
                      src="/images/search.png"
                    />
                  </div>
                  <h1 className="text-center text-xl">
                    {translation?.catalogPage.notFoundText}
                  </h1>
                </div>
                : null
            }
          </div> : null
        }
      </div>
    </div>
  );
}
export default SearchInput;