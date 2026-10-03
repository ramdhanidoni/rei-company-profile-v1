export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      {/* NAV */}
      <nav className="flex justify-between items-center px-8 py-6 border-b">
        <h1 className="text-xl font-bold">REI Company</h1>
        <div className="flex gap-6 text-sm">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO FULL - ini yang kamu mau kemarin biar full di kantor */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-8">
        <h2 className="text-5xl font-bold mb-4">Welcome to REI Company Profile</h2>
        <p className="text-gray-600 max-w-2xl mb-8">
          Kami adalah perusahaan profesional yang bergerak di bidang konstruksi,
          properti, dan pengembangan bisnis terpercaya.
        </p>
        <div className="flex gap-4">
          <button className="bg-black text-white px-6 py-3 rounded-full">Get Started</button>
          <button className="border px-6 py-3 rounded-full">Learn More</button>
        </div>
        {/* Spacer biar bisa scroll full */}
        <div className="h-[20vh]"></div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-8 bg-gray-50">
        <h3 className="text-3xl font-bold text-center mb-10">About Us</h3>
        <p className="max-w-3xl mx-auto text-center text-gray-600">
          REI Company Profile adalah solusi digital untuk menampilkan profil perusahaan
          Anda secara profesional dan modern. Dibuat dengan Next.js & Tailwind.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-8">
        <h3 className="text-3xl font-bold text-center mb-10">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 border rounded-xl"><h4 className="font-bold">Construction</h4><p className="text-sm text-gray-600 mt-2">Pembangunan berkualitas tinggi.</p></div>
          <div className="p-6 border rounded-xl"><h4 className="font-bold">Property</h4><p className="text-sm text-gray-600 mt-2">Manajemen properti terbaik.</p></div>
          <div className="p-6 border rounded-xl"><h4 className="font-bold">Consulting</h4><p className="text-sm text-gray-600 mt-2">Konsultasi bisnis profesional.</p></div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-8 bg-black text-white text-center">
        <h3 className="text-3xl font-bold mb-4">Contact Us</h3>
        <p>Email: info@reicompany.com | WA: 0858-8241-6840</p>
      </section>
    </main>
  );
}
