
import { useEffect, useState } from 'react';

export const Banner = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const sliders = [{img: 'https://png.pngtree.com/background/20230317/original/pngtree-city-%E2%80%8B%E2%80%8Bbuilding-neon-background-picture-image_2149544.jpg'},{ img: 'https://image.khaleejtimes.com/?uuid=251296dd-a9b4-4861-8867-7212595b87a2&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.99716&x=0&y=0&width=1200&height=675' },{ img: 'https://lh6.googleusercontent.com/proxy/X4e-NXZNtEURdzQ1bqM3Woj4JAT8lij5rS8xNgmBNyPT9xIRNI9Ew1lzH50ysNphu_ydVgb4ox0r062aeMNnB5XoICc1z9bWVacIdVXlPQ' },{ img: 'https://www.ie.edu/insights/wp-content/uploads/2020/11/VanSchendel-Construction.jpg' },{ img: 'https://cdn.viewpoint.com/blog/2022/08/iStock-1334272873.jpg' }];
    // if you don't want to change the slider automatically then you can just remove the useEffect
    useEffect(() => {
        const intervalId = setInterval(() => setCurrentSlider(currentSlider === sliders.length - 1 ? 0 : currentSlider + 1), 2000);
        return () => clearInterval(intervalId);
    }, [currentSlider]);

    return (
        <div className="flex flex-col justify-between">
            <div className="w-full h-72 sm:h-96 md:h-[700px] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/25 before:inset-0 transform duration-1000 ease-linear rounded-lg overflow-hidden"
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