import { useState } from 'react'
import loginSVG from '../assets/login.svg'
import briefcaseSVG from '../assets/briefcase.svg'
import moneySendSVG from '../assets/money-send.svg'
import VectorSVG from '../assets/Vector.svg'
import backArrow from '../assets/backArrow.svg'

function Services() {
    const [services, _setServices] = useState([
    {
        title: "Supplier Sign IN & UP",
        text: "Log in and create an account to access exclusive features.",
        image: loginSVG,
    },
    {
        title: "Careers",
        text: "Join our team to help shape the future of our organization with career opportunities.",
        image: briefcaseSVG,
    },
    {
        title: "Auctions",
        text: "Discover the potential of auctions within our company to foster creativity and expansion.",
        image: moneySendSVG,
    },
    {
        title: "Tenders",
        text: "Explore bidding opportunities within our organization to drive innovation and growth.",
        image: VectorSVG,
    },
]);

return (
    < >
        <div className="py-12 pb px-7">
            <h1 className="text-center text-[56px] text-[#978C6B] font-bold xl:text-left">
                Services
            </h1>

            {/* cards */}
            <div className="grid grid-cols-1 gap-7 md:gap-4 md:grid-cols-2 xl:grid-cols-4 mt-8 text-[#3E3A35] ">
            {services.map((service) => (
                <div className="p-8 bg-[#E4DED2] rounded-lg w-full flex flex-col justify-between">
                    <img
                    className="max-w-11"
                    src={service.image}
                    alt={service.title}
                    />
                    <h2 className="text-[32px] font-normal mt-5">{service.title}</h2>
                    <p className="text-[16px] font-[500] mt-9">{service.text}</p>
                    <button className="max-w-44 text-[20px] mt-10 font-[500] bg-lightwhite px-4 py-2 flex justify-center items-center gap-4 rounded-lg hover:bg-lightwhiteHover transition-all duration-[.4s] active:bg-lightwhite">
                        Learn more{" "}
                        <img className="mt-1" src={backArrow} alt="backArrow" />
                    </button>
                </div>
                ))}
            </div>
        </div>
    </>
    );
}

export default Services;
