import Image from "next/image";

import TrustBadges from "./components/Badges/TrustBadges";
import CallNowButton from "./components/CallNowButton";
import ServicesSection from "./components/Sections/ServicesSection";
import WhyUsSection from "@/app/components/Sections/WhyUsSection";
import ServiceAreaSection from "@/app/components/Sections/ServiceAreaSection";
import AboutSection from "@/app/components/Sections/AboutSection";
import CTASection from "@/app/components/Sections/CTASection";
import CustomerReviewsSection from "@/app/components/Sections/CustomerReviewsSection";
import ContactSection from "@/app/components/Sections/ContactSection";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-6">
      <main id="home" className="flex flex-row w-full h-screen">
        <div className="w-3/5 flex flex-col px-2 gap-4 py-4 items-start justify-center">
          <h1 className="text-5xl font-bold text-light-blue">Trusted Electrician Serving the Coachella Valley</h1>
          <div className="w-full rounded-full h-1 bg-linear-to-l to-white from-primary-blue" />
          <h2 className="text-lg text-left text-white font-thin">Reliable electrical services across Palm Springs, Palm Desert, Indio, La Quinta, Rancho Mirage and surrounding communities.</h2>
          <div className="w-1/2">
            <CallNowButton />
          </div>
          <div className="w-full">
            <TrustBadges />
          </div>
        </div>
        <div className="w-2/5 px-2 flex flex-col items-center justify-center">
          <Image className="mx-auto rounded w-auto h-auto" src="/images/work-truck.jpeg" alt="Work Truck" width={500} height={500} />
        </div>
      </main>
      <ServicesSection />
      <WhyUsSection />
      <CustomerReviewsSection />
      <ServiceAreaSection />
      <AboutSection />
      <CTASection />
      <ContactSection />
    </div>
  );
}
