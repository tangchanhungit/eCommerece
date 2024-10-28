<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRequest;
use \App\Models\Role;

class RoleController extends Controller
{
    //
    public function index(){
        return response()->json(Role::all(), 200);
    }

    public function create(StoreRequest $request){
        $Role = Role::create($request->all());
        return response()->json($Role, 201);
    }

    public function show($id){
        $Role = Role::find($id);
        if($Role){
            return response()->json($Role,201);
        }else{
            return response()->json(['error'=>'Role not found'],404);
        }
    }

    public function update(StoreRequest $request, $id){
        $Role = Role::find($id);
        if($Role){
            $Role->update($request->all());
            return response()->json($Role, 201);
        }else{
            return response()->json(['error' =>'Role not found'], 404);
        }
    }

    public function destroy($id){
        $Role = Role::find($id);
        if($Role){
            $Role->delete();
            return response()->json(['message', 'Role deleted'],201);
        }else{
            return response()->json(['error', 'Role not found'], 404);
        }
    }
}
