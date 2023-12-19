import { Link } from "react-router-dom";

const HandbagQuote = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-cover bg-center text-white my-8">
      <div
        className="absolute inset-0 w-full h-full bg-black opacity-60"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1626931291835-f1d59553aa2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGhhbmRiYWdzfGVufDB8fDB8fHww')",
        }}
      ></div>

      <div className="text-center z-10">
        <h2 className="text-3xl italic mb-4 text-[#333]">
          &quot;Life is too short to carry a boring handbag. Spice up your
          outfit and carry a bag that says, &apos;I&apos;m here for the
          adventure, and I look fabulous doing it!&apos;&quot;
        </h2>
        <Link to="/Shop">
          <button className="hover:bg-[#FFF] hover:text-[#BC4C2A] mt-6 py-3 px-8 text-[#333] bg-transparent border border-[#BC4C2A] transition duration-300">
            Explore Handbags
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HandbagQuote;
