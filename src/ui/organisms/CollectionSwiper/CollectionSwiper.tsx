import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { CollectionSlider } from "ui/moleculs";

import { CollectionSwiperProps } from "./CollectionSwiper.types.ts";

export const CollectionSwiper: React.FC<CollectionSwiperProps> = ({ collections }) => {
	return (
		<Swiper slidesPerView={1} spaceBetween={30}>
			{collections.map((collection, idx) => (
				<SwiperSlide key={idx}>
					<CollectionSlider
						imgSrc={collection.imgSrc}
						itemCount={collection.itemCount}
						name={collection.name}
						link={collection.link}
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
