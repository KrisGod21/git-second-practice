import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Sprout, HeartHandshake } from "lucide-react";

const pillars = [
	{
		icon: Users,
		title: "Community",
		description:
			"We bring volunteers, local leaders, and residents together to identify what their neighborhoods need most.",
	},
	{
		icon: Sprout,
		title: "Environment",
		description:
			"From clean-up drives to tree planting, our programs help restore and protect the spaces we share.",
	},
	{
		icon: HeartHandshake,
		title: "Impact",
		description:
			"Every event and initiative is tracked so our volunteers can see the real difference their time makes.",
	},
];

export default function MissionSection() {
	return (
		<section className="w-full py-16 px-4">
			<div className="container mx-auto max-w-5xl">
				<div className="mx-auto mb-12 max-w-2xl text-center">
					<h2 className="mb-4 text-3xl font-medium tracking-tight md:text-4xl">
						Our mission
					</h2>
					<p className="text-muted-foreground lg:text-lg">
						Vruksh exists to make it easy for people to show up for their
						communities — organizing volunteers, coordinating programs, and
						turning good intentions into consistent action.
					</p>
				</div>
				<div className="grid gap-6 sm:grid-cols-3">
					{pillars.map(({ icon: Icon, title, description }) => (
						<Card key={title}>
							<CardHeader>
								<div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
									<Icon className="h-5 w-5 text-primary" />
								</div>
								<CardTitle className="text-lg">{title}</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-muted-foreground">{description}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
