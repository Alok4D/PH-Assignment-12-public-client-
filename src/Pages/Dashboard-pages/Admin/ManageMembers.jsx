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
          <title >Manage Member</title>
         
        </Helmet>
        <div>
          <h2 className='text-center text-3xl text-yellow-500'>Manage Member</h2> 
          <div className="divider divider-success"></div>
        </div>
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

export default ManageMember;
