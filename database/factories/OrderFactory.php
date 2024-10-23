<?php

namespace Database\Factories;

use App\Models\Order;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Order>
 */
class OrderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Order::class;

    public function definition()
    {
        return [
            'user_id' => User::factory(),
            'total_amount' => $this->faker->randomFloat(2, 20, 500), // Generate a random amount between $20 and $500
        ];
    }
}
