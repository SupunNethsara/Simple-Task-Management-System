<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTaskRequest;
use App\Models\Task;
use Illuminate\Http\Request;
use mysql_xdevapi\Exception;

class TaskController extends Controller
{

    public function markCompleted($id)
    {
        try {
            $task = Task::findOrFail($id);
            $task->status = 'Completed';
            $task->save();

            return response()->json([
                'success' => true,
                'message' => 'Task marked as completed',
                'task' => $task
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to update task',
                'error' => $e->getMessage()
            ], 500);
        }
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


    public function show()
    {
        try {
            // Fetch all tasks
            $tasks = Task::all();

            return response()->json([
                'success' => true,
                'data' => $tasks
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Not Included Task',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public  function count()
    {
        try{
            $count = Task::count();

            return response()->json([
                'success'=>true,
                'count'=>$count,
            ]);
        }catch (\Exception $e){
            return response()->json([
                'success' => false,
                'message' => 'Task not found',
                'error' => $e->getMessage()
            ], 404);
        }

    }


    public function update(Request $request, string $id)
    {

    }


    public function destroy(string $id)
    {
        try{
            $task = Task::findOrFail($id);
            $task->delete();

            return response()->json([
                'sucess'=>true,
                'message'=>'Task is Deleted',

            ]);
        }
        catch (\Exception $e){
            return response()->json([
                'sucess'=>false,
                'message'=>'Have some Problem .can,t be Deleted Task',
                'error'=>$e->getMessage(),

            ]);
        }

    }
}
