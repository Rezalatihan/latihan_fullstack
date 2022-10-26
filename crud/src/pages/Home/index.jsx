import { Link } from "react-router-dom";
import "./index.scss";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getProduk();
  }, []);

  const getProduk = async () => {
    const response = await axios.get("http://localhost:3000/api/v3/product");
    setProduct(response.data);
  };

  const deletProduk = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/v3/product/${id}`);
      getProduk();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main">
      <Link to="/tambah" className="btn btn-primary">
        Tamah Produk
      </Link>
      <div className="search">
        <input type="text" placeholder="Masukan kata kunci..." />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th className="text-right">Price</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {product.map((product, index) => (
            <tr key={product._id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td className="text-right">{"Rp." + product.price}</td>
              <td className="text-center">
                <Link to={`detail/${product._id}`} className="btn btn-sm btn-info">
                  Detail
                </Link>
                <Link to={`edit/${product._id}`} className="btn btn-sm btn-warning">
                  Edit
                </Link>
                <button onClick={() => deletProduk(product._id)} className="btn btn-sm btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
