import Image from "next/image";
import Link from "next/link";

import { BiSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "./children/Button";

interface HeaderProps { }

const Header: React.FC<HeaderProps> = ({ }) => {

	return (
		<header className="w-full bg-[#BBBBBB]">
			<div className="container mx-auto px-24 max-xl:px-14 max-lg:px-5 py-7 max-md:py-5 max-sm:py-4 flex items-center justify-between bg-[#BBBBBB]">
				<div className="max-xl:hidden block">
					<Link href={"/"}>
						<Image
							src={"/images/logo.png"}
							width={170}
							height={45}
							alt="logo"
						/>
					</Link>
				</div>
				<div className="flex gap-5 max-sm:gap-2">
					<button className="p-3 max-sm:p-2 rounded-md bg-[#E31E24]">
						<BiSearch color="white" size={15} />
					</button>
					<button className="max-md:block hidden p-3 max-sm:p-2 rounded-md bg-[#E31E24]">
						<GiHamburgerMenu color="white" size={15} />
					</button>
				</div>
				<div className="flex items-center max-md:absolute left-0 -top-full">
					<div className="max-xl:block hidden mr-10 max-lg:mr-5">
						<h1 className="font-bold max-lg:text-sm text-[#E31E24]">+998 91 123 32 33</h1>
					</div>
					<div className="flex flex-col items-center gap-3">
						<div className="max-xl:block hidden">
							<Link href={"/"}>
								<Image
									src={"/images/logo.png"}
									width={170}
									height={45}
									alt="logo"
								/>
							</Link>
						</div>
						<nav>
							<ul className="flex gap-8 max-lg:gap-3">
								<li className="font-medium max-lg:text-sm text-[#474747]">
									<Link href={"/catalog"}>Каталог</Link>
								</li>
								<li className="font-medium max-lg:text-sm text-[#474747]">
									<Link href={"#"}>Водителям</Link>
								</li>
								<li className="font-medium max-lg:text-sm text-[#474747]">
									<Link href={"#"}>О компании</Link>
								</li>
							</ul>
						</nav>
					</div>
					<div className="max-xl:hidden block ml-10">
						<h1 className="font-bold text-[#E31E24]">+998 91 123 32 33</h1>
					</div>
				</div>
				<div className="max-md:block hidden">
					<Link href={"/"}>
						<Image
							src={"/images/logo.png"}
							width={132}
							height={35}
							alt="logo"
						/>
					</Link>
				</div>
				<div className="">
					<select className="font-medium uppercase bg-transparent">
						<option>ru</option>
						<option>uz</option>
					</select>
				</div>
				<div className="max-md:hidden">
					<Button>Сделать заказ</Button>
				</div>
			</div>
		</header>
	);
};

export default Header;
