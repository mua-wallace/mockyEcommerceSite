import Header from "./Header";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { API_URL } from "./config/api";
function ProductList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      let result = await fetch(API_URL + "list");
      result = await result.json();
      setData(result);
    })();
  }, []);
  console.warn("result", data);
  return (
    <div>
      <Header />
      <h1>Product List</h1>
      <div className="col-sm-9 offset-sm-2">
      <Table>
      <tr>
        <td>Id</td>
        <td>Name</td>
        <td>Category</td>
        <td>Description</td>
        <td>Quantity</td>
        <td>Price</td>
        <td>Delivery date</td>
        <td>Image</td>
        <td>Operation</td>
        
      </tr>
      {
          data.map((item) =>
          <tr>  
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.category}</td>
        <td>{item.description}</td>
        <td>{item.quantity}</td>
        <td>{item.price}</td>
        <td>{item.delivery_date}</td>
        <td><img style={{width:100}} src={"http://localhost:8000/"+item.file_path} alt=""/></td>
        <td><span className="delete">Delete</span></td>
      </tr>
          )
      }
    </Table>
      </div>
    </div>
  );
}
export default ProductList;
