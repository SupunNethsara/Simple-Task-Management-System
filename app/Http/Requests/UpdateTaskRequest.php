<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateTaskRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'projectname' => 'required|string|max:255',
            'projecttitle' => 'required|string|max:255',
            'description' => 'required|string',
            'priority' => 'required|in:High,Medium,Low',
            'opendate' => 'required|date',
            'closedate' => 'required|date|after_or_equal:opendate'
        ];
    }
}
