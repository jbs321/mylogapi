<?php

namespace App;

use App\Traits\IdEncrypterTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Crypt;

class Category extends Model
{
    public $timestamps = false;

    protected $table = 'categories';

    protected $fillable = [
        'name'
    ];
}
