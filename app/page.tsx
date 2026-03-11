import Image from "next/image";

import CallNowButton from "./components/CallNowButton";

export default function Home() {
  return (
    <div className="w-full">
      <main className="flex flex-row w-full">
        <div className="w-1/2 flex flex-col px-2 gap-4 py-4 items-start justify-center">
          <h1 className="text-5xl font-thin text-light-blue">Trusted Electrician Serving the Coachella Valley</h1>
          <div className="w-full rounded-full h-1 bg-linear-to-l to-white from-primary-blue" />
          <h2 className="text-xl text-left mb-4 text-white">Reliable electrical services across Palm Springs, Palm Desert, Indio, La Quinta, Rancho Mirage and surrounding communities.</h2>
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
