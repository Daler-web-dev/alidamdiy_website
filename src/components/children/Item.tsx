import Image from "next/image";
import Button from "./Button";
import { useState } from "react";
import Link from "next/link";

interface ItemProps {
	item?: {
		id?: string,
		name?: string,
		type?: string,
		price?: number,
		img?: string,
		desc?: string
	},
}

const Item: React.FC<ItemProps> = ({ item }: ItemProps) => {
	const [hide, setHide] = useState<boolean>(false);

	return (
		<Link
			href={'/123'}
			onMouseEnter={() => setHide(true)}
			onMouseLeave={() => setHide(false)}
			className="relative rounded-[15px] ease-in duration-100 hover:shadow-[0_0_15px_#00000050] bg-white"
		>
			<div className="px-[15px] py-2 text-[#474747]">
				<h3 className="text-xl font-bold leading-[190%] tracking-[-0.011em]">
					{
						item?.name || 'Chevrolet Lacetti'
					}
				</h3>
				<p className="leading-[190%] tracking-[-0.011em]">
					{
						item?.type || 'Хэтчбек'
					}
				</p>
			</div>
			<div className="">
				<Image
					className="w-full h-full object-cover"
					src={"/images/cars/lacetti.svg"}
					width={100}
					height={100}
					alt="car"
				/>
			</div>
			<div className="flex items-center justify-between px-[20px] pt-[15px] pb-[24px] border-t border-[#C6C6C6]">
				<div className="flex items-center gap-[6px]">
					<div className="w-[18px] h-[24px]">
						<Image
							className=""
							src={"/images/icons/seat.png"}
							width={100}
							height={100}
							alt="seat"
						/>
					</div>
					<p className="leading-[190%] tracking-[-0.011em] text-[#474747]">
						4 места
					</p>
				</div>
				<div className="">
					<p className="text-xl max-lg:text-base font-semibold leading-[190%] tracking-[-0.011em] text-[#FC0202]">
						{
							item?.price || 25
						}$/сутки
					</p>
				</div>
			</div>
			<div
				className={`bg-white w-full rounded-b-[15px] px-[20px] pb-[17px] absolute -bottom-36 left-0 z-10 shadow-[0_14px_15px_#00000050] ${hide ? "block" : "hidden"}`}
			>
				<div className="mb-[10px]">
					<ul>
						<li className=" leading-[190%] tracking-[-0.011em] text-[#474747]">
							·&ensp; Аренда на 24 часа
						</li>
						<li className=" leading-[190%] tracking-[-0.011em] text-[#474747]">
							·&ensp; Сопровождение водителя
						</li>
						<li className=" leading-[190%] tracking-[-0.011em] text-[#474747]">
							·&ensp; Чистый салон
						</li>
					</ul>
				</div>
				<div>
					<Button>Подробнее</Button>
				</div>
			</div>
		</Link>
	);
};

export default Item;
