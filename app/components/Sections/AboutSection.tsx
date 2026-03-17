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
                        Based in Palm Desert, Gage Stickles provides professional electrical services to homeowners and businesses across the Coachella Valley. With a focus on safety, reliability, and quality workmanship, every project is handled with attention to detail and a commitment to getting the job done right the first time.
                        <br />
                        <br />
                        Whether it’s a small repair or a full electrical upgrade, Gage takes pride in delivering dependable service and clear communication from start to finish. The goal is simple: provide honest work, build long-term relationships, and be the electrician customers can trust whenever they need help.
                    </p>
                </AnimateIn>
                <AnimateIn delay={0.3} direction="right" className="w-full md:w-1/2 flex flex-row justify-center">
                    <Image src="/images/about.jpg" alt="About Us" width={400} height={400} className="rounded-full" />
                </AnimateIn>
            </div>
        </div>
    );
}