import { useState, useEffect } from "react";
import axios from "axios";

const HotelReservation = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [numOfGuests, setNumOfGuests] = useState(1);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=10")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  const handleReservationSubmit = (event) => {
    event.preventDefault();
    console.log("Reservation submitted!");
    console.log("Selected product:", selectedProduct);
    console.log("Check-in date:", checkInDate);
    console.log("Check-out date:", checkOutDate);
    console.log("Number of guests:", numOfGuests);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Réservation d'hôtel</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          {selectedProduct ? (
            <form onSubmit={handleReservationSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="check-in-date"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Date d'arrivée
                </label>
                <input
                  type="date"
                  id="check-in-date"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={checkInDate}
                  onChange={(event) => setCheckInDate(event.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="check-out-date"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Date de départ
                </label>
                <input
                  type="date"
                  id="check-out-date"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={checkOutDate}
                  onChange={(event) => setCheckOutDate(event.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="num-of-guests"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Nombre d'invités
                </label>
                <input
                  type="number"
                  id="num-of-guests"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={numOfGuests}
                  onChange={(event) => setNumOfGuests(event.target.value)}
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Réserver
              </button>
            </form>
          ) : (
            <p>Veuillez sélectionner un produit pour effectuer une réservation.</p>
          )}
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Sélectionnez un produit</h2>
          <div className="overflow-y-scroll max-h-96">
            {products.map((product) => (
              <div
                key={product.id}
                className={`p-4 mb-4 border rounded cursor-pointer ${
                  selectedProduct?.id === product.id ? "bg-blue-100" : ""
                }`}
                onClick={() => handleProductSelect(product)}
              >
                <h3 className="text-lg font-bold mb-2">{product.title}</h3>
                <p className="text-gray-700">{product.description}</p>
                <p className="text-gray-700 font-bold mt-2">
                  {product.price} €
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelReservation;