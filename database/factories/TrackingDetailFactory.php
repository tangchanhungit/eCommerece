<?php

namespace Database\Factories;

use App\Models\Order;
use App\Models\TrackingDetail;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\TrackingDetail>
 */
class TrackingDetailFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = TrackingDetail::class;

    public function definition()
    {
        return [
            'order_id' => Order::factory(),
            'status' => $this->faker->randomElement(['Pending', 'Shipped', 'Delivered', 'Cancelled']),
            'updated_at' => now(),
        ];
    }
}
