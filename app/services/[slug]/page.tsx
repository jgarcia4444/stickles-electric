import {PiLightning, PiBatteryCharging, PiPlug, PiLightbulb, PiMagnifyingGlass, PiToggleLeft} from "react-icons/pi";
import { ReactNode } from "react";

import services from "@/app/data/services";
import AnimateIn from "@/app/components/Animations/AnimateIn";
import CallNowButton from "@/app/components/CallNowButton";

export async function generateMetadata({params}: {params: {slug: string}}) {
    const paramsData = await params;
    console.log("paramsData", paramsData);
    const service = services[paramsData.slug]
    console.log("service", service);
    const {title, briefDescription, keywords} = service;
  return {
    title: `${title} | Coachella Valley Electrician`,
    description: briefDescription,
    keywords: keywords,
  };
}

export default async function ServicePage({params}: {params: {slug: string}}) {
    const paramsData = await params;
    const service = services[paramsData.slug];
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
                <div key={`${reason}-${index}`} className="px-6 py-1 bg-white/20 text-center rounded-full font-bold mb-2 hover:scale-105 hover:bg-white-50 transition-all duration-300">
                    {reason}
                </div>
            )
        })
    }

    return (
        <div className="mx-auto px-4 py-8 w-full h-auto flex flex-col items-center justify-center gap-4">
            <div className="flex flex-row items-end gap-4 mt-8">
                    <h1 className="text-4xl font-bold mb-4">{title}</h1>
                    <p className="text-lg">{iconMap[icon]}</p>
            </div>
            <p className="text-lg mb-4">{description}</p>
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold mb-2">Reasons Why You Might Need This Service:</h2>
                <div className="flex flex-row flex-wrap gap-2">
                    {renderReasons()}
                </div>
            </div>
            <div className="w-1/2 mx-auto mt-4" delay={0.3}>
                <CallNowButton />
            </div>
        </div>
    );
}