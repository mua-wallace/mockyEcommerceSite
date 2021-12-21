import Header from "./Header";
import { useState } from 'react';
import { API_URL } from "./config/api";


function SearchProduct() {
   
    return (
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
             <h1>Search Product</h1>
             <br />
             <input  type="text" className="form-control" placeholder="Seach product" />
            </div>
        </div>
    )
}

export default SearchProduct;