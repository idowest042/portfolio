
import Lottie from 'lottie-react';
import spaceError from '../../assets/Lottie/space_404.json';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Error404 = () => {
    const navigate = useNavigate()

    useEffect(() => {
        document.title = 'Error404 || Service Orbit'
    }, []);

    return (
        <div className='w-full md:w-11/12  mx-auto max-h-screen flex flex-col-reverse lg:flex-row items-center justify-center'>
            <div className="px-10 py-16 flex flex-col justify-center items-start rounded-xl w-full lg:w-[50%] h-auto flex-1">
                <h1 className="text-[15vw] leading-none font-bold text-center text-border font-mono" style={{ color: "transparent", WebkitTextStroke: "5px black" }}>404</h1>
                <h2 className="text-[1.1rem] sm:text-[3rem] font-[700]">
                    Oops! Page not found
                </h2>

                <p className="text-[1.2rem] font-semibold">Sorry, the page you are looking for does not exist. If you think something is broken, report a problem.</p>

                <button onClick={() => navigate("/")} className="py-3 px-8 font-bold w-max rounded-full bg-[#3b60f3] hover:bg-[#2F1AE4] text-white mt-5">
                    BACK TO HOME
                </button>
            </div>
            <div className='flex-1'>
                <Lottie animationData={spaceError} />
            </div>
        </div>
    );
};

export default Error404;