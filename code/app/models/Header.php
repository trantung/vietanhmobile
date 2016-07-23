<?php

use Illuminate\Auth\UserInterface;
use Illuminate\Auth\Reminders\RemindableInterface;
use Illuminate\Database\Eloquent\SoftDeletingTrait;

class Header extends Eloquent
{
	use SoftDeletingTrait;
    protected $table = 'headers';
    protected $fillable = ['logo', 'description'];
    protected $dates = ['deleted_at'];

}