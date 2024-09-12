import { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { AuthContext } from '../../../Provider/AuthProvider'
import UseAxiosSecure from '../../../hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import UserDataRow from './UserDataRow';

const ManageMember = () => {

    const { user } = useContext(AuthContext);
    const axiosSecure = UseAxiosSecure();
    // fetch users data
    const {
        data: users = [],
        refetch,
    } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const {data} = await axiosSecure(`/users`)
            return data
        },
    })

    console.log(users);
  return (
    <>
      <div className='container mx-auto px-4 sm:px-8'>
        <Helmet>
          <title>Manage Member</title>
        </Helmet>
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'>Name</th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Email
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Role
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Status
                    </th>

                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>

               {users.map(user => (
                <UserDataRow key={user?._id} user={user} refetch={refetch} />
               ))}


                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ManageMember










// const ManageMembers = () => {
//     return (
        
//     <div className="overflow-x-auto">
//     <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6">
//         <thead>
//             <tr className="bg-[#0095FF] text-white">
//                 <th className="py-4 px-6 text-lg text-left border-b">User Name</th>
//                 <th className="py-4 px-6 text-lg text-left border-b">User Email</th>
//                 <th className="py-4 px-6 text-lg text-left border-b">Role</th>
//                 <th className="py-4 px-6 text-lg border-b text-end">Action</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr className="hover:bg-gray-50 border-b transition duration-300">
//                 <td className="py-4 px-4 flex justify-start">
//                     <img src="https://source.unsplash.com/64x64/?microphone" alt="table navigate ui" className="h-16 w-16 object-cover bg-gray-300" />
//                 </td>
//                 <td className="py-4 px-6 border-b text-xl font-medium">Dual Speaker</td>
//                 <td className="py-4 px-6 border-b text-lg font-medium">$99.99</td>
//                 <td className="py-4 px-6 border-b text-end">
//                     <button className="bg-blue-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">Details</button>
//                 </td>
//             </tr>
//             <tr className="hover:bg-gray-50 border-b transition duration-300">
//                 <td className="py-4 px-4 flex justify-start">
//                     <img src="https://source.unsplash.com/64x64/?phone" alt="table navigate ui" className="h-16 w-16 object-cover bg-gray-300" />
//                 </td>
//                 <td className="py-4 px-6 border-b text-xl font-medium">Samsung s22</td>
//                 <td className="py-4 px-6 border-b text-lg font-medium">$599.99</td>
//                 <td className="py-4 px-6 border-b text-end">
//                     <button className="bg-blue-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">Details</button>
//                 </td>
//             </tr>
//         </tbody>
//     </table>
// </div>

  
//     );
// };

// export default ManageMembers;