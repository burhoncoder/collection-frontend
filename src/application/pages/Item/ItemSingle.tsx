import React from "react";

import { Icon, Tag, Title } from "ui/atoms";
import { Comment, ItemFields } from "ui/organisms";

import "./ItemSingle.scss";

const ItemSingle = () => {
	return (
		<div className="content-wrapper">
			<div className="container">
				<div className="section-heading">
					<div className="flex items-center">
						<Title as="h3" text="Item Single" className="section-title mr-5" />
						<button className="feedback-btn feedback-like_active mr-5">
							<Icon icon="like" />
						</button>
						<button className="feedback-btn feedback-dislike">
							<Icon icon="dislike" />
						</button>
					</div>

					<div className="mt-4 flex">
						<Tag name="Children" isActive={true} className="mr-4" />
						<Tag name="Music" className="mr-4" />
						<Tag name="Car" isActive={true} className="mr-4" />
						<Tag name="Car" isActive={true} className="mr-4" />
						<Tag name="Car" isActive={true} className="mr-4" />
						<Tag name="Car" isActive={true} className="mr-4" />
						<Tag name="Watch" />
					</div>
				</div>

				<ItemFields
					fields={[
						{
							name: "Field 1",
							value: "Field 1",
						},
						{
							name: "Field 1",
							value: "Field 1",
						},
						{
							name: "Field 1",
							value: "Field 1",
						},
						{
							name: "Field 1",
							value: "Field 1",
						},
					]}
				/>

				<div className="section-padding">
					<div className="section-heading">
						<Title as="h3" text="Comments" className="section-title" />
					</div>

					<Comment
						avatarSrc="https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2022/02/07162509/Best-electric-car-collage-22.jpg"
						username="Username"
						date="12.12.1212"
						text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores inventore iste modi nobis officia quis repudiandae suscipit voluptate! A architecto asperiores at beatae culpa, dolore eaque exercitationem fuga fugiat ipsam magni nobis, nulla odio odit perspiciatis quibusdam quisquam rerum soluta?"
					/>
				</div>
			</div>
		</div>
	);
};

export default ItemSingle;
