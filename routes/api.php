<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/tasks', [\App\Http\Controllers\TaskController::class, 'store']);
