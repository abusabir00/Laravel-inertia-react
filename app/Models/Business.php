<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Business extends Model
{
    /** @use HasFactory<\Database\Factories\BusinessFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'image',
        'bussness_link',
        'address',
        'phone',
        'max_reviews',
        'description',
        'created_by',
        'updated_by',
    ];
}
