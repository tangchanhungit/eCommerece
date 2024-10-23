<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home',['name' => 'Hung']);
});

Route::get('/users', function () {
    return Inertia::render('UserList');
});
