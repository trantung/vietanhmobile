@include('fromtend.common.header');
@include('fromtend.common.top');
@include('fromtend.common.menu');
@include('fromtend.common.slide');
<div class="content">
	<div class="main-width">
		<section class="product-details">
			<div class="head">
				<div class="left">
					<h1 itemprop="name"><strong>{{$data->name}}</strong></h1>
				</div>
			</div>
			<div class="head-content">
				<div class="left">
					<div id="slider1_container" style="position:relative;width:720px;height:500px;overflow:hidden" jssor-slider="true">
						<img src="assets/image/anh1.jpg"/>
					</div>
				</div>
				<div class="right" style="background-color: #FFFFCC;">
					<div class="stock-status">
						<div class="list-color">
							<ul>
								<li>
									<a data-id="59" class="color-quad" href="javascript:;">
										<span class="black" title="Đen" style="background:#000000">Đen</span>
									</a>
								</li>
								<li>
									<a data-id="60" class="color-quad" href="javascript:;">
										<span title="Vàng" style="background:#FFFF00">Vàng</span>
									</a>
								</li>
								<li>
									<a data-id="76" class="color-quad" href="javascript:;">
										<span title="Bạc" style="background:#c3c4c9">Bạc</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="hh-block-clear">
						<div class="hh-block-price">
							<div class="label"><p>Giá:</p></div>
							<div class="data"><div class="product-price"><p><span itemprop="price">{{$data->price }} ₫</span></p></div>
							<div class="note"></div>
							<div class="priceNote"><p>Sản phẩm được tặng 1.700.000 vnđ tiền mặt</p></div></div>
						</div>
						<div class="colorNote" id="colorNote"></div>
					</div>
					<div class="block">
						<h4><strong>Khuyến mại</strong></h4>
						<ul class="ltsPromote">
							<li>
								<i class="fa fa-gift"></i>
								<a href="/tim-kiem.html?filters=71:3277">Hỗ trợ mua sạc dự phòng Pisen Portable Power 10000 mAh - Chính hãng với giá 350.000 vnđ</a>
							</li>
							<li>
								<i class="fa fa-gift"></i>
								<a href="/tim-kiem.html?filters=71:5027">Tặng ngay 1.700.000 VNĐ tiền mặt</a></li>
						</ul>
					</div>
				</div>
				<div class="share-hotline">
					<p class="hotline">Hotline bán hàng Online: <strong>19002091 - nhánh số 1 / 0946.56.26.46 / 0963.006.222.</strong></p>
				</div>
			</div>
			<div class="mid-content">
				<div class="left">
					<div class="info">
						<div class="product-video" id="productVideo">
							<h3>
								Video đánh giá, giới thiệu 
								<strong>Samsung Galaxy S7 - G930FD - Chính hãng</strong>
							</h3>
							<div class="hh-container">
								<div class="video-player" id="videoPlayer">
									<iframe width="480" height="270" src="{{ $data->link_youtube}}" frameborder="0" allowfullscreen=""></iframe>
								</div>
							</div>
						</div>
						<div class="product-prop">
							<h3>
								Chức năng chính 
								<strong>Samsung Galaxy S7 - G930FD - Chính hãng</strong>
							</h3>
							<div class="simple-prop">
								<p><label>Hãng sản xuất</label>: <span><a href="/tim-kiem.html?brand=4">Samsung</a></span></p>
								<p><label>Kích thước màn hình:</label> <span><a href="/tim-kiem.html?filters=17:4663">5.1"</a></span></p>
							   <p><label>Độ phân giải màn hình:</label> <span><a href="/tim-kiem.html?filters=18:3326">1440 x 2560px</a></span></p>
							   <p><label>Hệ điều hành:</label> <span><a href="/tim-kiem.html?filters=57:1323">Android OS</a></span></p>
							   <p><label>Chip xử lý (CPU):</label> <span><a href="/tim-kiem.html?filters=59:7534">Exynos 8890, 8 nhân, Mali-T880 MP12</a></span></p>
							   <p><label>RAM:</label> <span><a href="/tim-kiem.html?filters=60:95">4 GB</a></span></p>
							   <p><label>Máy ảnh chính:</label> <span><a href="/tim-kiem.html?filters=40:7359">12MP</a></span></p>
							   <p><label>Bộ nhớ trong:</label> <span><a href="/tim-kiem.html?filters=28:234">32 GB</a></span></p>
							   <p><label>Dung lượng pin (mAh):</label> <span><a href="/tim-kiem.html?filters=65:2485">3000 mAh</a></span></p>
							</div>
							
						</div>
					</div>
				</div>
				<div class="right">
					<div class="info">
						<div class="product-prop">
							<div class="head-block">
								<br><br><br><br><br><br>
							</div>
							<div class="simple-prop">
							<p><label>Hãng sản xuất</label>: <span><a href="/tim-kiem.html?brand=4">Samsung</a></span></p>
									<p><label>Kích thước màn hình:</label> <span><a href="/tim-kiem.html?filters=17:4663">5.1"</a></span></p>
								   <p><label>Độ phân giải màn hình:</label> <span><a href="/tim-kiem.html?filters=18:3326">1440 x 2560px</a></span></p>
								   <p><label>Hệ điều hành:</label> <span><a href="/tim-kiem.html?filters=57:1323">Android OS</a></span></p>
								   <p><label>Chip xử lý (CPU):</label> <span><a href="/tim-kiem.html?filters=59:7534">Exynos 8890, 8 nhân, Mali-T880 MP12</a></span></p>
								   <p><label>RAM:</label> <span><a href="/tim-kiem.html?filters=60:95">4 GB</a></span></p>
								   <p><label>Máy ảnh chính:</label> <span><a href="/tim-kiem.html?filters=40:7359">12MP</a></span></p>
								   <p><label>Bộ nhớ trong:</label> <span><a href="/tim-kiem.html?filters=28:234">32 GB</a></span></p>
								   <p><label>Dung lượng pin (mAh):</label> <span><a href="/tim-kiem.html?filters=65:2485">3000 mAh</a></span></p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="content"> 
				<p><span style="font-size: medium;">&nbsp;</span></p>
				<div class="left">
					<div class="block">
						<div class="head-block">
							<h4><strong>Sản phẩm HOT</strong></h4>
						</div>
						<ul class="other-device">
							<li>
								<a class="img" href="/huawei-y5ii-y5-2-chinh-hang-troi-bao-hanh-p8059.html"><img src="https://hoanghamobile.com/Uploads/Originals/2016/06/13/201606131054439549_hw_475129.jpg?mod=pad&amp;width=65&amp;height=65&amp;crop=auto"></a>
								<p class="name"><a href="/huawei-y5ii-y5-2-chinh-hang-troi-bao-hanh-p8059.html">Huawei Y5II (Y5 2) - Chính hãng - Trôi bảo hành</a> <span class="compare">(<a title="So sánh Samsung Galaxy S7 - G930FD - Chính hãng với Huawei Y5II (Y5 2) - Chính hãng - Trôi bảo hành" href="so-sanh-samsung-galaxy-s7-g930fd-chinh-hang-voi-huawei-y5ii-y5-2-chinh-hang-troi-bao-hanh-ss5475.8059.html">So sánh</a>)</span></p>
								<p class="price">1.690.000 ₫</p>
							</li>
							<li>
								<a class="img" href="/xiaomi-mi-4-lte-fpt-ram-2gb-troi-bao-hanh-p8058.html">
									<img src="https://hoanghamobile.com/Uploads/Originals/2016/06/23/201606232254036496_Untitled-1.jpg?mod=pad&amp;width=65&amp;height=65&amp;crop=auto">
								</a>
								<p class="name"><a href="/xiaomi-mi-4-lte-fpt-ram-2gb-troi-bao-hanh-p8058.html">Xiaomi Mi 4 - LTE - FPT - RAM 2GB - Trôi bảo hành</a> <span class="compare">(<a title="So sánh Samsung Galaxy S7 - G930FD - Chính hãng với Xiaomi Mi 4 - LTE - FPT - RAM 2GB - Trôi bảo hành" href="so-sanh-samsung-galaxy-s7-g930fd-chinh-hang-voi-xiaomi-mi-4-lte-fpt-ram-2gb-troi-bao-hanh-ss5475.8058.html">So sánh</a>)</span></p>
								<p class="price">2.350.000 ₫</p>
							</li>
							<li>
								<a class="img" href="/xiaomi-redmi-3x-32gb-p8055.html"><img src="https://hoanghamobile.com/Uploads/Originals/2016/07/15/201607151650346068_redmi-3x.jpg?mod=pad&amp;width=65&amp;height=65&amp;crop=auto"></a>
								<p class="name"><a href="/xiaomi-redmi-3x-32gb-p8055.html">Xiaomi Redmi 3X - 32GB</a> <span class="compare">(<a title="So sánh Samsung Galaxy S7 - G930FD - Chính hãng với Xiaomi Redmi 3X - 32GB" href="so-sanh-samsung-galaxy-s7-g930fd-chinh-hang-voi-xiaomi-redmi-3x-32gb-ss5475.8055.html">So sánh</a>)</span></p>
								<p class="price">2.990.000 ₫</p>
							</li>
						</ul>
					</div>
				</div>
				<div class="right">
					<div class="simple-prop">
						{{ $data->description }}
					</div>
				</div>
			</div>
		</section>
	</div>
	<div class="main-width">
		<div class="box-container">
			<div class="box-head">
				<a href="https://hoanghamobile.com/dien-thoai-di-dong-c14.html" class="box-title">Sản phầm cùng loại</a> 
			</div>
			<div class="product-list">
				<div class="list-content">
					<div class="row-item">
						<div class="list-item">
							<div class="box-border">
								<div class="hh-label hh-label-topright"><span class="label label-success">-18%</span></div>
								<div class="hh-label hh-label-right"><span class="label label-danger">HOT</span></div>
								<div class="mosaic-block">
									<a href="https://hoanghamobile.com/samsung-galaxy-a8-chinh-hang-p4715.html" class="mosaic-overlay" style="display: inline; opacity: 0;">
										<div class="details">
											<ul>
												<li>Bảo hành: Chính hãng 12 tháng, Bao xài - đổi trả trong 15 ngày đầu</li>
												<li>Khuyến mại: Hỗ trợ mua sạc dự phòng Pisen Portable Power 10000 mAh - Chính hãng với giá 350.000 vnđ, Tặng gậy tự sướng</li>
												<li>Giá trên đã bao gồm 10% VAT</li>
											</ul>
										</div>
									</a>
									<div class="mosaic-backdrop" style="display: block;"><img width="219" alt="Samsung Galaxy A8 - Chính hãng" height="170" src="assets/image/201606231641529374_samsung-galaxy-a8-a800.jpg"></div>
								</div>
								<div class="product-name">
									<h4><a href="https://hoanghamobile.com/samsung-galaxy-a8-chinh-hang-p4715.html">Samsung Galaxy A8 - Chính hãng</a></h4>
								</div>
							</div>
							<div class="product-price"><strike>9.090.000 ₫</strike> 7.490.000 ₫</div>
							<div class="product-addCart"><a href="javascript:;" class="btn-buy-popup" data-id="4715"><i class="fa fa-shopping-cart"></i> Mua ngay</a></div>
						</div>
						<div class="list-item">
							<div class="box-border">
								<div class="hh-label hh-label-right"><span class="label label-danger">HOT</span></div>
								<div class="mosaic-block">
									<a href="https://hoanghamobile.com/xiaomi-mi-4-white-16gb-ram-2gb-p4625.html" class="mosaic-overlay" style="display: inline; opacity: 0;">
										<div class="details">
											<ul>
												<li>Bảo hành: Bảo hành 12 tháng tại Hoàng Hà Mobile. Bao xài - đổi trả trong 15 ngày đầu</li>
												<li>Khuyến mại: ..., Hỗ trợ mua sạc dự phòng Pisen Portable Power 10000 mAh - Chính hãng với giá 350.000 vnđ</li>
											</ul>
										</div>
									</a>
									<div class="mosaic-backdrop" style="display: block;"><img width="219" alt="Xiaomi Mi 4 - White - 16GB - Ram 2GB" height="170" src="assets/image/201607051020487236_Xiaomi-Mi4.jpg"></div>
								</div>
								<div class="product-name">
									<h4><a href="https://hoanghamobile.com/xiaomi-mi-4-white-16gb-ram-2gb-p4625.html">Xiaomi Mi 4 - White - 16GB - Ram 2GB</a></h4>
								</div>
							</div>
							<div class="product-price">2.550.000 ₫</div>
							<div class="product-addCart"><a href="javascript:;" class="btn-buy-popup" data-id="4625"><i class="fa fa-shopping-cart"></i> Mua ngay</a></div>
						</div>
						<div class="list-item">
							<div class="box-border">
								<div class="hh-label hh-label-topright"><span class="label label-success">-15%</span></div>
								<div class="hh-label hh-label-right"><span class="label label-danger">HOT</span></div>
								<div class="mosaic-block">
									<a href="https://hoanghamobile.com/samsung-galaxy-j7-chinh-hang-p4786.html" class="mosaic-overlay" style="display: inline; opacity: 0;">
										<div class="details">
											<ul>
												<li>Bảo hành: Chính hãng 12 tháng, Bao xài - đổi trả trong 15 ngày đầu</li>
												<li>Khuyến mại: Hỗ trợ mua sạc dự phòng Pisen Portable Power 10000 mAh - Chính hãng với giá 350.000 vnđ</li>
												<li>Giá trên đã bao gồm 10% VAT</li>
											</ul>
										</div>
									</a>
									<div class="mosaic-backdrop" style="display: block;"><img width="219" alt="Samsung Galaxy J7 - Chính hãng" height="170" src="assets/image/201508011037345979_samsung-galaxy-j5-org-1.jpg"></div>
								</div>
								<div class="product-name">
									<h4><a href="https://hoanghamobile.com/samsung-galaxy-j7-chinh-hang-p4786.html">Samsung Galaxy J7 - Chính hãng</a></h4>
								</div>
							</div>
							<div class="product-price"><strike>5.290.000 ₫</strike> 4.500.000 ₫</div>
							<div class="product-addCart"><a href="javascript:;" class="btn-buy-popup" data-id="4786"><i class="fa fa-shopping-cart"></i> Mua ngay</a></div>
						</div>
						<div class="list-item">
							<div class="box-border">
								<div class="hh-label hh-label-right"><span class="label label-danger">HOT</span></div>
								<div class="mosaic-block">
									<a href="https://hoanghamobile.com/xiaomi-redmi-note-3-pro-ram-2gb-blackwhitegold-p5491.html" class="mosaic-overlay" style="display: inline; opacity: 0;">
										<div class="details">
											<ul>
												<li>Bảo hành: Bảo hành trong 12 tháng tại Hoàng Hà Mobile. Bao xài - đổi trả trong 15 ngày đầu</li>
												<li>Khuyến mại: Hỗ trợ mua sạc dự phòng Pisen Portable Power 10000 mAh - Chính hãng với giá 350.000 vnđ</li>
											</ul>
										</div>
									</a>
									<div class="mosaic-backdrop" style="display: block;"><img width="219" alt="Xiaomi Redmi Note 3 Pro - RAM 2GB - Black/White/Gold" height="170" src="assets/image/201607051030543198_redmi-note3-gray_2.jpg"></div>
								</div>
								<div class="product-name">
									<h4><a href="https://hoanghamobile.com/xiaomi-redmi-note-3-pro-ram-2gb-blackwhitegold-p5491.html">Xiaomi Redmi Note 3 Pro - RAM 2GB - Black/White/Gold</a></h4>
								</div>
							</div>
							<div class="product-price">3.150.000 ₫</div>
							<div class="product-addCart"><a href="javascript:;" class="btn-buy-popup" data-id="5491"><i class="fa fa-shopping-cart"></i> Mua ngay</a></div>
						</div>
						<div class="list-item">
							<div class="box-border">
								<div class="hh-label hh-label-right"><span class="label label-danger">HOT</span></div>
								<div class="mosaic-block">
									<a href="https://hoanghamobile.com/apple-iphone-6s-16gb-space-graywhitegoldrose-gold-p5021.html" class="mosaic-overlay" style="display: inline; opacity: 0;">
										<div class="details">
											<ul>
												<li>Bảo hành: Bảo hành 1 đổi 1 trong 12 tháng tại Hoàng Hà Mobile. Bao xài - đổi trả trong 15 ngày đầu</li>
												<li>Khuyến mại: ..., Hỗ trợ mua sạc dự phòng Pisen Portable Power 10000 mAh - Chính hãng với giá 350.000 vnđ</li>
												<li>Mới 100% - Chưa Active trên hệ thống của Apple</li>
											</ul>
										</div>
									</a>
									<div class="mosaic-backdrop" style="display: block;"><img width="219" alt="Apple iPhone 6S - 16GB - Space Gray/White/Gold/Rose Gold" height="170" src="assets/image/201603211015391056_iPhone 6s.png"></div>
								</div>
								<div class="product-name">
									<h4><a href="https://hoanghamobile.com/apple-iphone-6s-16gb-space-graywhitegoldrose-gold-p5021.html">Apple iPhone 6S - 16GB - Space Gray/White/Gold/Rose Gold</a></h4>
								</div>
							</div>
							<div class="product-price">14.550.000 ₫</div>
							<div class="product-addCart"><a href="javascript:;" class="btn-buy-popup" data-id="5021"><i class="fa fa-shopping-cart"></i> Mua ngay</a></div>
						</div>
					</div>
					<div class="row-item">
						<div class="list-item">
							<div class="box-border">
								<div class="hh-label hh-label-right"><span class="label label-danger">HOT</span></div>
								<div class="mosaic-block">
									<a href="https://hoanghamobile.com/apple-iphone-6s-16gb-space-graywhitegoldrose-gold-chinh-hang-fpt-dgw-p4966.html" class="mosaic-overlay" style="display: inline;">
										<div class="details">
											<ul>
												<li>Bảo hành: Bảo hành theo tiêu chuẩn Apple trong 12 tháng. Bao xài - đổi trả trong 15 ngày đầu</li>
												<li>Khuyến mại: ..., Hỗ trợ mua sạc dự phòng Pisen Portable Power 10000 mAh - Chính hãng với giá 350.000 vnđ, Gậy tự sướng (Selfie Monopod)</li>
												<li>Giá trên đã bao gồm 10% VAT</li>
											</ul>
										</div>
									</a>
									<div class="mosaic-backdrop" style="display: block;"><img width="219" alt="Apple iPhone 6S - 16GB - Space Gray/White/Gold/Rose Gold - Chính hãng FPT, DGW" height="170" src="assets/image/201511051709304652_iphone 6s fpt.png"></div>
								</div>
								<div class="product-name">
									<h4><a href="https://hoanghamobile.com/apple-iphone-6s-16gb-space-graywhitegoldrose-gold-chinh-hang-fpt-dgw-p4966.html">Apple iPhone 6S - 16GB - Space Gray/White/Gold/Rose Gold - Chính hãng FPT, DGW</a></h4>
								</div>
							</div>
							<div class="product-price">15.550.000 ₫</div>
							<div class="product-addCart"><a href="javascript:;" class="btn-buy-popup" data-id="4966"><i class="fa fa-shopping-cart"></i> Mua ngay</a></div>
						</div>
						<div class="list-item">
							<div class="box-border">
								<div class="hh-label hh-label-topright"><span class="label label-success">-17%</span></div>
								<div class="hh-label hh-label-right"><span class="label label-danger">HOT</span></div>
								<div class="mosaic-block">
									<a href="https://hoanghamobile.com/sky-vega-iron-2-a910s-chinh-hang-p1652.html" class="mosaic-overlay" style="display: inline; opacity: 0;">
										<div class="details">
											<ul>
												<li>Bảo hành: Chính hãng 12 tháng, Bao xài - đổi trả trong 15 ngày đầu</li>
												<li>Khuyến mại: Dock sạc, 1 Pin chính hãng, Hỗ trợ mua sạc dự phòng Pisen Portable Power 10000 mAh - Chính hãng với giá 350.000 vnđ, Miếng dán màn hình</li>
												<li>Giá trên đã bao gồm 10% VAT</li>
											</ul>
										</div>
									</a>
									<div class="mosaic-backdrop" style="display: block;"><img width="219" alt="Sky Vega iron 2 - A910s - Chính hãng" height="170" src="assets/image/201508171544111103_thegioisky-1400643189 copy.jpg"></div>
								</div>
								<div class="product-name">
									<h4><a href="https://hoanghamobile.com/sky-vega-iron-2-a910s-chinh-hang-p1652.html">Sky Vega iron 2 - A910s - Chính hãng</a></h4>
								</div>
							</div>
							<div class="product-price"><strike>6.290.000 ₫</strike> 5.250.000 ₫</div>
							<div class="product-addCart"><a href="javascript:;" class="btn-buy-popup" data-id="1652"><i class="fa fa-shopping-cart"></i> Mua ngay</a></div>
						</div>
						<div class="list-item">
							<div class="box-border">
								<div class="hh-label hh-label-right"><span class="label label-danger">HOT</span></div>
								<div class="mosaic-block">
									<a href="https://hoanghamobile.com/samsung-galaxy-s7-g930fd-chinh-hang-p5475.html" class="mosaic-overlay" style="display: inline; opacity: 0;">
										<div class="details">
											<ul>
												<li>Bảo hành: Chính hãng 12 tháng, Bao xài - đổi trả trong vòng 15 ngày đầu</li>
												<li>Khuyến mại: Hỗ trợ mua sạc dự phòng Pisen Portable Power 10000 mAh - Chính hãng với giá 350.000 vnđ, Tặng ngay 1.700.000 VNĐ tiền mặt</li>
												<li>Sản phẩm được tặng 1.700.000 vnđ tiền mặt</li>
											</ul>
										</div>
									</a>
									<div class="mosaic-backdrop" style="display: block;"><img width="219" alt="Samsung Galaxy S7 - G930FD - Chính hãng" height="170" src="assets/image/201605071740067571_S7 S7 EDGE-01.png"></div>
								</div>
								<div class="product-name">
									<h4><a href="https://hoanghamobile.com/samsung-galaxy-s7-g930fd-chinh-hang-p5475.html">Samsung Galaxy S7 - G930FD - Chính hãng</a></h4>
								</div>
							</div>
							<div class="product-price">15.990.000 ₫</div>
							<div class="product-addCart"><a href="javascript:;" class="btn-buy-popup" data-id="5475"><i class="fa fa-shopping-cart"></i> Mua ngay</a></div>
						</div>
						<div class="list-item">
							<div class="box-border">
								<div class="hh-label hh-label-topright"><span class="label label-success">-23%</span></div>
								<div class="hh-label hh-label-right"><span class="label label-danger">HOT</span></div>
								<div class="mosaic-block">
									<a href="https://hoanghamobile.com/samsung-galaxy-s6-edge-g925-gold-32gb-chinh-hang-p2836.html" class="mosaic-overlay" style="display: inline; opacity: 0;">
										<div class="details">
											<ul>
												<li>Bảo hành: Chính hãng 12 tháng, Bao xài - đổi trả trong vòng 15 ngày đầu</li>
												<li>Khuyến mại: Hỗ trợ mua sạc dự phòng Pisen Portable Power 10000 mAh - Chính hãng với giá 350.000 vnđ</li>
												<li>Giá trên đã bao gồm 10% VAT - Hỗ trợ trả góp 0%</li>
											</ul>
										</div>
									</a>
									<div class="mosaic-backdrop" style="display: block;"><img width="219" alt="Samsung Galaxy S6 Edge G925 - Gold - 32GB - Chính hãng" height="170" src="assets/image/201607151536055238_Samsung Galaxy S6 Edge Gold.jpg"></div>
								</div>
								<div class="product-name">
									<h4><a href="https://hoanghamobile.com/samsung-galaxy-s6-edge-g925-gold-32gb-chinh-hang-p2836.html">Samsung Galaxy S6 Edge G925 - Gold - 32GB - Chính hãng</a></h4>
								</div>
							</div>
							<div class="product-price"><strike>14.990.000 ₫</strike> 11.490.000 ₫</div>
							<div class="product-addCart"><a href="javascript:;" class="btn-buy-popup" data-id="2836"><i class="fa fa-shopping-cart"></i> Mua ngay</a></div>
						</div>
						<div class="list-item">
							<div class="box-border">
								<div class="hh-label hh-label-right"><span class="label label-danger">HOT</span></div>
								<div class="mosaic-block">
									<a href="https://hoanghamobile.com/apple-iphone-6s-64gb-space-graywhitegoldrose-gold-p5022.html" class="mosaic-overlay" style="display: inline;">
										<div class="details">
											<ul>
												<li>Bảo hành: Bảo hành 1 đổi 1 trong 12 tháng tại Hoàng Hà Mobile. Bao xài - đổi trả trong 15 ngày đầu</li>
												<li>Khuyến mại: ..., Hỗ trợ mua sạc dự phòng Pisen Portable Power 10000 mAh - Chính hãng với giá 350.000 vnđ</li>
												<li>Mới 100% - Chưa Active trên hệ thống của Apple</li>
											</ul>
										</div>
									</a>
									<div class="mosaic-backdrop" style="display: block;"><img width="219" alt="Apple iPhone 6S - 64GB  - Space Gray/White/Gold/Rose Gold" height="170" src="assets/image/201603211015391056_iPhone 6s.png"></div>
								</div>
								<div class="product-name">
									<h4><a href="https://hoanghamobile.com/apple-iphone-6s-64gb-space-graywhitegoldrose-gold-p5022.html">Apple iPhone 6S - 64GB - Space Gray/White/Gold/Rose Gold</a></h4>
								</div>
							</div>
							<div class="product-price">16.650.000 ₫</div>
							<div class="product-addCart"><a href="javascript:;" class="btn-buy-popup" data-id="5022"><i class="fa fa-shopping-cart"></i> Mua ngay</a></div>
						</div>
					</div>
					<div class="row-item">
						<div class="list-item">
							<div class="box-border">
								<div class="hh-label hh-label-right"><span class="label label-danger">HOT</span></div>
								<div class="mosaic-block">
									<a href="https://hoanghamobile.com/samsung-galaxy-s7-edge-g935fd-chinh-hang-p5476.html" class="mosaic-overlay" style="display: inline;">
										<div class="details">
											<ul>
												<li>Bảo hành: Chính hãng 12 tháng, Bao xài - đổi trả trong vòng 15 ngày đầu</li>
												<li>Khuyến mại: Hỗ trợ mua sạc dự phòng Pisen Portable Power 10000 mAh - Chính hãng với giá 350.000 vnđ, Tặng 1.700.000 Vnđ tiền mặt</li>
												<li>Sản phẩm được tặng 1.700.000 vnđ tiền mặt</li>
											</ul>
										</div>
									</a>
									<div class="mosaic-backdrop" style="display: block;"><img width="219" alt="Samsung Galaxy S7 Edge - G935FD - Chính hãng" height="170" src="assets/image/201605071741101197_S7 S7 EDGE-01.png"></div>
								</div>
								<div class="product-name">
									<h4><a href="https://hoanghamobile.com/samsung-galaxy-s7-edge-g935fd-chinh-hang-p5476.html">Samsung Galaxy S7 Edge - G935FD - Chính hãng</a></h4>
								</div>
							</div>
							<div class="product-price">18.490.000 ₫</div>
							<div class="product-addCart"><a href="javascript:;" class="btn-buy-popup" data-id="5476"><i class="fa fa-shopping-cart"></i> Mua ngay</a></div>
						</div>
						<div class="list-item">
							<div class="box-border">
								<div class="hh-label hh-label-right"><span class="label label-danger">HOT</span></div>
								<div class="mosaic-block">
									<a href="https://hoanghamobile.com/htc-one-e9-dual-sim-chinh-hang-p4943.html" class="mosaic-overlay" style="display: inline;">
										<div class="details">
											<ul>
												<li>Bảo hành: Chính hãng 12 tháng, Bao xài - đổi trả trong 15 ngày đầu</li>
												<li>Khuyến mại: ..., ..., Hỗ trợ mua sạc dự phòng Pisen Portable Power 10000 mAh - Chính hãng với giá 350.000 vnđ, Phiếu tặng vé xem phim 2D</li>
												<li>Giá trên đã gồm 10% VAT</li>
											</ul>
										</div>
									</a>
									<div class="mosaic-backdrop" style="display: block;"><img width="219" alt="HTC One E9 Dual SIM - Chính hãng" height="170" src="assets/image/201607091549386607_htc-one-e9-dual-sim.jpg"></div>
								</div>
								<div class="product-name">
									<h4><a href="https://hoanghamobile.com/htc-one-e9-dual-sim-chinh-hang-p4943.html">HTC One E9 Dual SIM - Chính hãng</a></h4>
								</div>
							</div>
							<div class="product-price">4.790.000 ₫</div>
							<div class="product-addCart"><a href="javascript:;" class="btn-buy-popup" data-id="4943"><i class="fa fa-shopping-cart"></i> Mua ngay</a></div>
						</div>
						<div class="list-item">
							<div class="box-border">
								<div class="hh-label hh-label-topright"><span class="label label-success">-14%</span></div>
								<div class="hh-label hh-label-right"><span class="label label-danger">HOT</span></div>
								<div class="mosaic-block">
									<a href="https://hoanghamobile.com/apple-iphone-6-47-64gb-blackwhitegold-chinh-hang-fpt-dgw-p1735.html" class="mosaic-overlay" style="display: inline;">
										<div class="details">
											<ul>
												<li>Bảo hành: Bảo hành theo tiêu chuẩn Apple trong 12 tháng. Bao xài - đổi trả trong 15 ngày đầu</li>
												<li>Khuyến mại: Tấm dán màn hình, ..., Hỗ trợ mua sạc dự phòng Pisen Portable Power 10000 mAh - Chính hãng với giá 350.000 vnđ</li>
												<li>Giá trên đã bao gồm 10% VAT</li>
											</ul>
										</div>
									</a>
									<div class="mosaic-backdrop" style="display: block;"><img width="219" alt="Apple iPhone 6 4.7&quot; - 64GB - Black/White/Gold - Chính hãng - FPT, DGW" height="170" src="assets/image/201507241058044511_201504141102061618_iphone6.png"></div>
								</div>
								<div class="product-name">
									<h4><a href="https://hoanghamobile.com/apple-iphone-6-47-64gb-blackwhitegold-chinh-hang-fpt-dgw-p1735.html">Apple iPhone 6 4.7" - 64GB - Black/White/Gold - Chính hãng - FPT, DGW</a></h4>
								</div>
							</div>
							<div class="product-price"><strike>17.490.000 ₫</strike> 14.990.000 ₫</div>
							<div class="product-addCart"><a href="javascript:;" class="btn-buy-popup" data-id="1735"><i class="fa fa-shopping-cart"></i> Mua ngay</a></div>
						</div>
						<div class="list-item">
							<div class="box-border">
								<div class="hh-label hh-label-right"><span class="label label-danger">HOT</span></div>
								<div class="mosaic-block">
									<a href="https://hoanghamobile.com/apple-iphone-6s-plus-64gb-space-graywhitegoldrose-gold-p5047.html" class="mosaic-overlay" style="display: inline;">
										<div class="details">
											<ul>
												<li>Bảo hành: Bảo hành 1 đổi 1 trong 12 tháng tại Hoàng Hà Mobile. Bao xài - đổi trả trong 15 ngày đầu</li>
												<li>Khuyến mại: ..., Hỗ trợ mua sạc dự phòng Pisen Portable Power 10000 mAh - Chính hãng với giá 350.000 vnđ</li>
												<li>Máy mới 100%, chưa Active trên hệ thống Apple</li>
											</ul>
										</div>
									</a>
									<div class="mosaic-backdrop" style="display: block;"><img width="219" alt="Apple iPhone 6S Plus - 64GB - Space Gray/White/Gold/Rose Gold" height="170" src="assets/image/201603211015391046_iPhone 6s Plus.png"></div>
								</div>
								<div class="product-name">
									<h4><a href="https://hoanghamobile.com/apple-iphone-6s-plus-64gb-space-graywhitegoldrose-gold-p5047.html">Apple iPhone 6S Plus - 64GB - Space Gray/White/Gold/Rose Gold</a></h4>
								</div>
							</div>
							<div class="product-price">19.190.000 ₫</div>
							<div class="product-addCart"><a href="javascript:;" class="btn-buy-popup" data-id="5047"><i class="fa fa-shopping-cart"></i> Mua ngay</a></div>
						</div>
						<div class="list-item">
							<div class="box-border">
								<div class="hh-label hh-label-topright"><span class="label label-success">-24%</span></div>
								<div class="hh-label hh-label-right"><span class="label label-danger">HOT</span></div>
								<div class="mosaic-block">
									<a href="https://hoanghamobile.com/samsung-galaxy-s6-edge-plus-32gb-chinh-hang-p4874.html" class="mosaic-overlay" style="display: inline;">
										<div class="details">
											<ul>
												<li>Bảo hành: Chính hãng 12 tháng, Bao xài - đổi trả trong vòng 15 ngày đầu</li>
												<li>Khuyến mại: ..., Hỗ trợ mua sạc dự phòng Pisen Portable Power 10000 mAh - Chính hãng với giá 350.000 vnđ</li>
												<li>Giá trên đã bao gồm 10% VAT</li>
											</ul>
										</div>
									</a>
									<div class="mosaic-backdrop" style="display: block;"><img width="219" alt="Samsung Galaxy S6 Edge Plus - 32GB - Chính hãng" height="170" src="assets/image/201607091334032426_635854264670767033_s6e-g1.jpg"></div>
								</div>
								<div class="product-name">
									<h4><a href="https://hoanghamobile.com/samsung-galaxy-s6-edge-plus-32gb-chinh-hang-p4874.html">Samsung Galaxy S6 Edge Plus - 32GB - Chính hãng</a></h4>
								</div>
							</div>
							<div class="product-price"><strike>16.990.000 ₫</strike> 12.890.000 ₫</div>
							<div class="product-addCart"><a href="javascript:;" class="btn-buy-popup" data-id="4874"><i class="fa fa-shopping-cart"></i> Mua ngay</a></div>
						</div>
					</div>
					<div class="row-item">
						<div class="list-item">
							<div class="box-border">
								<div class="hh-label hh-label-right"><span class="label label-danger">HOT</span></div>
								<div class="mosaic-block">
									<a href="https://hoanghamobile.com/samsung-galaxy-j7-2016-chinh-hang-p7708.html" class="mosaic-overlay" style="display: inline;">
										<div class="details">
											<ul>
												<li>Bảo hành: Chính hãng 12 tháng, Bao xài - đổi trả trong 15 ngày đầu</li>
												<li>Khuyến mại: ..., ..., Hỗ trợ mua sạc dự phòng Pisen Portable Power 10000 mAh - Chính hãng với giá 350.000 vnđ</li>
											</ul>
										</div>
									</a>
									<div class="mosaic-backdrop" style="display: block;"><img width="219" alt="Samsung Galaxy J7 (2016) - Chính hãng" height="170" src="assets/image/201606241543169079_samsung-galaxy-j7-2016-1.jpg"></div>
								</div>
								<div class="product-name">
									<h4><a href="https://hoanghamobile.com/samsung-galaxy-j7-2016-chinh-hang-p7708.html">Samsung Galaxy J7 (2016) - Chính hãng</a></h4>
								</div>
							</div>
							<div class="product-price">5.580.000 ₫</div>
							<div class="product-addCart"><a href="javascript:;" class="btn-buy-popup" data-id="7708"><i class="fa fa-shopping-cart"></i> Mua ngay</a></div>
						</div>
						<div class="list-item">
							<div class="box-border">
								<div class="hh-label hh-label-right"><span class="label label-danger">HOT</span></div>
								<div class="mosaic-block">
									<a href="https://hoanghamobile.com/samsung-galaxy-a3-2016-p5494.html" class="mosaic-overlay" style="display: inline;">
										<div class="details">
											<ul>
												<li>Bảo hành: Chính hãng 12 tháng. Bao xài đổi trả trong 15 ngày đầu</li>
												<li>Khuyến mại: ..., Hỗ trợ mua sạc dự phòng Pisen Portable Power 10000 mAh - Chính hãng với giá 350.000 vnđ</li>
												<li>Giá trên đã bao gồm 10% VAT</li>
											</ul>
										</div>
									</a>
									<div class="mosaic-backdrop" style="display: block;"><img width="219" alt="Samsung Galaxy A3 (2016)" height="170" src="assets/image/201603021604011197_samsung-galaxy-a3-2016-400x460.png"></div>
								</div>
								<div class="product-name">
									<h4><a href="https://hoanghamobile.com/samsung-galaxy-a3-2016-p5494.html">Samsung Galaxy A3 (2016)</a></h4>
								</div>
							</div>
							<div class="product-price">5.350.000 ₫</div>
							<div class="product-addCart"><a href="javascript:;" class="btn-buy-popup" data-id="5494"><i class="fa fa-shopping-cart"></i> Mua ngay</a></div>
						</div>
						<div class="list-item">
							<div class="box-border">
								<div class="hh-label hh-label-right"><span class="label label-danger">HOT</span></div>
								<div class="mosaic-block">
									<a href="https://hoanghamobile.com/samsung-galaxy-j5-2016-chinh-hang-p7707.html" class="mosaic-overlay" style="display: inline;">
										<div class="details">
											<ul>
												<li>Bảo hành: Chính hãng 12 tháng, Bao xài - đổi trả trong 15 ngày đầu</li>
												<li>Khuyến mại: ..., ..., Hỗ trợ mua sạc dự phòng Pisen Portable Power 10000 mAh - Chính hãng với giá 350.000 vnđ</li>
											</ul>
										</div>
									</a>
									<div class="mosaic-backdrop" style="display: block;"><img width="219" alt="Samsung Galaxy J5 (2016) - Chính hãng" height="170" src="assets/image/201606241535548616_samsung-galaxy-j5.jpg"></div>
								</div>
								<div class="product-name">
									<h4><a href="https://hoanghamobile.com/samsung-galaxy-j5-2016-chinh-hang-p7707.html">Samsung Galaxy J5 (2016) - Chính hãng</a></h4>
								</div>
							</div>
							<div class="product-price">4.890.000 ₫</div>
							<div class="product-addCart"><a href="javascript:;" class="btn-buy-popup" data-id="7707"><i class="fa fa-shopping-cart"></i> Mua ngay</a></div>
						</div>
						<div class="list-item">
							<div class="box-border">
								<div class="hh-label hh-label-right"><span class="label label-danger">HOT</span></div>
								<div class="mosaic-block">
									<a href="https://hoanghamobile.com/apple-iphone-6s-plus-16gb-rose-goldgoldwhite-p5128.html" class="mosaic-overlay" style="display: inline;">
										<div class="details">
											<ul>
												<li>Bảo hành: Bảo hành 1 đổi 1 trong 12 tháng tại Hoàng Hà Mobile. Bao xài - đổi trả trong 15 ngày đầu</li>
												<li>Khuyến mại: ..., Hỗ trợ mua sạc dự phòng Pisen Portable Power 10000 mAh - Chính hãng với giá 350.000 vnđ</li>
												<li>Máy mới 100%, chưa Active trên hệ thống Apple</li>
											</ul>
										</div>
									</a>
									<div class="mosaic-backdrop" style="display: block;"><img width="219" alt="Apple iPhone 6S Plus - 16GB - Rose Gold/Gold/White" height="170" src="assets/image/201603211015391046_iPhone 6s Plus.png"></div>
								</div>
								<div class="product-name">
									<h4><a href="https://hoanghamobile.com/apple-iphone-6s-plus-16gb-rose-goldgoldwhite-p5128.html">Apple iPhone 6S Plus - 16GB - Rose Gold/Gold/White</a></h4>
								</div>
							</div>
							<div class="product-price">16.690.000 ₫</div>
							<div class="product-addCart"><a href="javascript:;" class="btn-buy-popup" data-id="5128"><i class="fa fa-shopping-cart"></i> Mua ngay</a></div>
						</div>
						<div class="list-item">
							<div class="box-border">
								<div class="hh-label hh-label-right"><span class="label label-danger">HOT</span></div>
								<div class="mosaic-block">
									<a href="https://hoanghamobile.com/apple-iphone-6s-plus-64gb-space-graywhitegoldrose-gold-chinh-hang-fpt-dgw-p4992.html" class="mosaic-overlay" style="display: inline;">
										<div class="details">
											<ul>
												<li>Bảo hành: Bảo hành theo tiêu chuẩn Apple trong 12 tháng. Bao xài - đổi trả trong 15 ngày đầu</li>
												<li>Khuyến mại: ..., Hỗ trợ mua sạc dự phòng Pisen Portable Power 10000 mAh - Chính hãng với giá 350.000 vnđ, Gậy tự sướng (Selfie Monopod)</li>
												<li>Giá trên đã bao gồm 10% VAT</li>
											</ul>
										</div>
									</a>
									<div class="mosaic-backdrop" style="display: block;"><img width="219" alt="Apple iPhone 6S Plus - 64GB - Space Gray/White/Gold/Rose Gold - Chính hãng FPT, DGW" height="170" src="assets/image/201511051709304808_iphone 6s plus fpt.png"></div>
								</div>
								<div class="product-name">
									<h4><a href="https://hoanghamobile.com/apple-iphone-6s-plus-64gb-space-graywhitegoldrose-gold-chinh-hang-fpt-dgw-p4992.html">Apple iPhone 6S Plus - 64GB - Space Gray/White/Gold/Rose Gold - Chính hãng FPT, DGW</a></h4>
								</div>
							</div>
							<div class="product-price">20.990.000 ₫</div>
							<div class="product-addCart"><a href="javascript:;" class="btn-buy-popup" data-id="4992"><i class="fa fa-shopping-cart"></i> Mua ngay</a></div>
						</div>
					</div>
					<div class="row-item">
						<div class="list-item">
							<div class="box-border">
								<div class="hh-label hh-label-right"><span class="label label-danger">HOT</span></div>
								<div class="mosaic-block">
									<a href="https://hoanghamobile.com/oppo-f1-plus-oppo-r9-p7573.html" class="mosaic-overlay" style="display: inline; opacity: 0;">
										<div class="details">
											<ul>
												<li>Bảo hành: Chính hãng 12 tháng, Bao xài - đổi trả trong 15 ngày đầu</li>
												<li>Khuyến mại: ..., ..., Hỗ trợ mua sạc dự phòng Pisen Portable Power 10000 mAh - Chính hãng với giá 350.000 vnđ, Thẻ nhớ 32 GB chính hãng, Gậy tự sướng (Selfie Monopod), Sạc dự phòng Xiaomi 10000mAh 2015 Edition - Chính hãng, Đèn LED USB, Nokia 108 Dual sim
												</li>
												<li>Giá trên đã bao gồm 10% VAT</li>
											</ul>
										</div>
									</a>
									<div class="mosaic-backdrop" style="display: block;"><img width="219" alt="Oppo F1 Plus (Oppo R9)" height="170" src="assets/image/201606111803338456_oppo-f1-plus.jpg"></div>
								</div>
								<div class="product-name">
									<h4><a href="https://hoanghamobile.com/oppo-f1-plus-oppo-r9-p7573.html">Oppo F1 Plus (Oppo R9)</a></h4>
								</div>
							</div>
							<div class="product-price">9.990.000 ₫</div>
							<div class="product-addCart"><a href="javascript:;" class="btn-buy-popup" data-id="7573"><i class="fa fa-shopping-cart"></i> Mua ngay</a></div>
						</div>
						<div class="list-item">
							<div class="box-border">
								<div class="hh-label hh-label-right"><span class="label label-danger">HOT</span></div>
								<div class="mosaic-block">
									<a href="https://hoanghamobile.com/sony-xperia-xa-chinh-hang-p7883.html" class="mosaic-overlay" style="display: inline;">
										<div class="details">
											<ul>
												<li>Bảo hành: Chính hãng 12 tháng, Bao xài, đổi trả trong vòng 15 ngày đầu.</li>
												<li>Khuyến mại: Hỗ trợ mua sạc dự phòng Pisen Portable Power 10000 mAh - Chính hãng với giá 350.000 vnđ, Túi du lịch Travel big bag chính hãng</li>
											</ul>
										</div>
									</a>
									<div class="mosaic-backdrop" style="display: block;"><img width="219" alt="Sony Xperia XA - Chính hãng" height="170" src="assets/image/201607040931156980_201606231253268261_sony-xperia-x-1.jpg"></div>
								</div>
								<div class="product-name">
									<h4><a href="https://hoanghamobile.com/sony-xperia-xa-chinh-hang-p7883.html">Sony Xperia XA - Chính hãng</a></h4>
								</div>
							</div>
							<div class="product-price">5.950.000 ₫</div>
							<div class="product-addCart"><a href="javascript:;" class="btn-buy-popup" data-id="7883"><i class="fa fa-shopping-cart"></i> Mua ngay</a></div>
						</div>
						<div class="list-item">
							<div class="box-border">
								<div class="hh-label hh-label-right"><span class="label label-danger">HOT</span></div>
								<div class="hh-label hh-label-right"><span class="label label-info">MỚI</span></div>
								<div class="mosaic-block">
									<a href="https://hoanghamobile.com/xiaomi-redmi-3s-16gb-p7952.html" class="mosaic-overlay" style="display: inline;">
										<div class="details">
											<ul>
												<li>Bảo hành: Bảo hành trong 12 tháng tại Hoàng Hà Mobile. Bao xài - đổi trả trong 15 ngày đầu</li>
												<li>Khuyến mại: Hỗ trợ mua sạc dự phòng Pisen Portable Power 10000 mAh - Chính hãng với giá 350.000 vnđ</li>
											</ul>
										</div>
									</a>
									<div class="mosaic-backdrop" style="display: block;"><img width="219" alt="Xiaomi Redmi 3S - 16GB" height="170" src="assets/image/201606251432509353_Untitled-3.jpg"></div>
								</div>
								<div class="product-name">
									<h4><a href="https://hoanghamobile.com/xiaomi-redmi-3s-16gb-p7952.html">Xiaomi Redmi 3S - 16GB</a></h4>
								</div>
							</div>
							<div class="product-price">2.550.000 ₫</div>
							<div class="product-addCart"><a href="javascript:;" class="btn-buy-popup" data-id="7952"><i class="fa fa-shopping-cart"></i> Mua ngay</a></div>
						</div>
						<div class="list-item">
							<div class="box-border">
								<div class="hh-label hh-label-right"><span class="label label-danger">HOT</span></div>
								<div class="mosaic-block">
									<a href="https://hoanghamobile.com/sony-xperia-x-chinh-hang-p7884.html" class="mosaic-overlay" style="display: inline;">
										<div class="details">
											<ul>
												<li>Bảo hành: Chính hãng 12 tháng, Bao xài, đổi trả trong vòng 15 ngày đầu.</li>
												<li>Khuyến mại: Hỗ trợ mua sạc dự phòng Pisen Portable Power 10000 mAh - Chính hãng với giá 350.000 vnđ, Túi du lịch Travel big bag chính hãng</li>
												<li>Giá trên đã bao gồm 10% thuế VAT</li>
											</ul>
										</div>
									</a>
									<div class="mosaic-backdrop" style="display: block;"><img width="219" alt="Sony Xperia X - Chính hãng" height="170" src="assets/image/201607111602102241_123.jpg"></div>
								</div>
								<div class="product-name">
									<h4><a href="https://hoanghamobile.com/sony-xperia-x-chinh-hang-p7884.html">Sony Xperia X - Chính hãng</a></h4>
								</div>
							</div>
							<div class="product-price">11.490.000 ₫</div>
							<div class="product-addCart"><a href="javascript:;" class="btn-buy-popup" data-id="7884"><i class="fa fa-shopping-cart"></i> Mua ngay</a></div>
						</div>
						<div class="list-item">
							<div class="box-border">
								<div class="hh-label hh-label-right"><span class="label label-danger">HOT</span></div>
								<div class="hh-label hh-label-right"><span class="label label-info">MỚI</span></div>
								<div class="mosaic-block">
									<a href="https://hoanghamobile.com/xiaomi-mi-band-2-p7992.html" class="mosaic-overlay" style="display: inline; opacity: 0;">
										<div class="details">
											<ul>
												<li>Bảo hành: 12 tháng tại Hoàng Hà Mobile</li>
											</ul>
										</div>
									</a>
									<div class="mosaic-backdrop" style="display: block;"><img width="219" alt="Xiaomi Mi Band 2" height="170" src="assets/image/201607061601429391_2016062014552935evf71z.jpg"></div>
								</div>
								<div class="product-name">
									<h4><a href="https://hoanghamobile.com/xiaomi-mi-band-2-p7992.html">Xiaomi Mi Band 2</a></h4>
								</div>
							</div>
							<div class="product-price">890.000 ₫</div>
							<div class="product-addCart"><a href="javascript:;" class="btn-buy-popup" data-id="7992"><i class="fa fa-shopping-cart"></i> Mua ngay</a></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
@include('fromtend.common.footer');
