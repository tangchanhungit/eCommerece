<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class RoleUserController extends Controller
{
    public function index()
    {
        // Fetch users with their roles
        $users = User::with('roles')->get(); // Assuming you have a roles relationship defined

        return response()->json($users);
    }
}

