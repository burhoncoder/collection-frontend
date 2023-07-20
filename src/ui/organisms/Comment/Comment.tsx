import React from "react";

import { Avatar, Icon, Text } from "ui/atoms";

import { CommentProps } from "./Comment.types.ts";

import "./Comment.scss";

export const Comment: React.FC<CommentProps> = ({ avatarSrc, text, username, date }) => {
	return (
		<div className="comment">
			<Avatar size="lg" src={avatarSrc} isRounded={true} />

			<div className="comment__info">
				<div className="mb-6 flex items-center">
					<Text
						as="p"
						text={username}
						weight="semi-bold"
						size="lg"
						className="comment__username"
					/>

					<div className="flex items-center">
						<Icon icon="calendar" />
						<Text
							as="span"
							text={date}
							weight="medium"
							size="xsm"
							className="comment__date"
						/>
					</div>
				</div>

				<Text as="p" text={text} weight="medium" className="comment__text" />
			</div>
		</div>
	);
};
