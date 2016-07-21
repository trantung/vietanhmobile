<?php

use Illuminate\Auth\UserInterface;
use Illuminate\Auth\Reminders\RemindableInterface;
use Illuminate\Database\Eloquent\SoftDeletingTrait;
use Cviebrock\EloquentSluggable\SluggableInterface;
use Cviebrock\EloquentSluggable\SluggableTrait;

class Product extends Eloquent
{
	use SoftDeletingTrait;
    protected $table = 'products';
    protected $fillable = ['parent_id', 'description',
    	'image_url', 'price', 'name', 'short_des', 'weight_number', 'status'];
    protected $dates = ['deleted_at'];

}
