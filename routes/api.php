<?php

use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Middleware\StoreRequest;

Route::middleware([StoreRequest::class])->group(function(){

    Route::controller(UserController::class)->group(function(){
        Route::get('/users','index');
        Route::prefix('/user')->group(function(){
            Route::post('/',  'create');
            Route::get('/{id}','show');
            Route::put('/{id}',  'update');
            Route::delete('/{id}','destroy');
        });
    });

    Route::controller(ProductController::class)->group(function(){
        Route::get('/products','index');
        Route::prefix("/product")->group(function(){
            Route::post('/ ','create');
            Route::get('/{id}','show');
            Route::put('/{id}', 'update');
            Route::delete('/{id}','destroy');
        });
    });

    Route::controller(OrderController::class)->group(function(){
        Route::get('/orders','index');
        Route::prefix("/order")->group(function(){
            Route::post('/ ','create');
            Route::get('/{id}','show');
            Route::put('/{id}', 'update');
            Route::delete('/{id}','destroy');
        });
    });
    
});


