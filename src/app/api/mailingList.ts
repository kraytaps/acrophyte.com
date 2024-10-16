import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
	try {
		const { mail } = await req.json();

		const response = await fetch(
			"https://api.sendgrid.com/v3/marketing/contacts",
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${process.env.SENDGRID_SECRET}`,
				},
				body: JSON.stringify({
					contacts: [{ email: mail }],
					list_ids: [process.env.SENDGRID_MAILING_ID],
				}),
			}
		);

		if (!response.ok) {
			throw new Error("Failed to add email to mailing list");
		}

		return NextResponse.json(
			{
				message:
					"Your email has been successfully added to the mailing list. Welcome 👋",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error adding email to mailing list:", error);
		return NextResponse.json(
			{
				message:
					"Oops, there was a problem with your subscription, please try again or contact us",
			},
			{ status: 500 }
		);
	}
}
