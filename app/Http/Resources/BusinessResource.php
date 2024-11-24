<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class BusinessResource extends JsonResource
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
            'image' => $this->image && !(str_starts_with($this->image, 'http')) ? Storage::url($this->image) : '#   ',
            'description' => $this->description,
            'created_at' => Carbon::parse($this->created_at)->diffForHumans(),
            'max_reviews' => $this->max_reviews,
            'reviewed_count' => $this->reviewed_count,
            'bussness_link' => $this->bussness_link,
            'phone' => $this->phone,
            'status' => $this->status,
        ];
    }
}
