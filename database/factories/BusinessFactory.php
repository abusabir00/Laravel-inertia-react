<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Business>
 */
class BusinessFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'name' => $this->faker->name(),
            'max_reviews' => rand(0, 100),
            'reviewed_count' => rand(0, 100),
            'bussness_link' => $this->faker->url(), 
            'image' => $this->faker->imageUrl(),
            'description' => $this->faker->sentence(),
            'address' => $this->faker->address(),
            'phone' => $this->faker->phoneNumber(),
            'status' => $this->faker->randomElement(['active', 'inactive', 'pending']),
            'created_by' => 1,
            'updated_by' => 0
        ];
    }
}
