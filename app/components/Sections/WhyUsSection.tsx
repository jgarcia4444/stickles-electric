import { ReactNode } from "react";
import SectionHeader from "../Texts/SectionHeader";
import AnimateIn from "../Animations/AnimateIn";
import StaggerChildren from "../Animations/StaggerChildren";

export default function WhyUsSection() {

    const reasons: string[] = ["Licensed and insured electricians", "Honest, upfront pricing", "Fast and reliable service", "Experienced troubleshooting", "Local knowledge of desert homes"];

    const reasonCard = (reason: string, index: number) : ReactNode => (
        <div key={index} className="bg-light-blue/20 shadow p-4 rounded-lg text-center">
            {reason}
        </div>
    );

    return (
        <div className="py-4">
            <AnimateIn>
                <SectionHeader title="Why Choose Us?" />
            </AnimateIn>
            <StaggerChildren staggerDelay={0.1} childDelay={0.2} direction="up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {reasons.map((reason, index) => reasonCard(reason, index))}
            </StaggerChildren>
        </div>
    );
}