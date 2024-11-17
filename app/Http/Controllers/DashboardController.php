<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    //

    public function index()
    {
        $user = auth()->user();
        if ($user->type == 'admin') {
            return Inertia::render('Dashboard');
        }else{
            return Inertia::render('Users/Dashboard');
        }
    }
}
