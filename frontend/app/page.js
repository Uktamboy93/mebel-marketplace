import Link from "next/link";
// Bu yerda keyinchalik mahsulotlar API dan olinadi
const products = [
  { id: 1, name: "Zamonaviy divan", price: "1,200,000 so'm", image: "https://via.placeholder.com/300" },
  { id: 2, name: "Oshxona stoli", price: "850,000 so'm", image: "https://via.placeholder.com/300" },
  { id: 3, name: "Ofis kreslosi", price: "600,000 so'm", image: "https://via.placeholder.com/300" },
  { id: 4, name: "Yotoqxona to'plami", price: "3,500,000 so'm", image: "https://via.placeholder.com/300" },
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Uy uchun eng yaxshi mebellar</h1>
        <p className="text-lg text-gray-600 mt-2">Sifat, qulaylik va go'zallik</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-amber-600 font-bold mt-1">{product.price}</p>
              <button className="w-full mt-3 bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700">
                Savatga qo'shish
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}