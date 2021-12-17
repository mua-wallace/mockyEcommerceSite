import { withRouter } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Header from "./Header";


function UpdateProduct(props) {
    const [data, setData] = useState([]);
    useEffect(() => {
        (async () => {
            let result = await fetch("http://localhost:8000/api/product/" + props.match.params.id);
            result = await result.json()
            setData(result);
        })()
    });

    return (
        <div>
            <Header />;
            <h1>Update prodduct Page</h1>
            <div className="col-sm-6 offset-sm-3">
                <input type="text" defaultValue={data.name} /> <br /> <br />
                <input type="text" defaultValue={data.category} /> <br /> <br />
                <input type="text" defaultValue={data.description} /> <br /> <br />
                <input type="text" defaultValue={data.quantity} /> <br /> <br />
                <input type="text" defaultValue={data.price} /> <br /> <br />
                <input type="text" defaultValue={data.delivery_date} /> <br /> <br />
                <input type="file" defaultValue={data.file_path} /> <br /> <br />
                <img style={{ width: 100 }} src={"http://localhost:8000/" + data.file_path} alt="" /> <br /> <br />
                <button className="btn btn-success"> Update Product</button>
            </div>

        </div>
    )
}
export default withRouter(UpdateProduct);