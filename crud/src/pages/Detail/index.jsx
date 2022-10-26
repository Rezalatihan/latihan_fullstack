import { Link, useParams } from "react-router-dom";
import "./index.scss";
import { useState, useEffect } from "react";
import axios from "axios";

const Detail = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const { id } = useParams();

  useEffect(() => {
    getProdukById();
  }, []);

  const getProdukById = async () => {
    const response = await axios.get(`http://localhost:3000/api/v3/product/${id}`);
    setName(response.data.name);
    setPrice(response.data.price);
    setStock(response.data.stock);
  };

  return (
    <div className="main">
      <Link to="/" className="btn btn-primary">
        Kembali
      </Link>

      <table className="table">
        <tbody key={id}>
          <tr>
            <td>ID</td>
            <td>: {id}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>: {name}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>: {"Rp." + price}</td>
          </tr>
          <tr>
            <td>stock</td>
            <td>: {stock}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Detail;
