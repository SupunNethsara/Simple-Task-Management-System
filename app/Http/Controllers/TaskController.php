<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Models\Task;
use http\Env\Response;
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


        try {
            $task = Task::create([
                'project_name' => $validated['projectname'],
                'title' => $validated['projecttitle'],
                'description' => $validated['description'],
                'priority' => $validated['priority'],
                'open_date' => $validated['opendate'],
                'close_date' => $validated['closedate']
            ]);
            return response()->json([
                'sucess' => true,
                'message' => 'Task created successfully',
                'data' => $task
            ], 201);
        } catch (\Exception $e) {
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

    public  function completedcount()
    {
       try{
       $count = Task::where('status','completed')->count();

       return response()->json([
          'success'=>true,
          'count'=>$count,
       ]);
       }
       catch (\Exception $e){
           return response()->json([
               'success' => false,
               'message' => 'Error counting completed tasks',
               'error' => $e->getMessage()
           ], 500);
       }
    }
    public function getCompletedTasks()
    {
        try {
            $tasks = Task::where('status', 'completed')->get();
            return response()->json($tasks);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Failed to retrieve completed tasks.',
                'message' => $e->getMessage()
            ], 500);
        }
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

    public function update(UpdateTaskRequest $request, $id)
    {
        try {
            $task = Task::findOrFail($id);

            $validated = $request->validated();

            $task->update([
                'project_name' => $validated['projectname'],
                'title' => $validated['projecttitle'],
                'description' => $validated['description'],
                'priority' => $validated['priority'],
                'open_date' => $validated['opendate'],
                'close_date' => $validated['closedate']
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Task updated successfully',
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
}

