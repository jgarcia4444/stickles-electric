import Image from "next/image";

import CallNowButton from "./components/CallNowButton";

export default function Home() {
  return (
    <div className="w-full">
      <main className="flex flex-row w-full">
        <div className="w-1/2 flex flex-col px-2 gap-2 py-4 items-start justify-center">
          <h1 className="text-3xl font-bold text-white">Trusted Electrician Serving Palm Desert and Surrounding Areas</h1>
          <div className="w-full rounded-full h-1 bg-linear-to-l to-white from-primary-blue" />
          <h2 className="text-xl text-left font-semibold mb-8 text-light-blue">Electrician Services</h2>
          <div className="w-1/2">
            <CallNowButton />
          </div>
        </div>
        <div className="w-1/2 px-2 flex flex-col items-center justify-center">
          <Image className="mx-auto rounded w-auto h-auto" src="/work-truck.jpeg" alt="Work Truck" width={500} height={500} />
        </div>
      </main>
    </div>
  );
}
