import SectionHeader from "@/app/components/Texts/SectionHeader";
import AnimateIn from "@/app/components/Animations/AnimateIn";

import Reviews from "../Reviews/Reviews";

export default function CustomerReviewsSection() {
    return (
        <div className="py-4">
            <AnimateIn>
                <SectionHeader title="What Our Customers Say" />
            </AnimateIn>
            <AnimateIn delay={0.2}>
                <Reviews />
            </AnimateIn>
        </div>
    );
}