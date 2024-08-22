import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaChevronLeft,FaCamera } from 'react-icons/fa';
import { Backend_url } from '../constant';
import { Link } from 'react-router-dom';

export const EditUser = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    contactNo: '',
    password: '',
    confirmPassword: '',
    Id: ''
  });

  useEffect(() => {
    const userString = localStorage.getItem('user');
    console.log('LocalStorage User Data:', userString); 
    const userDetails = userString ? JSON.parse(userString) : null;
    
    if (userDetails && userDetails._id) {
      const fetchUserDetails = async () => {
        try {
          const url = `${Backend_url}/api/auth/user/${userDetails._id}`;
        //   console.log('Fetching User Details from:', url); 
          const response = await axios.get(url);
          const userData = response.data;

        //   console.log('User Data:', userData); 
          
          setUser({
            username: userData.username || '',
            email: userData.email || '',
            contactNo: userData.contactNo || '',
            password: '',
            confirmPassword: '',
            Id: userData._id
          });
        } catch (error) {
          console.error('Error fetching user details:', error.response ? error.response.data : error.message);
          alert('Error fetching user details. Please check the console for details.');
        }
      };

      fetchUserDetails();
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const url = `${Backend_url}/api/auth/user/${user.Id}`;
      const payload = {
        username: user.username,
        email: user.email,
        contactNo: user.contactNo,
        password: user.password,
      };

    //   console.log('PUT Request URL:', url);
    //   console.log('Payload:', payload);

      const response = await axios.put(url, payload);
    //   console.log('Response:', response.data);

      setUser({
        ...user,
        username: response.data.username || user.username,
        email: response.data.email || user.email,
        contactNo: response.data.contactNo || user.contactNo,
      });

      alert('User updated successfully');
    } catch (error) {
     console.error('Error updating user:', error.response ? error.response.data : error.message);
      alert('Error updating user. Please check the console for details.');
    }
  };

  return (
    <>
      <div className='flex justify-center bg-green-400 pb-8 pt-5'>
        <Link to='/home'>
        <FaChevronLeft className='relative right-16 top-5 text-lg text-white'/>
        </Link>
        <p className='font-bold text-center text-white text-3xl pt-2'>Edit User</p>
      </div>
      <section className=" my-auto">
        <div className="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
          <div className="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center">
            <form onSubmit={handleSubmit}>
              <div className="w-full rounded-sm bg-[url('https://images.unsplash.com/photo-1449844908441-8829872d2607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxob21lfGVufDB8MHx8fDE3MTA0MDE1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-center bg-no-repeat items-center">
                <div className="mx-auto flex justify-center w-[141px] h-[141px]  rounded-full bg-[url('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxwcm9maWxlfGVufDB8MHx8fDE3MTEwMDM0MjN8MA&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-center bg-no-repeat">
                  <div className="bg-white/90 rounded-full w-6 h-6 text-center ml-28 mt-4">
                    <input type="file" name="profile" id="upload_profile" hidden />
                    <label htmlFor="upload_profile">
                    <FaCamera className='relative top-1 left-1 text-green-600'/>
                    </label>
                  </div>
                </div>
                <div className="flex justify-end">
                  <input type="file" name="profile" id="upload_cover" hidden />
                  <div className="bg-white flex items-center gap-1 rounded-tl-md px-2 text-center font-semibold">
                    <label htmlFor="upload_cover" className="inline-flex items-center gap-1 cursor-pointer">Cover
                    </label>
                    <FaCamera className='text-green-600' />
                  </div>
                </div>
              </div>
              <h2 className="text-center mt-1 font-bold text-black">Upload Profile and Cover Image</h2>
              <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                <div className="w-full mb-4 mt-6">
                  <label htmlFor="username" className="mb-2 text-black ml-1">Name</label>
                  <input
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleChange}
                    className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                <div className="w-full mb-4">
                  <label htmlFor="email" className="mb-2 text-black ml-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 "
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                <div className="w-full mb-4">
                  <label htmlFor="contactNo" className="mb-2 text-black  ml-1">Contact No</label>
                  <input
                    type="text"
                    name="contactNo"
                    value={user.contactNo}
                    onChange={handleChange}
                    className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                <div className="w-full mb-4">
                  <label htmlFor="password" className="mb-2 text-black ml-1">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                <div className="w-full mb-4">
                  <label htmlFor="confirmPassword" className="mb-2 text-black ml-1">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={user.confirmPassword}
                    onChange={handleChange}
                    className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>
              <div className="w-full rounded-lg bg-green-500 mt-4 text-white text-lg font-semibold">
                <button type="submit" className="w-full p-4">Update</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
