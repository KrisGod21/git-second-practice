import HeroSection from "@/components/landing/hero-section";
import MissionSection from "@/components/landing/mission-section";
import ProgramsSection from "@/components/landing/programs-section";
import GetInvolvedSection from "@/components/landing/get-involved-section";

export default function Home() {
	return (
		<div className="flex flex-col items-center min-h-screen w-full">
			<HeroSection />
			<MissionSection />
			<ProgramsSection />
			<GetInvolvedSection />
		</div>
	);
}
