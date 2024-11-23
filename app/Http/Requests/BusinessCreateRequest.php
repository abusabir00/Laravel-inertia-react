<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BusinessCreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     * array:7 [ // app/Http/Controllers/BusinessController.php:45
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'max:255'],
            'image' => ['nullable', 'image'],
            'bussness_link' => ['required', 'url'],
            'address' => ['required', 'max:255'],
            'phone' => ['required', 'max:255'],
            'max_reviews' => ['required', 'max:255', 'numeric'],
            'description' => ['nullable', 'max:500'],
        ];
    }
}
