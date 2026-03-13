import Image from "next/image";
import SectionHeader from "../Texts/SectionHeader";

export default function ServiceAreaSection() {

    const citiesServing = [
        {city: "Palm Springs", imgUrl: "https://www.travelandleisure.com/thmb/zlS6ObQ68ObLF_-MZ27NyC8vyUQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-lead-image-PALMSPRINGSCA0126-fed2bcec2384418b962fced1439db8d5.jpg"},
         {city: "Palm Desert", imgUrl: "https://elpaseocatalogue.com/wp-content/uploads/2023/03/12-2020-gift-guide-A-1000x337-1.jpg"}, 
         {city: "La Quinta", imgUrl: "https://oldtownlaquinta.com/2019/wp-content/uploads/2023/10/Leasing-e1696622270899.jpg"}, 
         {city: "Rancho Mirage", imgUrl: "https://assets.simpleviewinc.com/sv-greaterpalmsprings/image/fetch/c_fill,f_jpg,h_500,q_75,w_690/https://assets.simpleviewinc.com/simpleview/image/upload/crm/palmsprings/The-River-473510_9582a106-5056-b365-ab13e13d1a1d3a19.jpg"}, 
         {city: "Indio", imgUrl: "https://assets.simpleviewinc.com/sv-greaterpalmsprings/image/upload/c_fill,f_jpg,h_715,q_75,w_640/v1/cms_resources/clients/palmsprings/date_festival_web_50c9e6c9-1366-4d18-a881-822db598bc8e.jpg"}, 
         {city: "Cathedral City", imgUrl: "https://media.california.com/media/_versions_jpg/articles/living_in_cathedral_city_california__6720x3520____v1222x580__.jpg"}, 
         {city: "Indian Wells", imgUrl: "https://ca-times.brightspotcdn.com/dims4/default/175fda6/2147483647/strip/true/crop/4800x3200+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fzbk%2Fdamlat_images%2FLA%2FLA_PHOTO_SELECTS%2F2018_03%2F3040566_la-sp-tennis-palm-springs_22_AJS.JPG"}, 
         {city: "Desert Hot Springs", imgUrl: "https://businessviewmagazine.com/wp-content/uploads/2023/02/Desert-Hot-Springs-California-Californias-Coachella-Valley-Region-Entry-Way.jpg"}
    ];

    const renderCities = () => {
        return citiesServing.map((city, index) => (
            <div key={index} className="flex flex-col items-center relative w-56 h-32">
                <div className="absolute bg-black/20 rounded-lg hover:bg-opacity-0 transition-all duration-300 w-full h-full top-0 left-0" />
                <img src={city.imgUrl} alt={city.city} className="object-cover rounded-lg absolute top-0 left-0 w-full h-full -z-10" />
                <h3 className="text-white text-lg font-bold z-10">{city.city}</h3>
            </div>
        ));
    };

    return (
        <div className="py-4">
            <SectionHeader title="Serving the Entire Coachella Valley" />
            <p className="text-white text-lg mb-4">We proudly provide electrical services throughout the Coachella Valley, including Palm Springs, Palm Desert, Indio, La Quinta, Rancho Mirage, Cathedral City, and nearby communities.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {renderCities()}
            </div>
        </div>
    );
}