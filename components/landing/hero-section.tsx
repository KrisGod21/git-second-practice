"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Leaf, ArrowRight } from "lucide-react";
import Link from "next/link";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			duration: 0.6,
			staggerChildren: 0.2,
			delayChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: {
		opacity: 0,
		y: 30,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			ease: [0.6, -0.05, 0.01, 0.99] as const,
		},
	},
};

const buttonVariants = {
	hidden: {
		opacity: 0,
		y: 20,
		scale: 0.9,
	},
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.6,
			ease: [0.6, -0.05, 0.01, 0.99] as const,
		},
	},
};

export default function HeroSection() {
	return (
		<section className="relative overflow-hidden py-24 px-4 md:py-32">
			<div className="absolute inset-x-0 top-0 -z-10 flex h-full w-full items-center justify-center">
				<div className="h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
			</div>
			<motion.div
				className="relative z-10 container"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
			>
				<div className="mx-auto flex max-w-4xl flex-col items-center">
					<div className="flex flex-col items-center gap-6 text-center">
						<motion.div
							variants={itemVariants}
							className="flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground"
						>
							<Leaf className="h-4 w-4 text-primary" />
							A community-powered NGO
						</motion.div>
						<motion.div variants={itemVariants}>
							<h1 className="mb-6 text-5xl font-medium tracking-tight md:text-7xl">
								Growing communities, <br />
								<span className="text-primary">rooted in action</span>
							</h1>
							<p className="mx-auto max-w-2xl text-muted-foreground lg:text-xl">
								Vruksh brings volunteers and local communities together to
								run outreach programs, organize events, and drive change
								where it&apos;s needed most.
							</p>
						</motion.div>
						<motion.div variants={buttonVariants} className="mt-6 flex flex-wrap justify-center gap-3">
							<Button asChild size="lg">
								<Link href="/sign-up">
									Get Involved
									<ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</Button>
							<Button asChild size="lg" variant="outline">
								<Link href="/login">Volunteer Login</Link>
							</Button>
						</motion.div>
					</div>
				</div>
			</motion.div>
		</section>
	);
}
