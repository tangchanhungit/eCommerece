<?php

namespace App\Http\Controllers;

use App\Http\Middleware\StoreRequest;
use App\Models\Product;

class ProductController extends Controller
{
    public function index(){
        return response()->json(Product::all(),200);
    }

    public function create(StoreRequest $request){
        $product = Product::create($request->all());
        return response()->json($product,201);
    }

    public function show($id){
        $product = Product::find($id);
        if($product){
            return response()->json($product, 201);
        }else{
            return response()->json(['error', 'Product not found'], 404);
        }
    }

    public function update(StoreRequest $request,$id){
        $product = Product::find($id);
        if($product){
            $product->update($request->all());
            return response()->json($product, 201);
        }else{
            return response()->json(['error', 'Product not found'], 404);
        }
    }

    public function destroy($id){
        $product = Product::find($id);
        if($product){
            $product->delete();
            return response()->json(['message', 'Product deleted'], 201);
        }else{
            return response()->json(['error', 'Product not found'], 404);
        }
    }
}
