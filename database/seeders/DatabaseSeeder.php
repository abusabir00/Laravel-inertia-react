<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Business;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'abusabir1990@gmail.com',
            'password' => bcrypt('11111111'),
            'email_verified_at' => now(),
        ]);

        // Bussiness
        Business::factory(200)->create();

    }
}
