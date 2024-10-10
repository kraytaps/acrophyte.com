import * as React from "react";
// import RightArrowSvg from "/public/svg/RightArrowSvg";

import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		return (
			<div className="flex relative flex-row items-center">
				<input
					type={type}
					className={cn(
						"flex p-6 pr-20 h-10 ~text-base/lg bg-opacity-[5%] gap-4 rounded-md border-input bg-white-0 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-grey-1 placeholder:text-opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-grey-1 focus-visible:ring-opacity-50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
						className
					)}
					ref={ref}
					{...props}
				/>
				{/* <RightArrowSvg className="absolute right-6 top-1/2 -translate-y-1/2" /> */}
			</div>
		);
	}
);
Input.displayName = "Input";

export { Input };
