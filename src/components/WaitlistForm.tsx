import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import RightArrowSvg from "/public/svg/RightArrowSvg";
import { Form, FormField, FormItem, FormControl } from "@/components/ui/Form";

const formSchema = z.object({
	email: z.string().email(),
});

export default function WaitlistForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	});

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		console.log(values);
		try {
			const response = await fetch("/api/mailingList", {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ mail: values.email }),
			});

			console.log("Response status:", response.status);
			console.log("Response ok:", response.ok);

			const data = await response.json();
			console.log("Response data:", data);

			if (response.ok) {
				console.log(data.message);
				setSubmitted(true);
			} else {
				setError(true);
				throw new Error(data.message || "An error occurred");
			}
		} catch (error) {
			console.error("Error:", error);
			setError(true);
		}
	};

	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);

	return (
		<>
			<div className="flex flex-col gap-6 items-center">
				{submitted ? (
					<p className="~text-base/xl">
						Thank you for your interest! We will notify you when we launch.
					</p>
				) : error ? (
					<p className="~text-base/xl text-red-500">
						An error occurred. Please try again later.
					</p>
				) : (
					<p className="~text-base/xl">
						if you&apos;d like to be notified of our launch, enter your email
						below
					</p>
				)}

				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className={`flex relative ${submitted ? "opacity-50" : ""}`}
					>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											type="email"
											placeholder="Enter your email here"
											className="relative"
											{...field}
											value={field.value || ""}
											disabled={submitted}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<Button
							type="submit"
							className="absolute right-0 top-1/2 -translate-y-1/2"
							disabled={submitted}
						>
							<RightArrowSvg />
						</Button>
					</form>
				</Form>
			</div>
		</>
	);
}
