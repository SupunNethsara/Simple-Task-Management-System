<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/tasks', [\App\Http\Controllers\TaskController::class, 'store']);
Route::get('/tasks/count', [\App\Http\Controllers\TaskController::class, 'count']);
Route::get('/tasks/gettask', [\App\Http\Controllers\TaskController::class, 'show']);
Route::put('/tasks/{id}/complete', [\App\Http\Controllers\TaskController::class, 'markCompleted']);
Route::delete('/tasks/{id}/delete', [\App\Http\Controllers\TaskController::class, 'destroy']);
Route::get('/tasks/getcount',[\App\Http\Controllers\TaskController::class,'completedcount']);
Route::get('/tasks/completetask',[\App\Http\Controllers\TaskController::class,'getCompletedTasks']);
