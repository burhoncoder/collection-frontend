import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Title } from "ui/atoms";
import { CollectionCard } from "ui/moleculs";

export const LastCollection = () => {
	return (
		<div className="section-padding">
			<Title as="h3" text="Latest Collections" className="section-title" />

			<Swiper slidesPerView={5} spaceBetween={20}>
				<SwiperSlide>
					<CollectionCard author="Me" name="Watches" itemCount={2} />
				</SwiperSlide>

				<SwiperSlide>
					<CollectionCard author="Me" name="Watches" itemCount={2} />
				</SwiperSlide>
				<SwiperSlide>
					<CollectionCard author="Me" name="Watches" itemCount={2} />
				</SwiperSlide>

				<SwiperSlide>
					<CollectionCard author="Me" name="Watches" itemCount={12} />
				</SwiperSlide>

				<SwiperSlide>
					<CollectionCard author="Me" name="Watches" itemCount={14} />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};
