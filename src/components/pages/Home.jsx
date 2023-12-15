import Hero from "../Hero";
import BestSeller from "../BestSeller";
import HandbagQuote from "../HandbagQuote";
import Layout from "../Layout";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <BestSeller />
      <HandbagQuote />
    </Layout>
  );
};

export default Home;
