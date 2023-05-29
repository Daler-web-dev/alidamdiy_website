import { Button, Slider } from '@mui/material';
import * as React from 'react';
import { Controller, useForm } from 'react-hook-form';

export interface IAppProps {
}

export function Search (props: IAppProps) {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
      } = useForm();
      const submit = (data: any) => console.log(data);
  return (
    <div className="container mx-auto px-24 mt-4">
        <form action="" onSubmit={handleSubmit(submit)}>
        <div className="w-full flex items-center">
          <div className="flex items-center w-[60%]">
            <div className="w-[300px] h-[70px] border rounded-tl-2xl rounded-bl-2xl flex flex-col px-3 py-2 gap-1">
              <label htmlFor="car-name">МАРКА АВТО</label>
              <select
                id="car-name"
                className="font-['MyFont'] outline-none"
                {...register("mark")}
              >
                <option value="Chevrolet Lacetti">Chevrolet Lacetti</option>
                <option value="Chevrolet Аveo">Chevrolet Аveo</option>
                <option value="Chevrolet Orlando">Chevrolet Orlando</option>
              </select>
            </div>
            <div className="w-[300px] h-[70px] border rounded-br-2xl border-l-0 rounded-tr-2xl flex flex-col px-3 py-2 gap-1">
              <label htmlFor="car-name">ТИП АВТО</label>
              <select
                id="car-name"
                className="font-['MyFont'] outline-none"
                {...register("type")}
              >
                <option value="Все">Все</option>
                <option value="Хэтчбэк">Хэтчбэк</option>
                <option value="Минивэн">Минивэн</option>
                <option value="Седан">Седан</option>
              </select>
            </div>
          </div>
          <div className="w-[40%] flex items-center gap-3">
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
                  aria-label="Default"
                  valueLabelDisplay="auto"
                />
              )}
            />
            <div>
              <Button
                variant="contained"
                className="w-64 h-16 rounded-2xl"
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
}
