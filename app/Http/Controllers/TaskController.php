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
        $request->validate([
            'title' => 'required|string',
            'priority' => 'in:low,medium,high'
        ]);

        Task::create($request->all());
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
