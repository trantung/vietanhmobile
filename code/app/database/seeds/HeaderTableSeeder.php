<?php

class HeaderTableSeeder extends Seeder {

	public function run()
	{
		Header::create([
				'description'=>'Mở cửa từ 9h - 21h hàng ngày 
				94 Thái Hà: (098.437.3333) - (096.455.3333)',
			]);
	}

}