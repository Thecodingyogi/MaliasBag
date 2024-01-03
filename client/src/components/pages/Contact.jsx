import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Layout from "../Layout";
import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log(import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
          toast.success("Thank you for contacting us!", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Error sending message. Please try again later.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
    e.target.reset();
  };

  return (
    <Layout>
      <div
        className="container mx-auto my-8 bg-cover bg-center"
        style={{
          background: `url(https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbnRhY3QlMjB1cyUyMEJyb3dufGVufDB8fDB8fHww) center/cover no-repeat`,
        }}
      >
        <div className="flex flex-col justify-center items-center py-6 text-[#fff]">
          <h2 className="text-4xl font-semibold mb-4 p-4">Contact Us</h2>
          <p>We Want To Hear From You</p>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
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
