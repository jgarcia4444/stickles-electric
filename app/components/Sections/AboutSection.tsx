import SectionHeader from "../Texts/SectionHeader";
import Image from "next/image";

export default function AboutSection() {
    return (
        <div id="about" className="py-4">
            <SectionHeader title="About Us" />
            <div className="flex flex-row flex-wrap ">
                <p className="text-lg w-full md:w-1/2">
                    Based in Palm Desert, we provide professional electrical services to homeowners and businesses across the Coachella Valley. Our goal is to deliver safe, reliable work and excellent customer service on every project.
                </p>
                <div className="w-full md:w-1/2 flex flex-row justify-center">
                    <Image src="/images/about.jpg" alt="About Us" width={400} height={400} className="rounded-full" />
                </div>
            </div>
        </div>
    );
}