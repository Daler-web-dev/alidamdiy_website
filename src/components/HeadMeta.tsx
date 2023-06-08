import Head from 'next/head';
import * as React from 'react';

export interface IHeadMeta {
    title: string;
}

const HeadMeta: React.FC<IHeadMeta> = ({ title }) => {
  return (
    <Head>
            <title>{title}</title>
            <meta
                name="keywords"
                content="Аренда автомобилей, Аренда автомобилей Самарканд, арендовать авто, арендовать машину Самарканд"
            />
            <meta
                name="description"
                content="Онлайн аренда автомобилей【 alidamdiyindustry.com 】- Аренда любых автомобилей в городе Самарканд. Система онлайн-бронирования позволяет быстро и удобно забронировать автомобиль, а профессиональные менеджеры сайта всегда готовы помочь в решении любых вопросов."
            />
            <meta
                property="og:title"
                content="Alidamdiyindustry.com — онлайн-аренда автомобилей в Самарканде | Арендовать машину онлайн в Самарканде."
            />
            <link rel="icon" type="image/svg" href="images/logo2.svg" />
        </Head>
  );
}

export default HeadMeta;