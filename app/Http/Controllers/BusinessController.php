<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Business;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;
use App\Http\Resources\BusinessResource;
use App\Http\Requests\BusinessCreateRequest;

class BusinessController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        // get all business with pagination
        $businesses = Business::latest()->paginate(10);
        $businesses = BusinessResource::collection($businesses);
        return Inertia::render('Business/Index', [
            'businesses' => $businesses,
            'success' => session('success'),
            'error' => session('error')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //return view('business.create');
        return Inertia::render('Business/Form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(BusinessCreateRequest $request)
    {
       try {
            $data = $request->validated();
            /** @var $image \Illuminate\Http\UploadedFile */
            $image = $data['image'] ?? null;
            $data['created_by'] = Auth::id();
            $data['updated_by'] = Auth::id();
            if ($image) {
                if ($image instanceof \Illuminate\Http\UploadedFile) {
                    $data['image'] = $image->store('Business/' . Str::random(), 'public');
                }
            }
        $result = Business::create($data);

        return to_route('businesses.index')->with('success', 'Business created successfully');

        } catch (\Exception $e) {
            return Redirect::back()->with('error', $e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Business $business)
    {
        //
        //$business = Business::findOrFail($id);
        $business = new BusinessResource($business);
        return Inertia::render('Business/Form', ['business' => $business]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(BusinessCreateRequest $request, Business $business)
    {
        try {
            $data = $request->validated();
            $image = $data['image'] ?? null;
            $data['updated_by'] = Auth::id();
            if ($image) {
                if ($business->image) {
                    Storage::disk('public')->delete($business->image);
                }
                $data['image'] = $image->store('Business/' . Str::random(), 'public');
            }else{
                unset($data['image']);
            }
            $business->update($data);

            return to_route('businesses.index')
                ->with('success', "Business \"$business->name\" was updated");
        } catch (\Exception $e) {
            return Redirect::back()->with('error', $e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
       try {
            $business = Business::findOrFail($id);
            if ($business->image) {
                Storage::disk('public')->delete($business->image);
            }
            $business->delete();
            return to_route('businesses.index')->with('success', 'Business deleted successfully');
        } catch (\Exception $e) {
            return Redirect::back()->with('error', $e->getMessage());
        }
    }
}
