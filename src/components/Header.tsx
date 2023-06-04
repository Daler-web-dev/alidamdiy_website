import Image from "next/image";
import Link from "next/link";

import { BiSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
// import Button from "./children/Button";
import { useRouter } from "next/router";
import uz from "@/languages/uzb/uz";
import ru from "@/languages/ru/ru";
import eng from "@/languages/eng/eng";
import Context from "./useTranslate";
import { ItranslateData } from "./Types/Types";
import { useContext } from "react";
// import Button from "@/components/children/Button";
import Button from "../components/children/button"

interface HeaderProps { }

const Header: React.FC<HeaderProps> = ({ }) => {
	const router = useRouter();
	const { locale } = router;

	const changeLang = (e: any) => {
		const locale = e.target.value;

		router.push("/", "/", { locale });
	};
	const translation = useContext<ItranslateData>(Context)

	return (
		<header className="w-full bg-[#BBBBBB]">
			<div className="container mx-auto px-24 max-xl:px-14 max-lg:px-5 py-7 max-md:py-5 max-sm:py-4 flex items-center justify-between bg-[#BBBBBB]">
				<div className="flex items-center gap-10 max-xl:gap-5">
					<div className="max-lg:hidden block w-[170px] max-2xl:w-[150px] max-xl:w-[120px]">
						<Link href={"/"}>
							<Image
								src={"/images/logo.png"}
								width={1000}
								height={1000}
								alt="logo"
							/>
						</Link>
					</div>
					<div className="flex gap-5 max-sm:gap-2">
						<button className="w-fit h-fit p-3 max-sm:p-2 rounded-md bg-[#E31E24]">
							<BiSearch color="white" size={15} />
						</button>
					</div>
				</div>

				<div className="w-[170px] max-lg:block hidden">
					<Link href={"/"}>
						<Image
							src={"/images/logo.png"}
							width={1000}
							height={1000}
							alt="logo"
						/>
					</Link>
				</div>
				<div className="w-full max-lg:absolute max-lg:right-full flex justify-between items-center">
					<div className="flex flex-1 items-center justify-center">
						<nav>
							<ul className="flex max-lg:flex-col gap-7 max-2xl:gap-5 max-lg:gap-3">
								<li className="font-medium text-[#474747]">
									<Link href={"/catalog"}>{translation.header.catalog}</Link>
								</li>
								<li className="font-medium text-[#474747]">
									<Link href={"#"}>{translation?.header?.drivers}</Link>
								</li>
								<li className="font-medium text-[#474747]">
									<Link href={"#"}>{translation?.header?.company}</Link>
								</li>
							</ul>
						</nav>
					</div>
					<div className="flex items-center justify-end gap-10 max-2xl:gap-5">
						<div className="">
							<select
								className="font-medium uppercase bg-transparent"
								name="lang"
								value={locale}
								onChange={(e) => changeLang(e)}
								defaultValue={locale}
							>
								<option value="ru">🇷🇺 Ru</option>
								<option value="uz">🇺🇿 Uz</option>
								<option value="en">🇬🇧 En</option>
							</select>
						</div>
						<div className="">
							<Button>{translation?.header?.orderBtn}</Button>
						</div>
					</div>
				</div>
				<div className="max-lg:block hidden">
					<button className="p-3 max-sm:p-2 rounded-md bg-[#E31E24]">
						<GiHamburgerMenu color="white" size={15} />
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
