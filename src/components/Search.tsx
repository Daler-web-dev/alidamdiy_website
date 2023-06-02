import { Button, Slider } from "@mui/material";
import * as React from "react";
import { Controller, useForm } from "react-hook-form";

export interface ISearch {
  filteredData: any;
}

const Search: React.FC<ISearch> = ({ filteredData }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const submit = (data: any) => filteredData(data);
  return (
    <div className="container mx-auto px-24 max-xl:px-14 max-lg:px-5 mt-4">
      <form action="" onSubmit={handleSubmit(submit)}>
        <div className="w-full flex max-lg:flex-col max-xl:gap-5 items-center max-lg:items-start">
          <div className="max-lg:w-full flex items-center w-[60%] max-lg:items-start max-minSm:flex-col max-minSm:gap-3">
            <div className="w-[300px] h-[70px] border-[0.25px] border-[#000] rounded-tl-2xl rounded-bl-2xl flex flex-col px-3 py-2 gap-1 max-minSm:rounded-2xl max-380sm:w-full">
              <label className="max-sm:text-xs" htmlFor="car-name">
                МАРКА АВТО
              </label>
              <select
                id="car-name"
                className="max-sm:text-sm font-['MyFont'] outline-non bg-transparent"
                {...register("mark")}
              >
                <option value="Chevrolet Lacetti">Chevrolet Lacetti</option>
                <option value="Chevrolet Аveo">Chevrolet Аveo</option>
                <option value="Chevrolet Orlando">Chevrolet Orlando</option>
              </select>
            </div>
            <div className="w-[300px] h-[70px] border-[0.25px] border-[#000] rounded-br-2xl rounded-tr-2xl flex flex-col px-3 py-2 gap-1 max-minSm:rounded-2xl max-380sm:w-full">
              <label className="max-sm:text-xs" htmlFor="car-name">
                ТИП АВТО
              </label>
              <select
                id="car-name"
                className="max-sm:text-sm font-['MyFont'] outline-none bg-transparent"
                {...register("type")}
              >
                <option value="All">Все</option>
                <option value="Hatchback">Хэтчбэк</option>
                <option value="Minivan">Минивэн</option>
                <option value="Sedan">Седан</option>
              </select>
            </div>
          </div>
          <div className="max-lg:w-[82.5%] w-[40%] flex items-center gap-5 max-380sm:flex-col">
            <Controller
              control={control}
              name="range"
              render={({ field: { onChange, onBlur, value, name, ref } }) => (
                <Slider
					sx={{
                		"& .MuiSlider-thumb": {
                			color: "red",
                		},
                		"& .MuiSlider-track": {
                			color: "red",
                		},
                		"& .MuiSlider-rail": {
                			color: "#E6E0E9",
                		},
                		"& .MuiSlider-active": {
                			color: "red",
                		},
                	}}
                	{...register("range")}
                	value={value ?? 0}
                	onChange={onChange}
                  aria-label="Temperature"
                  defaultValue={30}
                  valueLabelDisplay="auto"
                  step={10}
                  marks
                  min={10}
                  max={100}
                />
              )}
            />
            <div>
              <Button
                variant="contained"
                className="w-64 max-sm:w-[184px] h-16 max-sm:h-11 rounded-2xl max-380sm:w-[250px] max-380sm:h-16
				ease-in duration-150 hover:shadow-[0_0_10px_#E31E24]"
                style={{
                  backgroundColor: "#FC0202",
                }}
                type="submit"
              >
                Поиск
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
