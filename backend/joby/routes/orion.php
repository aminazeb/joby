<?php

use Orion\Facades\Orion;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\JobPostingController;

Route::middleware('auth:sanctum')->group(function () {
    Orion::resource('job-postings', JobPostingController::class)->withSoftDeletes();
    Orion::resource('users', UserController::class);
});
