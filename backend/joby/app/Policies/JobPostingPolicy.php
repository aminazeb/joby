<?php

namespace App\Policies;

use Illuminate\Auth\Access\HandlesAuthorization;

class JobPostingPolicy
{
    use HandlesAuthorization;

    public function before($user, $ability)
    {
        if ($user->hasRole('admin', 'api')) {
            return true;
        }
    }
}
