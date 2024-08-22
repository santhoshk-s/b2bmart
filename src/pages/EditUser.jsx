import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Backend_url } from '../constant';

export const EditUser = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    contactNo: '',
    password: '',
    confirmPassword: '',
    Id: '',
    profile: '',
  });

  useEffect(() => {
    const userString = localStorage.getItem('user');
    const userDetails = userString ? JSON.parse(userString) : null;
    
    if (userDetails && userDetails._id) {
      const fetchUserDetails = async () => {
        try {
          const url = `${Backend_url}/api/auth/user/${userDetails._id}`;
          const response = await axios.get(url);
          const userData = response.data;
          
          setUser({
            username: userData.username || '',
            email: userData.email || '',
            contactNo: userData.contactNo || '',
            password: '',
            confirmPassword: '',
            Id: userData._id,
           profile: userData.profile,
          });
        } catch (error) {
          console.error('Error fetching user details:', error.response ? error.response.data : error.message);
        }
      };

      fetchUserDetails();
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profile' && files && files.length > 0) {
        setUser((prevUser) => ({
            ...prevUser,
            profile: URL.createObjectURL(files[0]), // Temporarily show the selected image
        }));
    } else {
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('username', user.username);
    formData.append('email', user.email);
    formData.append('contactNo', user.contactNo);
    // formData.append('password', user.password);
    if (user.profile) {
        formData.append('profile', user.profile); // Directly append the file object
    }

    try {
        const url = `${Backend_url}/api/auth/user/${user.Id}`;
        const response = await axios.put(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        console.log('Profile updated:', response.data);
    } catch (error) {
        console.error('Error updating profile:', error.response ? error.response.data : error.message);
    }
};



  return (
    <>
      <div className='bg-green-400 pb-10'>
        <p className='font-bold text-center text-white pt-2'>Edit User</p>
      </div>
      <img src={user.profile}/>
      <section className="py-10 my-auto dark:bg-gray-900">
        <div className="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
          <div className="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center dark:bg-gray-800/40">
            <form onSubmit={handleSubmit}>
              <div className="w-full rounded-sm bg-cover bg-center bg-no-repeat items-center">
                <div 
                  className="mx-auto flex justify-center w-[141px] h-[141px] bg-blue-300/20 rounded-full bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${user.profile})` }} // Display selected or fetched image
                >
                  <div className="bg-white/90 rounded-full w-6 h-6 text-center ml-28 mt-4">
                 
                    <input type="file" name="profile" id="upload_profile" hidden onChange={handleChange} />
                    <label htmlFor="upload_profile">
                      <svg data-slot="icon" className="w-6 h-5 text-blue-700" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"></path>
                      </svg>
                    </label>
                  </div>
                </div>
              </div>
              <h2 className="text-center mt-1 font-semibold dark:text-gray-300">Upload Profile and Cover Image</h2>
              <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                <div className="w-full mb-4 mt-6">
                  <label htmlFor="username" className="mb-2 dark:text-gray-300 ml-1">Name</label>
                  <input
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleChange}
                    className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                <div className="w-full mb-4">
                  <label htmlFor="email" className="mb-2 dark:text-gray-300 ml-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                <div className="w-full mb-4">
                  <label htmlFor="contactNo" className="mb-2 dark:text-gray-300 ml-1">Contact No</label>
                  <input
                    type="text"
                    name="contactNo"
                    value={user.contactNo}
                    onChange={handleChange}
                    className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                <div className="w-full mb-4">
                  <label htmlFor="password" className="mb-2 dark:text-gray-300 ml-1">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                <div className="w-full mb-4">
                  <label htmlFor="confirmPassword" className="mb-2 dark:text-gray-300 ml-1">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={user.confirmPassword}
                    onChange={handleChange}
                    className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="py-3 px-6 text-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-lg font-bold text-lg"
                >
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
