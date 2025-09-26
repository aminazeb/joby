<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\JobPosting;
use App\Models\User;

class JobPostingSeeder extends Seeder
{
    public function run(): void
    {
        $admin = User::where('email', 'admin@example.com')->first();
        $user = User::where('email', 'user@example.com')->first();

        JobPosting::create([
            'title' => 'Senior Developer',
            'city' => 'New York',
            'min_salary' => 80000,
            'max_salary' => 120000,
            'min_age' => 25,
            'max_age' => 40,
            'start_date' => now(),
            'interview_date' => now()->addWeek(),
            'actions' => json_encode(['apply', 'refer']),
            'courses_required' => json_encode(['CS101', 'CS102']),
            'experience_required' => '5+ years',
            'benefits' => json_encode(['health', '401k']),
            'created_by' => $admin ? $admin->id : null,
        ]);

        JobPosting::create([
            'title' => 'Junior Designer',
            'city' => 'San Francisco',
            'min_salary' => 50000,
            'max_salary' => 70000,
            'min_age' => 21,
            'max_age' => 30,
            'start_date' => now(),
            'interview_date' => now()->addDays(10),
            'actions' => json_encode(['apply']),
            'courses_required' => json_encode(['Design101']),
            'experience_required' => '1+ years',
            'benefits' => json_encode(['dental']),
            'created_by' => $user ? $user->id : null,
        ]);
    }
}
