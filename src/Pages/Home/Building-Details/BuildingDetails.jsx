import { useState } from "react";

const BuildingDetails = () => {
  const contentData = [
    {
      id: 1,
      icon: "https://themes.muffingroup.com/be/developer/wp-content/uploads/2015/04/home_developer_thumb_slider_icon_1.png",
      title: "Building Management System in every apartment",
      desc1:
        "Nullam et malesuada fames ac arcu. Suspendisse rutrum ligula, semper id, urna. Nulla nec neque. In ornare risus.",
      desc2:
        "Integer mi ligula, nonummy velit odio condimentum ante. Fusce ullamcorper. Suspendisse in aliquam ut, eleifend ac, sodales wisi a arcu.",
      desc3:
        "Proin porttitor ullamcorper, lorem id mi. Fusce tempor tristique, leo sit amet, consectetuer adipiscing eget, dui.",
      sign: "https://demo.cmssuperheroes.com/themeforest/wp-elroyale/wp-content/uploads/2019/03/sig1.png",
    },
    {
      id: 2,
      icon: "https://themes.muffingroup.com/be/developer/wp-content/uploads/2015/04/home_developer_thumb_slider_icon_3.png",
     title: "Smart Parking System",
    desc1: "Our building is equipped with a state-of-the-art smart parking system. Each car has a dedicated slot.",
    desc2: "With remote access control and sensor-based technology, parking becomes easier and more efficient.",
    desc3: "This saves time and reduces the hassle of finding a parking space.",
	sign: "https://demo.cmssuperheroes.com/themeforest/wp-elroyale/wp-content/uploads/2019/03/sig1.png",
    },
    {
      id: 3,
       icon: "https://themes.muffingroup.com/be/developer/wp-content/uploads/2015/04/home_developer_thumb_slider_icon_4.png",
      title: "Luxury Community Hall",
      desc1:
        "Nullam et malesuada fames ac arcu. Suspendisse rutrum ligula, semper id, urna. Nulla nec neque. In ornare risus.",
      desc2:
        "Integer mi ligula, nonummy velit odio condimentum ante. Fusce ullamcorper. Suspendisse in aliquam ut, eleifend ac, sodales wisi a arcu.",
      desc3:
        "Proin porttitor ullamcorper, lorem id mi. Fusce tempor tristique, leo sit amet, consectetuer adipiscing eget, dui.",
      sign: "https://demo.cmssuperheroes.com/themeforest/wp-elroyale/wp-content/uploads/2019/03/sig1.png",
    },
    {
      id: 4,
      icon: "https://themes.muffingroup.com/be/developer/wp-content/uploads/2015/04/home_developer_thumb_slider_icon_2.png",
      title: "Modern Gym & Fitness",
      desc1:
        "Nullam et malesuada fames ac arcu. Suspendisse rutrum ligula, semper id, urna. Nulla nec neque. In ornare risus.",
      desc2:
        "Integer mi ligula, nonummy velit odio condimentum ante. Fusce ullamcorper. Suspendisse in aliquam ut, eleifend ac, sodales wisi a arcu.",
      desc3:
        "Proin porttitor ullamcorper, lorem id mi. Fusce tempor tristique, leo sit amet, consectetuer adipiscing eget, dui.",
      sign: "https://demo.cmssuperheroes.com/themeforest/wp-elroyale/wp-content/uploads/2019/03/sig1.png",
    },
  ];

  const [activeContent, setActiveContent] = useState(contentData[0]);

  return (
    <div className="pb-5 mx-auto container bg-[#ffffff]">
      {/* Heading Section */}
      <div>
        <div className="container flex flex-col items-center justify-center mx-auto sm:p-10">
          <h1 className="text-[42px] text-[#444444] leading-[42px] text-center sm:text-5xl">
            About The Building
          </h1>
          <p className="text-[15px] leading-7 text-[#9b9b9b] text-center mt-4">
            Allow us to make your next special event extra special. We cater for
            all sized functions, ideal for your larger functions or an intimate
            gathering, our team can curate a menu to suit your taste. <br />
            Reservations are for lunch and dinner, check the availability of
            your table & book it now!
          </p>
        </div>
      </div>

      {/* Main Section */}
      <section>
        <div className="container flex flex-col-reverse lg:flex-row">
          <div className="flex  md:flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5">
            <div className="flex gap-12 flex-col md:flex-row">
              {/* Left Side Icons */}
              <div className="building-icon-container flex flex-row md:flex-col gap-1">
                {contentData.map((item) => (
                  <img
                    key={item.id}
                    src={item.icon}
                    alt={item.title}
                    onClick={() => setActiveContent(item)}
                    className={`border w-[60px] md:w-[300px]  mr-3 cursor-pointer rounded-md transition ${
                      activeContent.id === item.id
                        ? "border-orange-500 bg-orange-50"
                        : "hover:bg-gray-50"
                    }`}
                  />
                ))}
              </div>

              {/* Right Side Content */}
              <div className="building-details mt-10 space-y-3">
                <h2 className="text-[#444444] text-[21px] leading-[25px] font-semibold text-center">
                  {activeContent.title}
                </h2>
                <p className="text-[16px]">{activeContent.desc1}</p>
                <p className="text-[16px] text-[#9b9b9b]">
                  {activeContent.desc2}
                </p>
                <p className="text-[16px]">{activeContent.desc3}</p>

                <div className="flex justify-center items-center pt-5">
                  <img src={activeContent.sign} alt="signature" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Static Image */}
          <div className="lg:w-1/2 xl:w-3/5">
            <div className="flex items-center justify-center">
              <img
                src="https://themes.muffingroup.com/be/developer/wp-content/uploads/2015/04/home_developer_thumb_slider_1-768x664.png"
                alt=""
                className="rounded-lg shadow-lg h-auto max-w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuildingDetails;

// const BuildingDetails = () => {
// 	return (
// 		<div className="pb-5 bg-[#ffffff]">
// 			<div>
// 			<div className="container flex flex-col items-center justify-center  mx-auto  sm:p-10">
// 			<h1 className="text-[42px] text-[#444444] leading-[42px] text-center sm:text-5xl">About The Building</h1>
// 			<p className="text-[15px] leading-7 text-[#9b9b9b] text-center mt-4">Allow us to make your next special event extra special. We cater for all sized functions, ideal for your larger functions or an intimate gathering, our team can curate a menu to suit your taste. <br />
// 			Reservations are for lunch and dinner, check the availability of your table & book it now!</p>
// 			</div>
// 			</div>

// 			<section>
// 	<div className="container flex flex-col-reverse lg:flex-row">
// 		<div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5">

// 		<div className="flex gap-12 flex-row">
//               <div className="building-icon-container ">
//                 <img src="https://themes.muffingroup.com/be/developer/wp-content/uploads/2015/04/home_developer_thumb_slider_icon_1.png" alt="" className="border w-[350px] h-[95px] cursor-pointer " />
//                 <img src="https://themes.muffingroup.com/be/developer/wp-content/uploads/2015/04/home_developer_thumb_slider_icon_3.png" alt=""  className="border w-[350px] h-[95px] cursor-pointer" />
//                 <img src="https://themes.muffingroup.com/be/developer/wp-content/uploads/2015/04/home_developer_thumb_slider_icon_4.png" alt=""  className="border w-[350px] h-[95px] cursor-pointer" />
//                 <img src="https://themes.muffingroup.com/be/developer/wp-content/uploads/2015/04/home_developer_thumb_slider_icon_2.png" alt=""  className="border w-[350px] h-[95px] cursor-pointer" />
//             </div>
//             <div className="building-details mt-10  space-y-3">
//             <h2 className="text-[#444444] text-[21px] leading-[25px]">Building Managment System <br /> in every apartment</h2>
// 			<p className="text-[16px]">Nullam et malesuada fames ac arcu. Suspendisse rutrum ligula, semper id, urna. Nulla nec neque. In ornare risus. Phasellus placerat id, cursus non, nulla. Duis ac lacus. Nulla mi quis lacus et quam.</p>
// 			<p className="text-[16px] text-[#9b9b9b]">Integer mi ligula, nonummy velit odio condimentum ante. Fusce ullamcorper. Suspendisse in aliquam ut, eleifend ac, sodales wisi a arcu. Cras rhoncus eu, posuere eget, eros. Nullam laoreet.</p>
//             <p className="text-16px">Proin porttitor ullamcorper, lorem id mi. Fusce tempor tristique, leo sit amet, consectetuer adipiscing eget, dui. Nullam euismod, nulla ipsum primis in faucibus eros diam elit justo.</p>
// 			<div className="flex justify-center items-center pt-5">
// 				<img src="https://demo.cmssuperheroes.com/themeforest/wp-elroyale/wp-content/uploads/2019/03/sig1.png" alt="" />
// 			</div>
//             </div>
// 		</div>
// 		</div>

// 		<div className="lg:w-1/2 xl:w-3/5">
// 			<div className="flex items-center justify-center">
// 				<img src="https://themes.muffingroup.com/be/developer/wp-content/uploads/2015/04/home_developer_thumb_slider_1-768x664.png" alt="" className="rounded-lg shadow-lg  h-auto max-w-full" />
// 			</div>
// 		</div>
// 	</div>
// </section>

// 		</div>
// 	);
// };

// export default BuildingDetails;
