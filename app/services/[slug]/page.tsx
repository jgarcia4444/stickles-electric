import {PiLightning, PiBatteryCharging, PiPlug, PiLightbulb, PiMagnifyingGlass, PiToggleLeft} from "react-icons/pi";

import services from "@/app/data/services";
import { ReactNode } from "react";

export default async function ServicePage({params}: {params: {slug: string}}) {
    const paramsData = await params;
    const service = services[paramsData.slug];
    console.log(service);
    const {title, description, briefDescription, reasons, icon} = service;
    const color = "#fff"
    const iconSize = 62;

    const iconMap: Record<string, React.ReactNode> = {
        "LIGHTNING": <PiLightning color={color} size={iconSize} />,
        "BATTERY": <PiBatteryCharging color={color} size={iconSize} />,
        "PLUG": <PiPlug color={color} size={iconSize} />,
        "LIGHTBULB": <PiLightbulb color={color} size={iconSize} />,
        "SEARCH": <PiMagnifyingGlass color={color} size={iconSize} />,
        "SWITCH": <PiToggleLeft color={color} size={iconSize} />
    };

    const renderReasons = (): ReactNode => {
        return reasons.map((reason, index) => {
            return (
                <div key={`${reason}-${index}`} className="w-1/2 py-2 bg-white/20 text-center rounded-full font-bold">
                    {reason}
                </div>
            )
        })
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-row flex-wrap items-end gap-4 justify-center w-full">
                <h1 className="text-3xl font-bold mb-4">{title}</h1>
                <p className="text-lg">{iconMap[icon]}</p>
            </div>
            <p className="text-lg mb-4">{description}</p>
            <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold">Reasons Why You Might Need This Service:</h2>
                {renderReasons()}
            </div>
        </div>
    );
}