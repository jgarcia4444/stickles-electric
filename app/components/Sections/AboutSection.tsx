import SectionHeader from "../Texts/SectionHeader";
import Image from "next/image";
import AnimateIn from "../Animations/AnimateIn";

export default function AboutSection() {
    return (
        <div id="about" className="py-4">
            <AnimateIn>
                <SectionHeader title="About Us" />
            </AnimateIn>
            <div className="flex flex-row flex-wrap ">
                <AnimateIn delay={0.2} direction="left" className="text-lg w-full md:w-1/2">
                    <p>
                        Based in Palm Desert, we provide professional electrical services to homeowners and businesses across the Coachella Valley. Our goal is to deliver safe, reliable work and excellent customer service on every project.
                    </p>
                </AnimateIn>
                <AnimateIn delay={0.3} direction="right" className="w-full md:w-1/2 flex flex-row justify-center">
                    <Image src="/images/about.jpg" alt="About Us" width={400} height={400} className="rounded-full" />
                </AnimateIn>
            </div>
        </div>
    );
}