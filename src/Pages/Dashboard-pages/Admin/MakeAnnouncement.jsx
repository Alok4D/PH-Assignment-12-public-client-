
import { useState } from 'react';
import './AnnouncementForm.css'; 
import { useMutation } from '@tanstack/react-query';
import UseAxiosSecure from '../../../hooks/UseAxiosSecure';


function AnnouncementForm() {
    const axiosSecure = UseAxiosSecure();
  // State to hold form data
  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });
  //
  const { mutateAsync } = useMutation({
    mutationFn: async announcementData => {
        const { data } = await axiosSecure.post(`/announcement`, announcementData)
        return data
    },
    onSuccess: () => {
        console.log('announcement data save in db!');
    }
  })

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  try{
    const announcementData = {
        title: '',
        description: ''
    }
    console.log(announcementData)
//  await mutateAsync(announcementData)
  } catch (err) {
    console.log(err);
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
   
  };

  return (
    <div className="announcement-form-container">
      <h1>Create an Announcement</h1>
      <form onSubmit={handleSubmit} className="announcement-form">
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-control"
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default AnnouncementForm;
