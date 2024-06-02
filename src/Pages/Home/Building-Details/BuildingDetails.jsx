
const BuildingDetails = () => {
	return (
		<div className="pb-5 bg-[#ffffff]">
			<div>
			<div className="container flex flex-col items-center justify-center  mx-auto  sm:p-10">
			<h1 className="text-[42px] text-[#444444] leading-[42px] text-center sm:text-5xl">About The Building</h1>
			<p className="text-[15px] leading-7 text-[#9b9b9b] text-center mt-4">Allow us to make your next special event extra special. We cater for all sized functions, ideal for your larger functions or an intimate gathering, our team can curate a menu to suit your taste. <br />
			Reservations are for lunch and dinner, check the availability of your table & book it now!</p>
			</div>		
			</div>

			<section>
	<div className="container flex flex-col-reverse lg:flex-row">
		<div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5">
          
		<div className="flex gap-12 flex-row">
              <div className="building-icon-container ">
                <img src="https://themes.muffingroup.com/be/developer/wp-content/uploads/2015/04/home_developer_thumb_slider_icon_1.png" alt="" className="border w-[350px] h-[95px] cursor-pointer " />
                <img src="https://themes.muffingroup.com/be/developer/wp-content/uploads/2015/04/home_developer_thumb_slider_icon_3.png" alt=""  className="border w-[350px] h-[95px] cursor-pointer" />
                <img src="https://themes.muffingroup.com/be/developer/wp-content/uploads/2015/04/home_developer_thumb_slider_icon_4.png" alt=""  className="border w-[350px] h-[95px] cursor-pointer" />
                <img src="https://themes.muffingroup.com/be/developer/wp-content/uploads/2015/04/home_developer_thumb_slider_icon_2.png" alt=""  className="border w-[350px] h-[95px] cursor-pointer" />
            </div>
            <div className="building-details mt-10  space-y-3">
            <h2 className="text-[#444444] text-[21px] leading-[25px]">Building Managment System <br /> in every apartment</h2>
			<p className="text-[16px]">Nullam et malesuada fames ac arcu. Suspendisse rutrum ligula, semper id, urna. Nulla nec neque. In ornare risus. Phasellus placerat id, cursus non, nulla. Duis ac lacus. Nulla mi quis lacus et quam.</p>
			<p className="text-[16px] text-[#9b9b9b]">Integer mi ligula, nonummy velit odio condimentum ante. Fusce ullamcorper. Suspendisse in aliquam ut, eleifend ac, sodales wisi a arcu. Cras rhoncus eu, posuere eget, eros. Nullam laoreet.</p>
            <p className="text-16px">Proin porttitor ullamcorper, lorem id mi. Fusce tempor tristique, leo sit amet, consectetuer adipiscing eget, dui. Nullam euismod, nulla ipsum primis in faucibus eros diam elit justo.</p>
			<div className="flex justify-center items-center pt-5">
				<img src="https://demo.cmssuperheroes.com/themeforest/wp-elroyale/wp-content/uploads/2019/03/sig1.png" alt="" />
			</div>
            </div>
		</div>
		</div>

		<div className="lg:w-1/2 xl:w-3/5">
			<div className="flex items-center justify-center">
				<img src="https://themes.muffingroup.com/be/developer/wp-content/uploads/2015/04/home_developer_thumb_slider_1-768x664.png" alt="" className="rounded-lg shadow-lg  h-auto max-w-full" />
			</div>
		</div>
	</div>
</section>
			
		</div>
	);
};

export default BuildingDetails;

