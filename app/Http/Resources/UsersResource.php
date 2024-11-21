<?php

namespace App\Http\Resources;

use App\Services\CommonService;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UsersResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'lastname' => $this->lastname,
            'email' => $this->email,
            'remember_code' => CommonService::generateReferralToken($this->remember_code),
            'status' => $this->status,
            'phone' => $this->phone,
            'subscribed_end_at' =>(Carbon::parse($this->subscribed_end_at)->diff())->format('%y years, %m months, %d days'),
            'created_at' => Carbon::parse($this->created_at)->diffForHumans(),
            'updated_at' => $this->updated_at,
        ];
    }
}
