import Header from "./Header";
import { useState } from "react";
import { Table } from "react-bootstrap";



  function SearchProduct() {
    const [data, setData] =useState([]);
  async  function search(key) {
      console.warn(key);
      let result = await fetch("http://localhost:8000/api/search/"+key);
      result = await result.json();
      console.warn(result);
      setData(result);

    }
    return (
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
             <h1>Search Product</h1>
             <br />
             <input  type="text" onChange ={(e) => search(e.target.value)} className="form-control" placeholder="Seach product" />
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
             </tr>
                 )
             }
           </Table>
            
            </div>
        </div>
    )
}

export default SearchProduct;