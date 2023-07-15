import React from "react";

import { Collections, CollectionSwiper, LastCollection } from "ui/organisms";

const Home = () => {
	return (
		<>
			<CollectionSwiper
				collections={[
					{
						imgSrc: "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2022/02/07162509/Best-electric-car-collage-22.jpg",
						name: "Vintage Cars of 20th",
						itemCount: 12,
						link: "/collection/1",
					},
					{
						imgSrc: "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2022/02/07162509/Best-electric-car-collage-22.jpg",
						name: "Vintage Cars of 20th",
						itemCount: 12,
						link: "/collection/1",
					},
					{
						imgSrc: "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2022/02/07162509/Best-electric-car-collage-22.jpg",
						name: "Vintage Cars of 20th",
						itemCount: 12,
						link: "/collection/1",
					},
					{
						imgSrc: "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2022/02/07162509/Best-electric-car-collage-22.jpg",
						name: "Vintage Cars of 20th",
						itemCount: 12,
						link: "/collection/1",
					},
				]}
			/>

			<div className="container">
				<LastCollection />

				<Collections />
			</div>
		</>
	);
};
export default Home;
