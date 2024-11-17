<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Referral extends Model
{
    //

    protected $fillable = ['referrer_id', 'referral_id', 'level'];

    /**
     * Get the user who made the referral.
     */
    public function referrer()
    {
        return $this->belongsTo(User::class, 'referrer_id');
    }

    /**
     * Get the user who was referred.
     */
    public function referral()
    {
        return $this->belongsTo(User::class, 'referral_id');
    }
}
