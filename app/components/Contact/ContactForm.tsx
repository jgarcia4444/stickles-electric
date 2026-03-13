export default function ContactForm() {
  return (
    <div className='w-full'>
      <form className="flex flex-row w-full flex-wrap">
        <div className="flex flex-col gap-2 w-1/2 pr-2">
            <input className="text-primary-blue placeholder-light-blue p-2 rounded bg-white/50 w-full" type="text" placeholder="Name" />
            <input className="placeholder-light-blue text-primary-blue p-2 rounded bg-white/50 w-full" type="email" placeholder="Email" />
            <input className="text-primary-blue placeholder-light-blue p-2 rounded bg-white/50 w-full" type="tel" placeholder="Phone" />
        </div>
        <div className="w-1/2">
            <textarea className="text-primary-blue placeholder-light-blue w-full h-full p-2 rounded bg-white/50 pl-2" placeholder="Message" />
        </div>
        <div className="w-full mt-4 flex justify-end">
            <button type="submit" className="bg-light-blue text-white px-8 py-2 font-bold rounded hover:bg-light-blue/80 transition-colors hover:cursor-pointer">Submit</button>
        </div>
      </form>
    </div>
  )
}