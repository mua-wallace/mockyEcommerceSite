import Header from "./Header";
import {useState} from 'react';
function AddProduct() {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuatity] = useState("");
    const [delivery_date, setDelivery_date] = useState("");
    async function addProduct() {
        console.warn(name, category,image,description,price, quantity, delivery_date);
        const bodyFormData  = new FormData();
     bodyFormData.append('image', image);
     bodyFormData.append('name', name);
     bodyFormData.append('category', category);
     bodyFormData.append('description', description);
     bodyFormData.append('price', price);
     bodyFormData.append('quantity', quantity);
     bodyFormData.append('delivery_date', delivery_date);
        let result = await fetch("http://localhost:8000/api/addProduct", {
            method: "POST", 
            body: bodyFormData,
            headers: {
                "Content-Type":'multipart/form-data'
            }
        });
        console.warn(result);
        alert('data has been saved');
    }
    return (
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
            <br />
            <input type="text" onChange={(e) =>setName(e.target.value)} className="form-control" placeholder="name"/> <br />
            <input type="text" onChange={(e)=>setCategory(e.target.value)} className="form-control" placeholder="category"/> <br />
            <input type="file" onChange={(e)=>setImage(e.target.files[0])} className="form-control" placeholder="image"/> <br />
            <input type="text" onChange={(e)=>setDescription(e.target.value)} className="form-control" placeholder="description"/> <br />
            <input type="text" onChange={(e)=>setPrice(e.target.value)} className="form-control" placeholder="price"/> <br />
            <input type="text" onChange={(e)=>setQuatity(e.target.value)} className="form-control" placeholder="quantity"/> <br />
            <input type="text" onChange={(e)=>setDelivery_date(e.target.value)} className="form-control" placeholder="delivery date"/> <br />
            <button onClick={addProduct} className="btn btn-primary" >Add Product</button>
            </div>
        </div>
    )
}
export default AddProduct;