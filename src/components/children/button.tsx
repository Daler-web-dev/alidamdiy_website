import { useEffect, useRef } from "react";

interface ButtonProps {
  children: string | string[];
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <>
      <button className="font-medium leading-[150%] tracking-[-0.011em] px-6 max-lg:px-4 py-2 rounded-[5px] ease-in duration-150 hover:shadow-[0_0_10px_#E31E24] bg-[#E31E24] text-white">
        {children}
      </button>
    </>
  );
};

export default Button;
