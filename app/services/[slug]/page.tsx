import {PiLightning, PiBatteryCharging, PiPlug, PiLightbulb, PiMagnifyingGlass, PiToggleLeft} from "react-icons/pi";

import services from "@/app/data/services";

export default async function ServicePage({params}: {params: {slug: string}}) {
    const paramsData = await params;
    const service = services[paramsData.slug];
    console.log(service);
    const {title, description, icon} = service;
    const color = "#fff"

    const iconMap: Record<string, React.ReactNode> = {
        "LIGHTNING": <PiLightning color={color} />,
        "BATTERY": <PiBatteryCharging color={color} />,
        "PLUG": <PiPlug color={color} />,
        "LIGHTBULB": <PiLightbulb color={color} />,
        "SEARCH": <PiMagnifyingGlass color={color} />,
        "SWITCH": <PiToggleLeft color={color} />
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            <p className="text-lg mb-4">{description}</p>
            <p className="text-lg">{iconMap[icon]}</p>
        </div>
    );
}