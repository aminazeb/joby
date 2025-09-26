<?php

namespace App\Http\Resources;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $isLoginRoute = Route::getCurrentRoute()?->getController() instanceof AuthController && in_array(Str::after(Route::getCurrentRoute()->getActionName(), '@'), ['register', 'login']);

        return [
            'id' => $this->id,
            'name' => $this->name,
            'phone' => $this->phone,
            'email' => $this->email,
            'role' => $this->roles->pluck('name')[0] ?? 'user',
            'password' => $this->password,
            'token' => $this->when($isLoginRoute, fn() => $this->createToken('auth_token')->plainTextToken),
        ];
    }
}
