import SectionHeader from "@/app/components/Texts/SectionHeader";
import CallNowButton from "@/app/components/CallNowButton";

export default function CTASection() {
    return (
        <div className="py-4">
            <div className="w-full flex flex-col items-center rounded bg-white/40 p-4 gap-2">
                <SectionHeader title="Need Electrical Work Done?" />
                <p>Call today or request a quote to schedule your service.</p>
                <div className="w-1/2 mx-auto">
                    <CallNowButton />
                </div>
            </div>
        </div>
    );
}