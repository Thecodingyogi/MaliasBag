import Layout from "../Layout";
import bag from "../../assets/about-bag.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4">
        <div className="mx-6 flex flex-col justify-center items-center py-12 px-2">
          <h1 className="text-[#BC4C2A] text-3xl font-semibold">About Us</h1>
          <span className="w-10 h-[2px] bg-black mt-1"></span>
        </div>

        {/* About Us Section */}
        <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-8 py-8">
          <div className="md:w-1/2">
            <img
              src={bag}
              alt="Leather bag and flowers"
              className="w-full max-h-screen rounded-md shadow-md"
              loading="lazy"
            />
          </div>
          <div className="md:w-1/2 md:items-start mt-4">
            <p className="text-gray-600 leading-loose">
              MaliasBag is your go-to online store for handbags that blend
              style, functionality, and affordability. We believe that every
              woman deserves a handbag that complements her unique lifestyle.
            </p>
            <p className="text-gray-600 leading-loose mt-4">
              Our curated collection features a variety of handbags, from
              classic designs to trendy and chic styles. Whether you are
              exploring the city, heading to the office, or attending a special
              event, we have the perfect bag for every occasion.
            </p>
            <div className="flex justify-center items-center mt-6">
              <Link to="/Shop">
                <button className="hover:bg-[#BC4C2A] hover:text-white border border-[#BC4C2A] text-[#BC4C2A] bg-[#fff] py-2 px-6 rounded-sm shadow-md transition duration-300 transform hover:scale-105">
                  Explore Our Collection
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
