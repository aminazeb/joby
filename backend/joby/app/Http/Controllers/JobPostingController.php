<?php

namespace App\Http\Controllers;

use App\Models\JobPosting;
use Orion\Http\Requests\Request;
use Illuminate\Support\Facades\Auth;
use Orion\Http\Controllers\Controller;
use Orion\Concerns\DisableAuthorization;

class JobPostingController extends Controller
{
    use DisableAuthorization;

    protected $model = JobPosting::class;

    protected function beforeStore(Request $request, $model)
    {
        if (!$request->has('created_by')) {
            $model->created_by = Auth::user()->id;
        }
    }
}
