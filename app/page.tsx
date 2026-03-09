import CallNowButton from "./components/CallNowButton";

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-row">
        <div className="w-1/2 flex flex-col gap-2 py-4">
          <h1 className="text-2xl font-bold text-white">Trusted Electrician Serving Palm Desert and Surrounding Areas</h1>
          <div className="w-full rounded-full h-1 bg-linear-to-r to-white from-primary-blue" />
          <h2 className="text-xl font-semibold text-white mb-8">Electrician Services</h2>
          <div className="w-1/2">
            <CallNowButton />
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center">
          
        </div>
      </main>
    </div>
  );
}
