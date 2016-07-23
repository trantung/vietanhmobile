@extends('fromtend.layout.default')

@section('title')
{{ $title='Thê giới điện thoại' }}
@stop

@section('content')
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
						<img src="{{ $data->image_url}}"/>
					</div>
				</div>
				<div class="right" style="background-color: #FFFFCC;">
					<div class="stock-status">
						<div class="list-color">
							<ul>
								<li>
									<a data-id="59" class="color-quad" href="javascript:;">
										<span class="black" title="{{ $data->color}}" style="background:#000000">{{ $data->color}}</span>
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
							<div class="priceNote"><p>
								<!-- giá bao gom 10% vat -->
							</p></div></div>
						</div>
						<div class="colorNote" id="colorNote">
							
						</div>
					</div>
					<div class="block">
						<h4><strong>Khuyến mại</strong></h4>
						<ul class="ltsPromote">
							<li>
								<i class="fa fa-gift"></i>
								Hỗ trợ mua sạc dự phòng Pisen Portable Power 10000 mAh - Chính hãng với giá 350.000 vnđ
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
								<strong>{{ $data->name}}</strong>
							</h3>
							<div class="hh-container">
								<div class="video-player" id="videoPlayer">
									<iframe width="480" height="270" src="{{{ $data->link_youtube}}}" frameborder="0" allowfullscreen=""></iframe>

								</div>
							</div>
						</div>
						<div class="product-prop">
							<h3>
								Chức năng chính 
								<strong>{{ $data->name }}</strong>
							</h3>
							<div class="simple-prop">
								<p><label>Hãng sản xuất</label>: <span><a href="/tim-kiem.html?brand=4">{{ CommonSite::getCategoryNameByproduct($data->id)->name }}</a></span></p>
								<p><label>Kích thước màn hình:</label> <span><a href="/tim-kiem.html?filters=17:4663">{{ $data->pixel }}</a></span></p>
							   <p><label>Độ phân giải màn hình:</label> <span><a href="/tim-kiem.html?filters=18:3326">{{ $data->size}}</a></span></p>
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
			@include('fromtend.common.product', array('category' => array(CommonSite::getCategoryNameByproduct($data->id)) ))
		</div>
	</div>
</div>
@stop
