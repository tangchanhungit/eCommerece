<?php

namespace App\Http\Controllers;

use App\Http\Middleware\StoreRequest;
use App\Models\User;

class UserController extends Controller
{
    //
    public function index(){
        return response()->json(User::all(), 200);
    }

    public function create(StoreRequest $request){
        $user = User::create($request->all());
        return response()->json($user, 201);
    }

    public function show($id){
        $user = User::find($id);
        if($user){
            return response()->json($user,201);
        }else{
            return response()->json(['error'=>'User not found'],404);
        }
    }

    public function update(StoreRequest $request, $id){
        $user = User::find($id);
        if($user){
            $user->update($request->all());
            return response()->json($user, 201);
        }else{
            return response()->json(['error' =>'User not found'], 404);
        }
    }

    public function destroy($id){
        $user = User::find($id);
        if($user){
            $user->delete();
            return response()->json(['message', 'User deleted'],201);
        }else{
            return response()->json(['error', 'User not found'], 404);
        }
    }
}
