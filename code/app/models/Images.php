<?php

use Illuminate\Auth\UserInterface;
use Illuminate\Auth\Reminders\RemindableInterface;
use Illuminate\Database\Eloquent\SoftDeletingTrait;

class Images extends Eloquent
{
	use SoftDeletingTrait;
    protected $table = 'images';
    protected $fillable = ['name', 'slide_id', 'image_url'];
    protected $dates = ['deleted_at'];
	
	public function slide()
    {
    	return $this->belongsTo('AdminSlide', 'slide_id', 'id');
    }
}