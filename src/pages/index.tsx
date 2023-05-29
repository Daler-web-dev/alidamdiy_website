import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	const arr = [
		{
			id: 1,
			title: 'Все'
		},
		{
			id: 2,
			title: 'Седаны'
		},
		{
			id: 3,
			title: 'Хетчбэки'
		},
		{
			id: 4,
			title: 'Минивэны'
		},
		{
			id: 5,
			title: 'Лимузины'
		},
		{
			id: 6,
			title: 'Пикапы'
		},
	]

	return (
		<>
			<section className='relative'>
				<div className="container mx-auto ppx-24 flex items-start justify-center mb-10">
					<div className="w-full h-[700px] absolute left-0 z-[-1] rounded-b-3xl overflow-hidden">
						<Image className='w-full h-full object-cover' src={'/images/car.png'} width={1000} height={1000} alt='car' />
					</div>
					<div className="w-full py-24 flex items-center justify-start">
						<div className="max-w-[623px] w-full px-[39px] py-[33px] rounded-[15px] backdrop-blur bg-[#ffffff99]">
							<div className="mb-3">
								<p className='text-xl font-semibold'>Арендуйте лучшие авто</p>
							</div>
							<div className="mb-3">
								<h2 className='text-6xl font-bold leading-[120%] tracking-[-0.011em]'>
									Откройте
									<span className='text-[#E31E24]'> мир Узбекистана </span>
									<span className='text-[#211F20]'>с нами!</span>
								</h2>
							</div>
							<div className="mb-7">
								<p className='leading-[190%] text-[#474747]'>
									Готовы отправиться в захватывающее приключение?
									Наша компания предлагает широкий выбор автомобилей
									для аренды, специально разработанных для путешествий!
								</p>
							</div>
							<div className="flex gap-5">
								<button className='font-medium px-6 py-2 rounded-[5px] bg-[#E31E24] text-white'>Сделать заказ</button>
								<button className='font-medium px-6 py-2 rounded-[5px] border border-[#E31E24]'>Подробнее</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className="container mx-auto ppx-24 mb-60">
					<div className="flex items-center gap-14 px-72 max-xl:px-40 max-lg:px-10 max-md:px-0">
						<div className="">
							<h2 className='text-5xl font-bold leading-[120%] tracking-[-0.011em] text-[#E31E24]'>Наши машины</h2>
						</div>
						<div className="">
							<p className='leading-[190%] tracking-[-0.011em] text-[#474747]'>Выбирайте всё что вам по вкусу, наш широкий ассортимент автомобилей всегда придётся вам по нраву!</p>
						</div>
					</div>
					<div className="">
						<div className="mt-12 flex items-center justify-center">
							<ul className='flex justify-between'>
								{
									arr.map((item: { id: number, title: string }) => {
										return (
											<li key={item.id} className='px-6 leading-[115%] tracking-[-0.011em] last:border-0 border-r border-[#000]'>
												<p className='py-2 px-[19px] rounded-[5px] ease-in duration-100 cursor-pointer hover:bg-[#BFBFBF]'>{item.title}</p>
											</li>
										)
									})
								}
							</ul>
						</div>
						<div className="">

						</div>
					</div>
				</div>
			</section>

			<section className='bg-[#1E1E1E] mb-[63px]'>
				<div className="relative -top-14 w-full overflow-hidden py-6">
					<div className="relative right-4 w-[110%] py-10 rotate-[-1.28deg] bg-[#E31E24]">
						<h2 className='text-center text-[64px] font-bold leading-[105%] tracking-[-0.011em] text-white'>Мы в цифрах</h2>
					</div>
				</div>

				<div className="container mx-auto px-24">
					<div className="flex items-center justify-between">
						<div className="flex flex-col items-center">
							<div className="p-8 border-b border-white">
								<h3 className='text-center text-8xl font-semibold text-[#E31E24]'>120+</h3>
							</div>
							<div className="p-3 text-white">
								<p className='text-center leading-[115%] tracking-[-0.011em]'>Доступное количество автомобилей</p>
							</div>
						</div>

						<div className="flex flex-col items-center">
							<div className="p-8 border-b border-white">
								<h3 className='text-center text-8xl font-semibold text-[#E31E24]'>1200+</h3>
							</div>
							<div className="text-center p-3 text-white">
								<p className='leading-[115%] tracking-[-0.011em]'>Арендовано автомобилей за 1 год</p>
							</div>
						</div>

						<div className="flex flex-col items-center">
							<div className="p-8 border-b border-white">
								<h3 className='text-center text-8xl font-semibold text-[#E31E24]'>23</h3>
							</div>
							<div className="p-3 text-white">
								<p className='text-center leading-[115%] tracking-[-0.011em]'>Количество контрагентов</p>
							</div>
						</div>
					</div>
					<div className="py-14">
						<p className='text-3xl leading-[190%] tracking-[-0.011em] text-[#E6E6E6]'>Готовы отправиться в захватывающее приключение? Наша компания предлагает широкий выбор автомобилей для аренды, специально  разработанных для путешествий!</p>
					</div>
				</div>
			</section>

			<section>
				<div className="container mx-auto ppx-24 mb-[30px]">
					<div className="flex">
						<div className="w-1/2">
							<h3 className='text-[64px] leading-[105%] tracking-[-0.011em] text-[#E31E24]'>Частые <br /> вопросы</h3>
						</div>
						<div className="w-1/2 flex flex-col gap-8">
							<div className="relative">
								<div className="absolute top-5 -left-10 w-6 h-6 rounded-full bg-[#E31E24]"></div>
								<h3 className='mb-3 text-[28px] font-bold leading-[115%] tracking-[-0.011em]'>В чем заключаются наши услуги?</h3>
								<p className='leading-[190%] tracking-[-0.011em] text-[#474747]'>Готовы отправиться в захватывающее приключение? Наша компания предлагает широкий выбор автомобилей для аренды, специально  разработанных для путешествий!</p>
							</div>
							<div className="relative">
								<div className="absolute top-5 -left-10 w-6 h-6 rounded-full bg-[#E31E24]"></div>
								<h3 className='mb-3 text-[28px] font-bold leading-[115%] tracking-[-0.011em]'>Как мы предоставляем аренду машины?</h3>
								<p className='leading-[190%] tracking-[-0.011em] text-[#474747]'>Всё очень просто! Заполните короткую форму и в течении 12 часов мы свами свяжемся для предоставления подробной информациии</p>
							</div>
						</div>
					</div>
					<div className="mt-[68px]">
						<p className='text-3xl leading-[190%] tracking-[-0.011em]'>Готовы отправиться в захватывающее приключение? Наша компания предлагает широкий выбор автомобилей для аренды, специально  разработанных для путешествий!</p>
					</div>
				</div>
			</section>

			<section className='relative'>
				<div className="overflow-hidden w-full h-[350px] z-[-1] absolute top-0 left-0 py-6">
					<div className="relative right-5 w-[110%] h-[300px] rotate-[-1.28deg] bg-[#E31E24]"></div>
				</div>
				<div className="container mx-auto ppx-24 flex items-center justify-between gap-20 mb-10">
					<div className="w-2/5">
						<div className="w-2/5 mb-3">
							<h3 className='text-[28px] font-bold leading-[115%] tracking-[-0.011em] text-[#EEEEEE]'>У вас остались ещё вопросы?</h3>
						</div>
						<div className="">
							<p className='text-xl leading-[190%] tracking-[-0.011em] text-[#FAFAFA]'>Оставьте заявку, и мы обязательно свяжемся чтобы помочь вам выбрать, то что вас интересует!</p>
						</div>
					</div>
					<div className="w-3/5 py-[66px] px-14 rounded-[15px] shadow-[0px_4px_16px_#00000040] bg-[#FAFAFA]">
						<h2 className='text-4xl font-bold leading-[115%] tracking-[-0.011em] mb-8'>Оставить заявку</h2>
						<div className="flex items-center gap-6">
							<input type="text" placeholder='Ваше имя' className='w-3/5 px-6 py-[14px] rounded-[5px] bg-[#D9D9D9]' />
							<input type="text" className='w-2/5 px-6 py-[14px] rounded-[5px] bg-[#D9D9D9]' />
						</div>
						<div className="mt-8 flex items-center justify-between">
							<div className="h-2/5">
								<button className='px-6 py-2 font-medium leading-[150%] tracking-[-0.011em] rounded-[5px] text-white bg-[#E31E24]'>Отправить</button>
							</div>
							<div className="w-3/4">
								<p className='text-[#6A6A6A]'>Нажимая кнопку «Отправить», я даю своё согласие на обработку и распространение персональных данных.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className="container mx-auto px-24">
					<div className="mb-6">
						<h2 className='text-[64px] font-bold leading-[105%] tracking-[-0.011em] text-[#E31E24]'>Наш офис</h2>
					</div>
					<div className="w-full">
						<div className='w-full h-[500px] rounded-[15px] overflow-hidden'>
							<iframe className='w-full h-full' src="https://yandex.uz/map-widget/v1/?ll=66.941788%2C39.659413&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgk3NzEyNzc5ODUSF0_Ku3piZWtpc3RvbiwgU2FtYXJxYW5kIgoNoPOFQhUbnh5C&sctx=ZAAAAAgCEAAaKAoSCW3jT1Q2IElAEQe0dAXbnkpAEhIJ5s%2B3BUt13D8RkkHuIkxRxD8iBgABAgMEBSgKOABA3lBIAWI6cmVsZXZfcmFua2luZ19oZWF2eV9yZWxldl9zZXJwX2Zvcm11bGE9MC42OmwzX2RjMTg5MjA3X2V4cGI7cmVsZXZfcmFua2luZ19oZWF2eV9yZWxldl93b3JsZF9mb3JtdWxhPTAuNzpsM19kYzE4OTIwN19leHBiOnJlbGV2X3JhbmtpbmdfaGVhdnlfcmVsZXZfbWFwc19mb3JtdWxhPTAuNjpsM19kYzE4OTIwN19leHBqAnV6nQHNzEw9oAEAqAEAvQH4HQUvwgEqlOSR%2FMQG1qSCw8wFtsnX2MgEmZWj3NsCqrvnqp4Fnaya%2F7oG05rFkZYE6gEA8gEA%2BAEAggIl0KHQsNC80LDRgNC60LDQvdC0INC%2B0LHQu9Cw0YHRgtC90LDRj4oCAJICBTEwMzM0mgIMZGVza3RvcC1tYXBz&sll=66.942032%2C39.661041&sspn=0.001092%2C0.000502&text=%D0%A1%D0%B0%D0%BC%D0%B0%D1%80%D0%BA%D0%B0%D0%BD%D0%B4%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D0%BD%D0%B0%D1%8F&z=16.96" width="560" height="400" frameBorder="1"></iframe>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
