import * as React from "react";
import { BiSearch } from "react-icons/bi";

export interface IAppProps { }

export function SearchInput(props: IAppProps) {
  const [value, setValue] = React.useState<string>()

  return (
    <div>
      <div className="w-[80%] m-auto" onClick={(e) => e.stopPropagation()}>
        <div className="w-[100%] m-auto flex items-center justify-between bg-white rounded-lg px-3 p-3">
          <input
            type="text"
            className="w-[90%] h-full rounded-lg outline-none text-xl"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button className="w-fit h-fit p-3 max-sm:p-2 rounded-md bg-[#E31E24]">
            <BiSearch color="white" size={15} />
          </button>
        </div>
        {/* <p className='text-white'>Microphone: {listening ? 'on' : 'off'}</p>
       <p className='text-white'>{value}</p> */}
      </div>
    </div>
  );
}
