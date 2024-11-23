<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Business;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
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
        //
        $businesses = Business::latest()->paginate(10);
        $businesses = BusinessResource::collection($businesses);
        return Inertia::render('Business/Form', ['businesses' => $businesses]);
        //return to_route('businesses.index')->with('error', 'Business created successfully');
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
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
