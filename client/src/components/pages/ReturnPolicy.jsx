import { Link } from "react-router-dom";
import Layout from "../Layout";
import { useEffect } from "react";

const ReturnPolicy = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg my-6">
        <h1 className="text-3xl font-bold mb-8 text-[#BC4C24]">
          Shipping and Returns Policy
        </h1>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
          <p className="text-gray-700">
            We offer reliable and secure shipping services to ensure that your
            handbags reach you in perfect condition. Here are some key points
            about our shipping process:
          </p>
          <ul className="list-disc pl-8">
            <li>Orders are typically processed within 1-2 business days.</li>
            <li>We provide both standard and expedited shipping options.</li>
            <li>
              Shipping costs are calculated at checkout based on your location.
            </li>
            <li>
              You will receive a confirmation email with tracking information
              once your order is shipped.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Return Policy</h2>
          <p className="text-gray-700">
            We want you to be completely satisfied with your purchase. If
            you&apos;re not happy with your handbag, you may return it under the
            following conditions:
          </p>
          <ul className="list-disc pl-8">
            <li>Returns are accepted within 30 days of the purchase date.</li>
            <li>
              Items must be unused, in their original condition, and with all
              tags attached.
            </li>
            <li>
              Return shipping costs are the responsibility of the customer.
            </li>
            <li>
              To initiate a return, please contact our customer support team.
            </li>
            <li>
              Refunds will be processed within 5-7 business days after receiving
              the returned item.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Damaged or Defective Items
          </h2>
          <p className="text-gray-700">
            In the rare event that you receive a damaged or defective handbag,
            please contact us immediately. We will arrange for a replacement or
            provide a full refund, including return shipping costs.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions or concerns about our shipping and returns
            policy, please don&apos;t hesitate to{" "}
            <Link to="/Contact" className="text-[#BC4C2A]">
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ReturnPolicy;
