<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{

    public function index()
    {

    }


    public function store(Request $request)
    {
        Task::create([
            'title' => $request->title,
            'priority' => $request->priority
        ]);
        return response()->json([], 201);
    }


    public function show(string $id)
    {

    }


    public function update(Request $request, string $id)
    {

    }


    public function destroy(string $id)
    {

    }
}
