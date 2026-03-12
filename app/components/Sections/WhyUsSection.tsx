import SectionHeader from "../Texts/SectionHeader";

export default function WhyUsSection() {

    const reasons = ["Licensed and insured electricians", "Honest, upfront pricing", "Fast and reliable service", "Experienced troubleshooting", "Local knowledge of desert homes and electrical systems"];


    return (
        <div className="py-4">
            <SectionHeader title="Why Choose Us?" />
            <ul className="list-disc list-inside">
                {reasons.map((reason, index) => (
                    <li key={index}>{reason}</li>
                ))}
            </ul>
        </div>
    );
}