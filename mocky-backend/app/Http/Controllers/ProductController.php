<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    //
    function addProduct(Request $req) {
        $product = new Product;
        $product->name= $req->input('name');
        $product->category= $req->input('category');
        $product->description= $req->input('description');
        $product->price= $req->input('price');
        $product->quantity= $req->input('quantity');
        $product->delivery_date= $req->input('delivery_date');
        $product->file_path= $req->file('file_path')->store('products');
        $product->save();
        return  $product;
    }
}
