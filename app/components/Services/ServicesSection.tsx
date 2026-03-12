import {
  PiLightning,
  PiBatteryCharging,
  PiPlug,
  PiLightbulb,
  PiMagnifyingGlass,
  PiToggleLeft
} from "react-icons/pi"
import SectionHeader from "../Texts/SectionHeader";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {

    const iconSize = 48;

    const services = [
        {title: "Electrical Repairs", description: "Fast and reliable electrical repairs for homes and businesses across the Coachella Valley. We diagnose and fix wiring issues, faulty outlets, breaker problems, and other electrical concerns safely and efficiently.", icon: <PiLightning size={iconSize} />},
        {title: "Panel Upgrades", description: "Upgrade outdated electrical panels to safely handle modern power demands. We install new panels that improve safety, increase capacity, and support appliances, EV chargers, and home additions.", icon: <PiBatteryCharging size={iconSize} />},
        {title: "EV Charger Installation", description: "Conveniently charge your electric vehicle at home with a professionally installed EV charger. We install and configure charging stations to ensure safe, efficient operation for your vehicle.", icon: <PiPlug size={iconSize} />},
        {title: "Lighting Installation", description: "Enhance your home or property with professionally installed lighting. We install indoor, outdoor, security, and accent lighting to improve both functionality and appearance.", icon: <PiLightbulb size={iconSize} />},
        {title: "Troubleshooting & Diagnostics", description: "Experiencing flickering lights, tripped breakers, or electrical issues? Our troubleshooting service identifies the root cause of electrical problems so they can be fixed quickly and safely.", icon: <PiMagnifyingGlass size={iconSize} />},
        {title: "Outlet & Switch Installation", description: "Install new outlets and switches or replace outdated ones to improve safety and convenience. We ensure proper wiring and code-compliant installation for reliable everyday use.", icon: <PiToggleLeft size={iconSize} />},
    ];

    const renderServices = () => {
        return services.map((service, index) => {
            const {title, description, icon} = service;
            return <ServiceCard key={index} serviceInfo={{ title: title, description: description, icon: icon }} />;
        });
    }

    return (
        <div id="services" className="w-full flex flex-col py-4">
        <SectionHeader title="Electrical Services" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {renderServices()}
        </div>
        </div>
    );
}