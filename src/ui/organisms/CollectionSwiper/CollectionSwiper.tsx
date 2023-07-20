import React, { MouseEvent, useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

import { Icon } from "ui/atoms";
import { CollectionSlider } from "ui/moleculs";

import { CollectionSwiperProps } from "./CollectionSwiper.types.ts";

import "./CollectionSwiper.scss";

export const CollectionSwiper: React.FC<CollectionSwiperProps> = ({ collections }) => {
	const swiper = useRef<SwiperRef>(null);

	const slideNext = (_: MouseEvent<HTMLButtonElement>) => {
		if (swiper.current) swiper.current.swiper.slideNext();
	};

	const slidePrev = (_: MouseEvent<HTMLButtonElement>) => {
		if (swiper.current) swiper.current.swiper.slidePrev();
	};

	return (
		<Swiper ref={swiper} slidesPerView={1} spaceBetween={30} modules={[Navigation]}>
			{collections.map((collection, idx) => (
				<SwiperSlide key={idx}>
					<CollectionSlider
						imgSrc={collection.imgSrc}
						itemCount={collection.itemCount}
						name={collection.name}
						link={collection.link}
					></CollectionSlider>
				</SwiperSlide>
			))}
			<button className="slider-arrow slider-arrow__prev" onClick={slidePrev}>
				<Icon icon="arrow-left" />
			</button>
			<button className="slider-arrow slider-arrow__next" onClick={slideNext}>
				<Icon icon="arrow-right" />
			</button>
		</Swiper>
	);
};
