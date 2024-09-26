import React from "react";

type RightArrowSvgProps = {
	svgColor?: string;
};

export default function RightArrowSvg({ svgColor }: RightArrowSvgProps) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={`${svgColor}`}
		>
			<path
				d="M17.71 11.29L13.71 7.29C13.6168 7.19676 13.5061 7.1228 13.3842 7.07234C13.2624 7.02188 13.1319 6.99591 13 6.99591C12.8681 6.99591 12.7376 7.02188 12.6158 7.07234C12.4939 7.1228 12.3832 7.19676 12.29 7.29C12.1968 7.38324 12.1228 7.49393 12.0723 7.61575C12.0219 7.73757 11.9959 7.86814 11.9959 8C11.9959 8.13186 12.0219 8.26243 12.0723 8.38425C12.1228 8.50607 12.1968 8.61676 12.29 8.71L14.59 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H14.59L12.29 15.29C12.1963 15.383 12.1219 15.4936 12.0711 15.6154C12.0203 15.7373 11.9942 15.868 11.9942 16C11.9942 16.132 12.0203 16.2627 12.0711 16.3846C12.1219 16.5064 12.1963 16.617 12.29 16.71C12.383 16.8037 12.4936 16.8781 12.6154 16.9289C12.7373 16.9797 12.868 17.0058 13 17.0058C13.132 17.0058 13.2627 16.9797 13.3846 16.9289C13.5064 16.8781 13.617 16.8037 13.71 16.71L17.71 12.71C17.801 12.6149 17.8724 12.5028 17.92 12.38C18.02 12.1365 18.02 11.8635 17.92 11.62C17.8724 11.4972 17.801 11.3851 17.71 11.29ZM21 4C20.7348 4 20.4804 4.10536 20.2929 4.29289C20.1054 4.48043 20 4.73478 20 5V19C20 19.2652 20.1054 19.5196 20.2929 19.7071C20.4804 19.8946 20.7348 20 21 20C21.2652 20 21.5196 19.8946 21.7071 19.7071C21.8946 19.5196 22 19.2652 22 19V5C22 4.73478 21.8946 4.48043 21.7071 4.29289C21.5196 4.10536 21.2652 4 21 4Z"
				fill="currentColor"
			/>
		</svg>
	);
}
