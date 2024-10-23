<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Order extends Model
{
    //
    use HasFactory;

    protected $fillable = ["user_id", "total_amount"];
    public function users() : BelongsTo{
        return $this->belongsTo(User::class);
    }
    public function payments(): HasMany{
        return $this->hasMany(Payment::class);
    }

    public function trackingDetails(): HasMany{
        return $this->hasMany(TrackingDetail::class);
    }

    public function products(): BelongsToMany{
        return $this->belongsToMany(Product::class, "order_product")->withPivot('quantity');
    }
}
