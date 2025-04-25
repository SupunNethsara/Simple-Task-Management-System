<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;

class TaskTest extends TestCase
{
    /**
     * A basic unit test example.
     */
    public function it_creates_a_task()
    {

        $taskData = [
            'title' => 'Buy groceries',
            'priority' => 'high'
        ];


        $response = $this->postJson('/api/tasks', $taskData);


        $response->assertStatus(201);
    }
}
