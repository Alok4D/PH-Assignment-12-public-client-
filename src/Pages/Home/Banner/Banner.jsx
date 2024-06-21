import { useEffect, useState } from 'react';

export const Banner = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const sliders = [{ img: 'https://themes.muffingroup.com/be/developer3/wp-content/uploads/2017/11/home_developer3_slider_slide1_bg.jpg', title: 'Escape 1', des: 'A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.' },{ img: 'https://themes.muffingroup.com/be/developer2/wp-content/uploads/2016/12/home_developer2_offer2.jpg', title: 'Escape 2', des: 'A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.' },{ img: 'https://themes.muffingroup.com/be/developer2/wp-content/uploads/2016/12/home_developer2_offer1.jpg', title: 'Escape 3', des: 'A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.' },{ img: 'https://themes.muffingroup.com/be/developer/wp-content/uploads/2015/04/home_developer_slider.jpg', title: 'Escape 4', des: 'A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.' },{ img: 'https://images.prismic.io/csem/f278d381-33fe-4b6b-bb7d-5ffc3dc08be8_CSEM_NE_building_JD1_full-view-BIPV-3000px.jpg?auto=compress,format&rect=0,219,3000,1250&w=1920&h=800', title: 'Escape 5', des: 'A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.' }];
    // if you don't want to change the slider automatically then you can just remove the useEffect
    useEffect(() => {
        const intervalId = setInterval(() => setCurrentSlider(currentSlider === sliders.length - 1 ? 0 : currentSlider + 1), 5000);
        return () => clearInterval(intervalId);
    }, [currentSlider]);

    return (
        <div className="flex flex-col justify-between">
            <div className="w-full h-72 sm:h-96 md:h-[540px] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/25 before:inset-0 transform duration-1000 ease-linear rounded-lg overflow-hidden"
                style={{ backgroundImage: `url(${sliders[currentSlider].img})`}}>
                {/* text container here */}
                <div className="drop-shadow-lg text-white px-5">
                    <h1 className="text-xl text-center lg:text-3xl font-semibold mb-3">{sliders[currentSlider].title}</h1>
                    <p className="text-sm md:text-base lg:text-lg">{sliders[currentSlider].des}</p>
                </div>
            </div>
            {/* slider container */}
            <div className="flex flex-row justify-center items-center gap-3 p-2">
                {/* sliders */}
                {sliders.map((slide, inx) => (<img onClick={() => setCurrentSlider(inx)} key={inx}
                        src={slide.img} className={`w-10 md:w-20 h-6 sm:h-8 md:h-12 bg-black/20 ${currentSlider === inx ? 'border-2 border-black p-px' : ''} rounded-md md:rounded-lg box-content cursor-pointer`}
                        alt={slide.title}/>
                ))}
            </div>
        </div>
    );
};

//banner image:
// https://themes.muffingroup.com/be/developer3/wp-content/uploads/2017/11/home_developer3_slider_slide1_bg.jpg
// https://themes.muffingroup.com/be/developer2/wp-content/uploads/2016/12/home_developer2_offer2.jpg
// https://themes.muffingroup.com/be/developer2/wp-content/uploads/2016/12/home_developer2_offer1.jpg
// https://themes.muffingroup.com/be/developer/wp-content/uploads/2015/04/home_developer_slider.jpg