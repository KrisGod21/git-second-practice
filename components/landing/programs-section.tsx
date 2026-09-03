import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarHeart, Megaphone, GraduationCap } from "lucide-react";

const programs = [
	{
		icon: CalendarHeart,
		title: "Volunteer Drives",
		description:
			"Regular hands-on events where volunteers sign up, show up, and get things done together.",
	},
	{
		icon: Megaphone,
		title: "Community Outreach",
		description:
			"Door-to-door and on-ground campaigns that connect our programs with the people who need them.",
	},
	{
		icon: GraduationCap,
		title: "Education Initiatives",
		description:
			"Workshops and sessions that build local skills and awareness for lasting, independent impact.",
	},
];

export default function ProgramsSection() {
	return (
		<section className="w-full py-16 px-4 bg-card/50 border-y">
			<div className="container mx-auto max-w-5xl">
				<div className="mx-auto mb-12 max-w-2xl text-center">
					<h2 className="mb-4 text-3xl font-medium tracking-tight md:text-4xl">
						What we do
					</h2>
					<p className="text-muted-foreground lg:text-lg">
						Every program starts with volunteers willing to give their time.
						Here&apos;s where we focus that energy.
					</p>
				</div>
				<div className="grid gap-6 sm:grid-cols-3">
					{programs.map(({ icon: Icon, title, description }) => (
						<Card key={title} className="bg-background">
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
