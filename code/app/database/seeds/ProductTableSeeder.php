<?php

class ProductTableSeeder extends Seeder {

	public function run()
	{
		Products::create([
				'parent_id'=>'1',
				'type_id'=>'1',
				'color'=> 'vang',
				'name'=> 'Sony Z1',
				'description'=> '<p><a href="http://choinhanh.vn/game-ban-gai/phong-kham-trong-rung">Phòng khám trong rừng</a> &nbsp;là thuộc thể loại <a href="http://choinhanh.vn/game-ban-gai/">game bạn gái</a>.&nbsp;Là người yêu quý muông thú, không thể làm ngơ trước những chú gấu vô tội bị thương, Clindy đã tự mình mở một phòng khám trong rừng để chăm sóc cho muôn loài. Hãy là cộng sự đắc lực cho Clindy để có thể cứu được các loài vật quý hiếm.</p>

<p>Nhiệm vụ của bạn vô cùng đơn giản, mỗi chú thú rừng sẽ có những phương pháp chữa trị khác nhau, bạn chỉ cần làm theo những hướng dẫn rất cụ thể của bác sỹ Clindy để giúp chúng mau lành bệnh. <a href="http://choinhanh.vn/">Choinhanh.vn </a>chúc bạn chơi game vui vẻ!</p>

<p><strong>Video hướng dẫn game Phòng khám trong rừng:</strong></p>

<p><iframe frameborder="0" height="360" src="https://www.youtube.com/embed/EEMDM-qDWJE" width="100%"></iframe></p>

<p>&nbsp;</p>

<p>&nbsp;</p>
',
				'link_youtube'=> 'https://www.youtube.com/watch?v=-_gVFOKucGM',
				'price'=> '1000000',
				'size'=> '1440 x 2560px',
				'pixel'=> '5.1"',
				'operate'=> '7.9',
				'chip'=> 'Exynos 8890, 8 nhân, Mali-T880 MP12',
				'ram'=> '3GB',
				'camera_front'=> '10MGP',
				'camera_back'=> '20MGB',
				'memory'=> '64GB',
				'pin'=> '10000MHA',
				'image_url'=> 'http://localhost:8000/assets/image/anh1.jpg',
				'weight_number'=> '1',
				'status'=> '1',
			]);
		

	}

}