import "./globals.css";
import { CartProvider } from "../context/CartContext";
import Link from "next/link";

function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-amber-600">Mebel.uz</Link>
          <div className="flex items-center space-x-4">
            <Link href="/login" className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700">Kirish</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p>&copy; 2025 Mebel.uz. Barcha huquqlar himoyalangan.</p>
      </div>
    </footer>
  );
}


export const metadata = {
  title: "Mebel.uz - Onlayn mebel do'koni",
  description: "O'zbekiston bo'ylab sifatli mebellar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body className="bg-gray-50 text-gray-900">
        <CartProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}