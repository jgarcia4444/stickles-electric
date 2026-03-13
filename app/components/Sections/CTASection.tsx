import SectionHeader from "@/app/components/Texts/SectionHeader";
import CallNowButton from "@/app/components/CallNowButton";
import AnimateIn from "@/app/components/Animations/AnimateIn";

export default function CTASection() {
    return (
        <div className="py-4">
            <AnimateIn>
                <div className="w-full flex flex-col items-center rounded bg-white/40 p-4 gap-2">
                    <SectionHeader title="Need Electrical Work Done?" />
                    <AnimateIn delay={0.2}>
                        <p>Call today or request a quote to schedule your service.</p>
                    </AnimateIn>
                    <AnimateIn delay={0.4} direction="up" className="w-1/2 mx-auto">
                        <CallNowButton />
                    </AnimateIn>
                </div>
            </AnimateIn>
        </div>
    );
}