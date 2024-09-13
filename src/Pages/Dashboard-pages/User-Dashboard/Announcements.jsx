import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Announcements = () => {
  const axiosSecure = UseAxiosSecure();
  // fetch users data
  const { data: announcement = [] } = useQuery({
    queryKey: ["announcement"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/announcement`);
      return data;
    },
  });

  console.log(announcement);
  return (
    <div>
      <h2 className="text-red-500 text-5xl text-center">Announcements !!!</h2>{" "}
      <br />
      <div className="divider divider-success">Success</div>
      <div>
        {announcement.map((data) => (
          <>
            <div>
              <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container mx-auto flex flex-col p-6">
                  {/* <h2 className="py-4 text-3xl font-bold text-center">Temporibus elit</h2> */}
                  <div className="divide-y dark:divide-gray-300">
                    <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                      <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          fill="currentColor"
                          className="w-16 h-16"
                        >
                          <path d="M472,16H168a24,24,0,0,0-24,24V344a24,24,0,0,0,24,24H472a24,24,0,0,0,24-24V40A24,24,0,0,0,472,16Zm-8,320H176V48H464Z"></path>
                          <path d="M112,400V80H80V408a24,24,0,0,0,24,24H432V400Z"></path>
                          <path d="M48,464V144H16V472a24,24,0,0,0,24,24H368V464Z"></path>
                        </svg>
                      </div>
                      <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                        <span className="text-xl font-bold md:text-2xl">
                          <h2>{data.title}</h2>
                        </span>
                        <span className="mt-4 dark:text-gray-700">
                          <p>{data.description}</p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
