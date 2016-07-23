<div class="header clearFix">
	<div class="main-width">
		<div class="logo">
		 	<a href="{{ action('SiteController@index') }}"><img src="../assets/image/logo.jpg" alt="Điện thoại di động giá rẻ nhất - Siêu thị điện thoại Hoàng Hà Mobile"></a>
		</div>
		<div class="content">
			<div class="search">
				<div class="home">
					<a href="{{ action('SiteController@index') }}">
						<i class="fa fa-home"></i>
					</a>
				</div>
				<div class="input">
					{{ Form::open(array('action' => 'SearchController@search', 'method' => 'GET')) }}
						<div class="control"><input name="keyword" placeholder="Nhập từ khóa tìm kiếm" autocomplete="off"></div>
						<button type="submit"><i class="fa fa-search"></i> Tìm kiếm</button>
					{{ Form::close() }}
				</div>
			</div>
			<div class="tools-member">
				<h4>{{ $header->description }}</h4>
			</div>
		</div>
   </div>
</div>

