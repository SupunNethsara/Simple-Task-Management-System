<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTaskRequest;
use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{

    public function index()
    {

    }


    public function store(StoreTaskRequest $request)
    {
        $validated = $request->validated();


       try{
            $task = Task::create([
                'project_name' => $validated['projectname'],
                'title' => $validated['projecttitle'],
                'description' => $validated['description'],
                'priority' => $validated['priority'],
                'open_date' => $validated['opendate'],
                'close_date' => $validated['closedate']
            ]);
            return response()->json([
               'sucess'=>true,
                'message' => 'Task created successfully',
                'data' => $task
            ],201);
       }catch (\Exception $e){
           return response()->json([
               'success' => false,
               'message' => 'Failed to create task',
               'error' => $e->getMessage()
           ], 500);
       }
    }


    public function show(string $id)
    {

    }

    public  function count()
    {
$count = Task::count();

return response()->json([
   'success'=>true,
    'count'=>$count,
]);
    }


    public function update(Request $request, string $id)
    {

    }


    public function destroy(string $id)
    {

    }
}
