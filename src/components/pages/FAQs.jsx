import Layout from "../Layout";
import { useEffect } from "react";

const FAQs = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="max-w-xl mx-auto p-8 bg-[#fff] rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-8 text-[#BC4C24]">
          Frequently Asked Questions (FAQs)
        </h1>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            1. How can I place an order?
          </h2>
          <p className="text-gray-700">
            To place an order, simply browse our collection of handbags, select
            the one you love, and click the &quot;Add to Cart&quot; button. Once
            you&apos;re ready to complete your purchase, go to your shopping
            cart and follow the checkout process.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            2. What payment methods do you accept?
          </h2>
          <p className="text-gray-700">
            We accept a variety of payment methods, including major credit cards
            (Visa, MasterCard), PayPal, and other secure payment options.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            3. Is my personal information secure?
          </h2>
          <p className="text-gray-700">
            Yes, we take the security of your personal information seriously.
            Our website uses industry-standard encryption to protect your data
            during the ordering and checkout process.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            4. How can I track my order?
          </h2>
          <p className="text-gray-700">
            Once your order has been shipped, you will receive a confirmation
            email with a tracking number. You can use this number to track your
            order on our website or the courier&apos;s site.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            5. What is your return policy?
          </h2>
          <p className="text-gray-700">
            Our return policy allows you to return unused items within 30 days
            of purchase. Please review our detailed return policy for more
            information on how to initiate a return.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default FAQs;
