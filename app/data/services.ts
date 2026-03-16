
interface Service {
    title: string;
    briefDescription: string;
    description: string;
    reasons: string[];
    icon: string;
}

const services: Record<string, Service> = {
    "electrical-repairs": {
        title: "Electrical Repairs",
        briefDescription: "We offer a wide range of electrical repair services to keep your home and business running smoothly.",
        description:"Electrical problems can range from minor inconveniences to serious safety hazards. Our electrical repair services help homeowners and businesses quickly resolve issues such as faulty wiring, malfunctioning outlets, tripped breakers, and power interruptions. We carefully diagnose the problem, identify the underlying cause, and make reliable repairs to restore safe and consistent electrical performance. Serving homes across the Coachella Valley, we focus on providing fast, professional repairs that ensure your electrical system continues operating safely and efficiently. Whether it's a single outlet not working or a more complex wiring issue, our goal is to solve the problem correctly the first time.",
        reasons: ["Lights flicker or dim unexpectedly", "Circuit breakers trip frequently", "Outlets or switches stop working", "Burning smells near outlets or electrical panels", "Appliances lose power intermittently", "You hear buzzing or crackling sounds from outlets"],
        icon: "LIGHTNING"
    },
    'panel-upgrades': {
        title: 'Panel Upgrades',
        briefDescription: 'We offer a wide range of panel upgrade services to keep your home and business running smoothly.',
        description: 'Your electrical panel is the heart of your home’s electrical system. Older panels may struggle to support modern electrical demands from appliances, HVAC systems, home offices, and electric vehicles. Upgrading your electrical panel improves safety, increases capacity, and ensures your home can handle today’s energy needs. We install modern electrical panels designed to safely distribute power throughout your home. A panel upgrade can also prepare your home for future additions such as EV chargers, solar systems, or new appliances. Our installations follow current electrical codes and ensure your home’s power system operates safely and reliably.',
        reasons: ['Your home still has an outdated fuse box', 'Breakers trip frequently when appliances run', 'You are installing an EV charger', 'Your panel is more than 25–30 years old', 'You are adding new appliances or remodeling your home', 'Your electrical panel feels warm or shows signs of wear'],
        icon: 'BATTERY'
    },
    "ev-charger-installation": {
        title: "EV Charger Installation",
        briefDescription: "We offer a wide range of EV charger installation services to keep your home and business running smoothly.",
        description: "As electric vehicles become more common, many homeowners are choosing to install EV chargers at home for convenience and efficiency. A professionally installed charging station allows you to charge your vehicle safely overnight and eliminates the need to rely on public charging stations. We install EV chargers compatible with a wide range of electric vehicles and ensure the electrical system can support the added power demand. Our installations include proper wiring, circuit protection, and safe mounting so your charging station operates efficiently and reliably for years to come.",
        reasons: ["You recently purchased or plan to purchase an electric vehicle", "You want faster charging than a standard outlet provides", "You want the convenience of charging at home", "Your current electrical system needs upgrading to support EV charging", "You want to increase your home’s long-term value"],
        icon: "PLUG"
    },
    "lighting-installation": {
        title: "Lighting Installation",
        briefDescription: "We offer a wide range of lighting installation services to keep your home and business running smoothly.",
        icon: "LIGHTBULB"
    },
    "trouble-shooting-&-diagnostics": {
        title: "Trouble Shooting & Diagnostics",
        briefDescription: "We offer a wide range of trouble shooting and diagnostics services to keep your home and business running smoothly.",
        icon: "SEARCH"
    },
    "outlet-&-switch-installation": {
        title: "Outlet & Switch Installation",
        briefDescription: "We offer a wide range of outlet & switch installation services to keep your home and business running smoothly.",
        icon: "SWITCH"
    }
} 

export default services