import React, { lazy } from "react";

import { IRoute } from "shared/interfaces/IRoute";

import { Auth, Layout } from "ui/template";

const Home = lazy(() => import("application/pages/Home/Home"));
const CollectionSingle = lazy(() => import("application/pages/Collection/CollectionSingle.tsx"));
const ItemSingle = lazy(() => import("application/pages/Item/ItemSingle.tsx"));
const MyCollections = lazy(() => import("application/pages/Collection/Collection.tsx"));
const Tags = lazy(() => import("application/pages/Tag/Tags"));

const Register = lazy(() => import("application/pages/Register/Register.tsx"));
const Login = lazy(() => import("application/pages/Login/Login.tsx"));

const User = lazy(() => import("application/pages/User/User"));

export const routes: IRoute[] = [
	{
		layout: <Layout />,
		path: "/",
		children: [
			{
				index: true,
				element: Home,
			},
			{
				path: "/collection",
				element: MyCollections,
			},
			{
				path: "/collection/:id",
				element: CollectionSingle,
			},
			{
				path: "/item/:id",
				element: ItemSingle,
			},
			{
				path: "/tag",
				element: Tags,
			},
			{
				path: "/rights",
				element: User,
			},
		],
	},
	{
		layout: <Auth />,
		path: "/",
		children: [
			{
				path: "/sign-up",
				element: Register,
			},
			{
				path: "/sign-in",
				element: Login,
			},
		],
	},
];
