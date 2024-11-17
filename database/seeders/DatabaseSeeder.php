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

        User::factory()->create( [
                'name' => 'Test User',
                'email' => 'admin@admin.com',
                'phone' => '1234567890',
                'referral_code' => rand(100000, 999999),
                'password' => bcrypt('11111111'),
                'email_verified_at' => now(),
                'type' => 'admin']);

        User::factory()->create([
                'name' => 'Test User',
                'email' => 'user@user.com',
                'phone' => '12345678901',
                'referral_code' => rand(100000, 999999),
                'password' => bcrypt('11111111'),
                'email_verified_at' => now(),
                'type' => 'user']);

        // Bussiness
        Business::factory(200)->create();

    }
}
