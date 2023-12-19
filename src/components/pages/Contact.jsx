import { useState } from "react";
import Layout from "../Layout";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, e.g., send the data to a server
    console.log("Form submitted:", formData);
    // Clear the form after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <Layout>
      <div
        className="container mx-auto my-8 bg-cover bg-center"
        style={{
          background: `url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGFjdHxlbnwwfHwwfHx8MA%3D%3D) center/cover no-repeat`,
        }}
      >
        <div className="flex flex-col justify-center items-center py-6 text-white">
          <h2 className="text-4xl font-semibold mb-4 p-4">Contact Us</h2>
          <p>We Want To Hear From You</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white bg-opacity-80 p-8 rounded-lg"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-gray-700">
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-gray-700">
                Last Name:
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#BC4C2A] text-white py-2 px-6 rounded-md shadow-md transition duration-300 transform hover:scale-105"
          >
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
