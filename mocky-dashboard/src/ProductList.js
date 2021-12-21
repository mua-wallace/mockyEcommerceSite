import Header from "./Header";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { API_URL, API_URL_DEL } from "./config/api";
import {Link} from "react-router-dom";
function ProductList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  async function deleteOperation(id) {
    let result = await fetch(API_URL_DEL+id, {
      method: 'DELETE'
    });
    result= await result.json();
    console.log(result);
    getData();
  }

 async function getData(){
    let result = await fetch(API_URL + "list");
      result = await result.json();
      setData(result);
  }
  
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
        <td>{item.price}FCFA</td>
        <td>{item.delivery_date}</td>
        <td><img style={{width:100}} src={"http://localhost:8000/"+item.file_path} alt=""/></td>
        <td><span onClick={()=>deleteOperation(item.id)} className="delete">Delete</span></td>
        <td> <Link to={"update/"+item.id}><span className="update">Update</span></Link></td>
      </tr>
          )
      }
    </Table>
      </div>
    </div>
  );
}
export default ProductList;
