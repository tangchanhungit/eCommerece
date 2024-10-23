<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class StoreRequest extends FormRequest
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */

     public function authorize()
    {
        return true;
    }
    public function rules()
    {
        return [
            'user_id' => 'required|exists:users,id',
            'total_amount' => 'required|numeric|min:0',
        ];
    }
    public function handle(Request $request, Closure $next): Response
    {
        if (!$request->has('created_at')) {
            $request->merge(['created_at' => now()]);
        }

        if (!$request->has('updated_at')) {
            $request->merge(['updated_at' => now()]);
        }

        return $next($request);
    }
}
