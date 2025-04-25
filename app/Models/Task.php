<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected  $fillable = [
        'project_name',
        'title',
        'description',
        'priority',
        'open_date',
        'close_date'
    ];
    protected $casts = [
        'open_date' => 'date',
        'close_date' => 'date',
    ];
}
