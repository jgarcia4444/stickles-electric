'use client'
import { ReactNode } from "react";
import { useRouter } from "next/navigation";

interface ServiceInfo {
    title: string;
    description: string;
    icon: ReactNode;
}

export default function ServiceCard({serviceInfo}: { serviceInfo: ServiceInfo }) {
    const router = useRouter();
    return (
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow relative">
            <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-blue-500 to-purple-600 opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
            <div onClick={() => router.push(`/services/${serviceInfo.title.toLowerCase().replace(/\s+/g, "-")}`)} className="relative z-10 hover:scale-105 transition-transform duration-300 hover:cursor-pointer">
                <div className="text-primary-blue">
                    {serviceInfo.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">{serviceInfo.title}</h3>
                <p className="text-white text-sm">{serviceInfo.description}</p>
            </div>
        </div>
    );
}