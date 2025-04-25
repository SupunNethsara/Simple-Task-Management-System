<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreTaskRequest extends FormRequest
{

    public function authorize(): bool
    {
        return true;
    }


    public function rules(): array
    {
        return [
            'projectname' => 'required|string',
            'projecttitle' => 'required|string',
            'description' => 'required',
            'priority' => 'required|in:low,medium,high',
            'opendate' => 'required|date',
            'closedate' => 'required|date|after_or_equal:opendate'
        ];
    }
}
