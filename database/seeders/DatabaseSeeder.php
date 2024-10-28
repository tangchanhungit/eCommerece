<?php

namespace Database\Seeders;

use App\Models\Order;
use App\Models\User;
use App\Models\Product;
use App\Models\Role;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $roles = Role::factory()->count(3)->create(); // Creates 3 roles: admin, sale, guest
        
        // Create users
        User::factory()
            ->count(10)
            ->create()
            ->each(function ($user) use ($roles) {
                // Attach a random role to each user
                $user->roles()->attach($roles->random()->id); // Attach only one role
            });

        Product::factory()->count(10)->create();
        Order::factory()->count(5)->create();
    }
}
