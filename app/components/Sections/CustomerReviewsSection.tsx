import SectionHeader from "@/app/components/Texts/SectionHeader";

import Reviews from "../Reviews/Reviews";

export default function CustomerReviewsSection() {
    return (
        <div className="py-4">
            <SectionHeader title="What Our Customers Say" />
            <Reviews />
        </div>
    );
}