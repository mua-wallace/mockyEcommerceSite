<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    // addProduct function
    function addProduct(Request $req) {
        $product =new Product;
        $product->name = $req->input('name');
        $product->category = $req->input('category');
        $product->description = $req->input('description');
        $product->price = $req->input('price');
        $product->quantity = $req->input('quantity');
        $product->file_path = $req->file('image')->store('products');
        $product->delivery_date = $req->input('delivery_date');
        $product->save();
        return  $product; 
    }
    // list all products function
    function list() {
        return Product::all();
    }
    // delete function
    function delete($id) {
        $result = Product::where('id', $id)->delete();
        if($result){
            return ["result"=>"product has been deleleted"];
        }
        else {
            return ["result"=>"Ooooops!!! the operation failed or product no longer exist in Database"]; 
        }
    }
    // getProduct function to get a single product 
    function getProduct($id) {
        return Product::find($id); 
    }


}
