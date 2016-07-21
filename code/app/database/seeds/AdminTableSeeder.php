<?php

class AdminTableSeeder extends Seeder {

	public function run()
	{
		Admin::create([
				'email'=>'tuancuong@gmail.com',
				'password'=>Hash::make('123456'),
				'username'=> 'tuancuong',
				'role_id' => 1,
			]);
		Admin::create([
				'email'=>'trantunghn196@gmail.com',
				'password'=>Hash::make('123456'),
				'username'=> 'trantung',
				'role_id' => 1,
			]);
	}

}