"use client";

export default function Footer() {
  return (
    <footer className="bg-black/70 text-white py-6 w-full absolute bottom-0 left-0 z-[900]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold">Next Carousel</h2>
            <p className="text-gray-400">
              © {new Date().getFullYear()} Tresor Ngahame. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
