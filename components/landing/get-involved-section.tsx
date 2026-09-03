import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function GetInvolvedSection() {
	return (
		<section className="w-full py-20 px-4">
			<div className="container mx-auto max-w-3xl text-center">
				<h2 className="mb-4 text-3xl font-medium tracking-tight md:text-4xl">
					Ready to get involved?
				</h2>
				<p className="mx-auto mb-8 max-w-xl text-muted-foreground lg:text-lg">
					Join Vruksh as a volunteer to sign up for programs, track your
					contributions, and stay in the loop on upcoming events.
				</p>
				<div className="flex flex-wrap justify-center gap-3">
					<Button asChild size="lg">
						<Link href="/sign-up">
							Become a Volunteer
							<ArrowRight className="ml-2 h-4 w-4" />
						</Link>
					</Button>
					<Button asChild size="lg" variant="outline">
						<Link href="/login">Already a member? Log in</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
