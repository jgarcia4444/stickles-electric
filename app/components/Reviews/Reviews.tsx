
import { PiStarFill, PiUser } from "react-icons/pi";
export default function Reviews() {
    // const reviews = [
    //     {
    //         name: "John Doe",
    //         rating: 5,
    //         text: "Great service, highly recommend!"
    //     },
    //     {
    //         name: "Jane Doe",
    //         rating: 5,
    //         text: "Great service, highly recommend!"
    //     },
    //     {
    //         name: "John Smith",
    //         rating: 5,
    //         text: "Great service, highly recommend!"
    //     },
    //     {
    //         name: "Jane Doe",
    //         rating: 5,
    //         text: "Great service, highly recommend!"
    //     },
    //     {
    //         name: "John Smith",
    //         rating: 5,
    //         text: "Great service, highly recommend!"
    //     }
    // ];

    // const reviewCard = (review: { name: string; rating: number; text: string }, index: number) => (
    //     <div key={index} className="flex flex-col min-w-64">
    //         <div className="flex flex-row justify-center gap-4">
    //             <div className="flex flex-row gap-1 items-center">
    //                 <p className="font-bold">{review.rating}</p>
    //                 <PiStarFill size={16} color="#fff" />
    //             </div>
    //             <div className="flex flex-col">
    //                 <div className="bg-light-blue rounded-full w-8 h-8 flex items-center justify-center">
    //                     <PiUser size={20} color="#fff" />
    //                 </div>
    //                 <h3 className="font-thin">{review.name}</h3>
    //             </div>
    //         </div>
    //         <p className="text-sm">{review.text}</p>
    //     </div>
    //     );



    return (
        <div className="flex flex-row items-between w-full overflow-x-auto gap-4">
            {/* {reviews.map((review, index) => (reviewCard(review, index)))} */}
            <div className="w-1/3">
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="">
                    <div className="bg-white/40 text-primary-blue p-2 rounded hover:bg-white hover:cursor-pointer text-center transition-all duration-300 font-bold">See Reviews</div>
                </a>
            </div>
            <div className="w-1/3">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="">
                    <div className="bg-light-blue/40 hover:bg-light-blue p-2 rounded text-center hover:cursor-pointer transition-all duration-300 font-bold">Leave A Review</div>
                </a>
            </div>
        </div>
    );
}