<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable implements MustVerifyEmail
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'lastname',
        'phone',
        'referral_code',
        'otp',
        'referral_code',
        'subscribed_at',
        'subscribed_end_at',
        'email_verified_at',
        'email',
        'password',
        'type'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'subscribed_at' => 'datetime',
            'subscribed_end_at' => 'datetime',

        ];
    }

     /**
     * Get the referrals made by this user (Level 1).
     */
    public function referrals()
    {
        return $this->hasMany(Referral::class, 'referrer_id');
    }

    /**
     * Get the users who referred this user.
     */
    public function referrer()
    {
        return $this->belongsTo(Referral::class, 'referral_id');
    }

    /**
     * Get all users directly referred by this user (Level 1).
     */
    public function directReferrals()
    {
        return $this->referrals()->where('level', 1);
    }

    /**
     * Get all users indirectly referred by this user (Level 2).
     */
    public function indirectReferrals()
    {
        return $this->referrals()->where('level', 2);
    }
}
