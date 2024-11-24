<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Business extends Model
{
    /** @use HasFactory<\Database\Factories\BusinessFactory> */
    use HasFactory , SoftDeletes;

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
