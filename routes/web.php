<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home',['userId' => 1,]);
});

Route::get('/users', function () {
    return Inertia::render('Users');
});
