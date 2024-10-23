<?php

namespace App\Http\Controllers;

use App\Http\Middleware\StoreRequest;
use App\Models\Order;

class OrderController extends Controller
{
    public function index(){
        return response()->json(Order::all(), 200);
    }

    public function show($id){
        $order = Order::find($id);
        if($order){
            return response()->json($order,201);
        }else{
            return response()->json(['error', "Order not found"], 404);
        }
    }

    public function create(StoreRequest $request){
        $order = Order::create($request->all());
        return response()->json($order, 201);
    }

    public function update(StoreRequest $request, $id){
        $order = Order::find($id);
        if($order){
            $order->update($request->all());
            return response()->json($order, 201);
        }else{
            return response()->json(['error', "Order not found"], 404);
        }
    }

    public function destroy($id){
        $user = Order::find($id);
        if($user){
            $user->delete();
            return response()->json(['message', 'Order deleted'],201);
        }else{
            return response()->json(['error', 'Order not found'], 404);
        }
    }
}
