import Book from "../../components/canvas/Books";

const Home = () => {
  return (
    <section className="overflow-x-hidden">
      <div className="hero relative w-[100vw] h-[90vh] bg-primary-500">
        <h2 className="text-4xl absolute font-extrabold top-20 text-white left-6">
          &lt; Discover our captivating collection of books! / &gt;
        </h2>
        <Book />
      </div>
      
    </section>
  );
};

export default Home;
