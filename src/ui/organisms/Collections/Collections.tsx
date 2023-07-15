import React from "react";

import { Tag, Title } from "ui/atoms";
import { CollectionCard } from "ui/moleculs";

export const Collections = () => {
	return (
		<div className="section-padding">
			<Title as="h3" text="Collections" className="section-title" />
			<div className="-mt-4 mb-7 flex">
				<Tag name="Children" isActive={true} className="mr-4" />
				<Tag name="Music" className="mr-4" />
				<Tag name="Car" isActive={true} className="mr-4" />
				<Tag name="Car" isActive={true} className="mr-4" />
				<Tag name="Car" isActive={true} className="mr-4" />
				<Tag name="Car" isActive={true} className="mr-4" />
				<Tag name="Watch" />
			</div>

			<div className="grid grid-cols-10 gap-5">
				<div className="col-span-2">
					<CollectionCard author="Me" name="Watches" itemCount={2} />
				</div>

				<div className="col-span-2">
					<CollectionCard author="Me" name="Watches" itemCount={2} />
				</div>

				<div className="col-span-2">
					<CollectionCard author="Me" name="Watches" itemCount={2} />
				</div>

				<div className="col-span-2">
					<CollectionCard author="Me" name="Watches" itemCount={2} />
				</div>

				<div className="col-span-2">
					<CollectionCard author="Me" name="Watches" itemCount={2} />
				</div>

				<div className="col-span-2">
					<CollectionCard author="Me" name="Watches" itemCount={2} />
				</div>

				<div className="col-span-2">
					<CollectionCard author="Me" name="Watches" itemCount={2} />
				</div>

				<div className="col-span-2">
					<CollectionCard author="Me" name="Watches" itemCount={2} />
				</div>

				<div className="col-span-2">
					<CollectionCard author="Me" name="Watches" itemCount={2} />
				</div>

				<div className="col-span-2">
					<CollectionCard author="Me" name="Watches" itemCount={2} />
				</div>

				<div className="col-span-2">
					<CollectionCard author="Me" name="Watches" itemCount={2} />
				</div>

				<div className="col-span-2">
					<CollectionCard author="Me" name="Watches" itemCount={2} />
				</div>
			</div>
		</div>
	);
};
