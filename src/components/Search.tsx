import { Button, Slider } from "@mui/material";
import { useRouter } from "next/router";
import * as React from "react";
import { Controller, useForm } from "react-hook-form";

export interface ISearch {
  filteredData: any;
  text: string;
  typeOfCar: string;
}

const Search: React.FC<ISearch> = ({ filteredData, text, typeOfCar }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const submit = (data: any) => filteredData(data);
  const router = useRouter();
	const { locale } = router;
  return (
    <div className="container mx-auto px-24 max-xl:px-14 max-lg:px-5 mt-4">
      <form action="" onSubmit={handleSubmit(submit)}>
        <div className="w-full flex flex-wrap max-xl:gap-5 items-center justify-between">
          <div className="w-[300px] max-sm:w-full h-[70px] border-[0.25px] border-[#000] rounded-2xl rounded-tr-2xl flex flex-col px-3 py-2 gap-1 max-minSm:rounded-2xl max-380sm:w-full">
            <label className="max-sm:text-xs" htmlFor="car-name">
              {typeOfCar}
            </label>
            <select
              id="car-name"
              className="max-sm:text-sm font-['MyFont'] outline-none bg-transparent"
              {...register("type")}
            >
              <option value="All">{locale == 'ru' ? 'Все' : locale == 'uz' ? 'Hammasi': 'All'}</option>
              <option value="Hatchback">{locale == 'ru' ? 'Хэтчбек' : locale == 'uz' ? 'Xetchbek': 'Hatchback'}</option>
              <option value="Minivan">{locale == 'ru' ? 'Минивэн' : locale == 'uz' ? 'Mikroavtobus': 'Minivan'}</option>
              <option value="Sedan">{locale == 'ru' ? 'Седан' : locale == 'uz' ? 'Sedan': 'Sedan'}</option>
              <option value="Сrossover">{locale == 'ru' ? 'Кроссовер' : locale == 'uz' ? 'Krossover': 'Crossover'}</option>
              <option value="SUV">{locale == 'ru' ? 'Внедорожник' : locale == 'uz' ? 'SUV': 'SUV'}</option>
            </select>
          </div>
          <div className="flex max-sm:flex-col gap-20 max-xl:gap-10 max-sm:gap-5 items-center justify-between max-sm:items-end w-1/2 max-md:w-full">
            <div className="w-[95%]">
              <div className="flex items-center justify-between">
                <h1>От: 40$</h1>
                <h1>До: 500$</h1>
              </div>
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
                    step={5}
                    marks
                    min={40}
                    max={500}
                  />
                )}
              />
            </div>
            <div>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#FC0202",
                }}
                type="submit"
              >
                {text}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Search;