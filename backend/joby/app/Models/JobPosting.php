<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class JobPosting extends Model
{
    protected $fillable = [
        'title',
        'city',
        'min_salary',
        'max_salary',
        'min_age',
        'max_age',
        'start_date',
        'interview_date',
        'actions',
        'courses_required',
        'experience_required',
        'benefits',
        'created_by',
    ];

    protected $casts = [
        'actions' => 'array',
        'courses_required' => 'array',
        'benefits' => 'array',
        'start_date' => 'date',
        'interview_date' => 'date',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }
}
