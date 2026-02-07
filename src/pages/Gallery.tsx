import Header from "@/components/Header";
import Footer from "@/components/Footer";

const bgImage = new URL("../assets/services/construction1.jpg", import.meta.url).href;

const Gallery = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="bg-black/65 p-10 rounded-md text-center mx-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Projects Coming Soon</h1>
          <p className="text-white/80 max-w-xl mx-auto">We're preparing a portfolio of our fabrication, construction and maintenance work. Check back soon or contact us to request samples.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
