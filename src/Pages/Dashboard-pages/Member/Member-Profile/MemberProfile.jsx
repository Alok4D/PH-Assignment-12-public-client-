import { useContext } from "react"
import { AuthContext } from "../../../../Provider/AuthProvider"
import { Helmet } from "react-helmet-async"
import useGetRoles from "../../../../hooks/UseGetRoles";

const MemberProfile = () => {

    const {role} = useGetRoles();
    // console.log(role);
  const { user } = useContext(AuthContext);
  // console.log(user);

  return (
    <div className='flex justify-center items-center h-screen'>
      <Helmet><title>Profile</title></Helmet>
      <div className='bg-white shadow-lg rounded-2xl w-3/5'>
        <img
          alt='profile'
          src='https://wallpapercave.com/wp/wp10784415.jpg'
          className='w-full mb-4 rounded-t-lg h-36'
        />
        <div className='flex flex-col items-center justify-center p-4 -mt-16'>
          <a href='#' className='relative block'>
            <img
              alt='profile'
              src={user?.photoURL}
              className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
            />
                      <p className='mt-2 text-xl font-medium text-gray-800 '>
            Role : {role}
          </p>
          </a>

        
          <p className='mt-2 text-xl font-medium text-gray-800 '>
            User Id: {user?.uid}
          </p>
          <div className='w-full p-2 mt-4 rounded-lg'>
            <div className='flex flex-wrap items-center justify-evenly text-sm text-gray-600 '>
                <span className='font-bold text-black '>Name : {user?.displayName}</span>
                <span className='font-bold text-black '> Email : {user?.email}</span>
                
          
            </div>
          
          </div>
          {/* <p className='p-2 px-4  rounded-full '>
              <p>Agreement accept date : ?</p>
              <p>Rented apartment info (floor, block, room no etc.) : ???????</p>
            </p> */}
        </div>
      </div>
    </div>
  )
}

export default MemberProfile