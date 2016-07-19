<?php

use Illuminate\Auth\UserTrait;
use Illuminate\Auth\UserInterface;
use Illuminate\Auth\Reminders\RemindableTrait;
use Illuminate\Auth\Reminders\RemindableInterface;
use Illuminate\Database\Eloquent\SoftDeletingTrait;

class Products extends Eloquent {

	use SoftDeletingTrait;

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'products';

	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	protected $fillable = array('parent_id', 'type_id', 'color', 'name', 'description', 'link_youtube', 'price', 'size', 'pixel', 'operate', 'chip', 'ram', 'camera_front', 'camera_back', 'memory', 'pin', 'image_url', 'weight_number', 'status');
    protected $dates = ['deleted_at'];

}
