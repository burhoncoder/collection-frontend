import React from "react";

import { Types, useList } from "core/User";

import { Title } from "ui/atoms";
import { Table } from "ui/organisms/Table";

const User = () => {
	const list = useList();

	return (
		<div className="container py-10">
			<div className="section-heading">
				<Title as="h3" text="User" className="section-title" />
			</div>

			<Table<Types.Entity.IUser>
				rowKey="id"
				items={list.data}
				isLoading={list.isFetching}
				columns={[
					{
						title: "ID",
						dataKey: "id",
						render: ({ id }) => id,
					},
					{
						title: "Name",
						dataKey: "username",
						render: ({ username }) => username,
					},
					{
						title: "Email",
						dataKey: "email",
						render: ({ email }) => email,
					},
					{
						title: "Role",
						dataKey: "role",
						render: ({ role }) => role,
					},
				]}
			/>
		</div>
	);
};

export default User;
