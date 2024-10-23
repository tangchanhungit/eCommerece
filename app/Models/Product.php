<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class Product extends Model
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'price',
        'description',
    ];

    public function categories()
    {
        return $this->belongsToMany(ProductCategory::class, 'product_category');
    }

    public function orders()
    {
        return $this->belongsToMany(Order::class, 'order_product')->withPivot('quantity');
    }
}
