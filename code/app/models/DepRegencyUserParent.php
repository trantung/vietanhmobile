<?php

use Illuminate\Auth\UserTrait;
use Illuminate\Auth\UserInterface;
use Illuminate\Auth\Reminders\RemindableTrait;
use Illuminate\Auth\Reminders\RemindableInterface;
use Illuminate\Database\Eloquent\SoftDeletingTrait;


class DepRegencyUserParent extends Eloquent {
	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'dep_regency_user_parent';

	/** 
	 * The attributes excluded from the model's JSON form. 
	 *
	 * @var array 
	 */
	protected $fillable = array('user_id', 'dep_id', 'regency_id', 'status', 'parent_user_id');

	public static function getOptionDep()
	{
		$option = self::where('user_id', User::getUserIdByAuth())->lists('dep_id');
		$dep = Department::whereIn('id', $option)->lists('name', 'id');
		return $dep;

	}
}
  