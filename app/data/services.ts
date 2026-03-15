
interface Service {
    title: string;
    description: string;
    icon: string;
}

const services: Record<string, Service> = {
    "electrical-repairs": {
        title: "Electrical Repairs",
        description: "We offer a wide range of electrical repair services to keep your home and business running smoothly.",
        icon: "LIGHTNING"
    },
    'panel-upgrades': {
        title: 'Panel Upgrades',
        description: 'We offer a wide range of panel upgrade services to keep your home and business running smoothly.',
        icon: 'BATTERY'
    },
    "ev-charger-installation": {
        title: "EV Charger Installation",
        description: "We offer a wide range of EV charger installation services to keep your home and business running smoothly.",
        icon: "PLUG"
    },
    "lighting-installation": {
        title: "Lighting Installation",
        description: "We offer a wide range of lighting installation services to keep your home and business running smoothly.",
        icon: "LIGHTBULB"
    },
    "trouble-shooting-&-diagnostics": {
        title: "Trouble Shooting & Diagnostics",
        description: "We offer a wide range of trouble shooting and diagnostics services to keep your home and business running smoothly.",
        icon: "SEARCH"
    },
    "outlet-&-switch-installation": {
        title: "Outlet & Switch Installation",
        description: "We offer a wide range of outlet & switch installation services to keep your home and business running smoothly.",
        icon: "SWITCH"
    }
} 

export default services