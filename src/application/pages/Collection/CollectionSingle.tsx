import React from "react";

import { Title } from "ui/atoms";
import { CollectionSlider } from "ui/moleculs";
import { ItemsGrid } from "ui/organisms";

const CollectionSingle = () => {
	return (
		<>
			<CollectionSlider
				imgSrc="https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2022/02/07162509/Best-electric-car-collage-22.jpg"
				itemCount={12}
				name="Vintage Cars"
			/>

			<div className="container">
				<div className="section-padding">
					<div className="section-heading">
						<Title as="h3" text="Description" className="section-title" />
					</div>
					<div className="description">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
							distinctio dolore eligendi enim incidunt minima nihil pariatur rem
							sapiente voluptatem!
						</p>
						<p>
							Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
							praesentium. ipsum dolor sit amet, consectetur adipisicing elit.
							Aspernatur distinctio dolore eligendi enim incidunt minima nihil
							pariatur rem sapiente voluptatem!
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
							distinctio dolore eligendi enim incidunt Lorem ipsum dolor sit amet,
							consectetur adipisicing elit. Error, quaerat, unde. Magni nesciunt saepe
							sequi? minima nihil pariatur rem sapiente voluptatem!
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
							distinctio dolore eligendi enim incidunt Lorem ipsum dolor sit amet,
							consectetur adipisicing elit. Error, quaerat, unde. Magni nesciunt saepe
							sequi? minima nihil pariatur rem sapiente voluptatem! Lorem ipsum dolor
							sit amet, consectetur adipisicing elit. Amet nihil quis vero.
						</p>
					</div>
				</div>

				<ItemsGrid
					items={[
						{
							name: "Watches",
							tags: [
								{
									name: "asdfasdf",
								},
							],
						},

						{
							name: "Watches",
							tags: [
								{
									name: "asdfasdsf",
								},
								{
									name: "asdf123asdf",
								},
								{
									name: "123asc",
								},
								{
									name: "asdfasdf",
								},
								{
									name: "asdfxxasdf",
								},
							],
						},

						{
							name: "Watches",
							tags: [
								{
									name: "11",
								},
								{
									name: "asdfasdf",
								},
								{
									name: "asd",
								},
								{
									name: "asdfasdf",
								},
								{
									name: "asdfasdf",
								},
								{
									name: "sd",
								},
							],
						},

						{
							name: "Watches",
							tags: [
								{
									name: "123sdd",
								},
								{
									name: "asdfa!!sdf",
								},
								{
									name: "s",
								},
								{
									name: "ss",
								},
								{
									name: "ss",
								},
							],
						},
					]}
				/>
			</div>
		</>
	);
};

export default CollectionSingle;
