<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

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
    
}
