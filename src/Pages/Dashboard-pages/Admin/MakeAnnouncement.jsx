import Swal from "sweetalert2";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import './AnnouncementForm.css';
import { Helmet } from "react-helmet-async";

const MakeAnnouncement = () => {
  const axiosSecure = UseAxiosSecure();

  const handleLogin = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    // console.log(title, description);
    
    const newAnnouncement = {
      title,
      description,
    };

    axiosSecure.post("/announcement", newAnnouncement).then((res) => {
      if (res.data.insertedId) {
        // console.log("admin added announcement!");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Create Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        // navigate('/');
        e.target.reset();
      }
    });
  };

  return (
    <div>
     <div>
      <Helmet><title>Dashboard || Create Announcement Page</title></Helmet>
     <h2 className="text-center text-blue-400 text-4xl">Please create a new Announcement!</h2>
     <div className="divider divider-success"></div>
     </div>
      <div className="w-full flex justify-center items-center z-0 p-4 gap-10 flex-col lg:flex-row  shadow  mx-auto  dark:bg-gray-50 dark:text-gray-800">
        <div className="w-full max-w-md p-4 rounded-md sm:p-8 shadow border dark:bg-gray-50">
          <form onSubmit={handleLogin} className="space-y-8">
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm">
                  Title :
                </label>
                <input
                  type="title"
                  name="title"
                  id="title"
                  // placeholder="leroy@jenkins.com"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description :</label>
                <textarea
                  name="description"
                  className="form-control"
                  rows="4"
                  required
                ></textarea>
              </div>

            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeAnnouncement;