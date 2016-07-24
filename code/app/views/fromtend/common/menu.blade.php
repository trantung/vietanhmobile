<div class="menu" id="mainMenu" style="z-index: 1000; position: static; top: 127px;">
	<div class="main-width">
		<div class="nav">
			<nav class="all-nav">
				<div class="root-nav"><a href="javascript:;" class="root actived">
				<!-- <i class="fa fa-bars"></i>  -->
				<img src="../assets/image/iconmenu.png" style="float: left;margin-top: -6px;height=30px;width: 30px;">
				<span>Danh mục sản phẩm</span></a></div>
				<div class="nav-items" id="showMenu" style="display: none;">
					<ul>
					@foreach(CommonSite::getCategory() as $value)
						<li data-submenu-id="menu_5">
							<div class="border">
								<a class="item" href="{{ action('CategoryController@show', $value->id) }}" >{{ $value->name }}</a>
								<div class="quickMenu">
									{{ $value->short_des }}
								</div>
								@if(count(CommonSite::getSubCategory($value->id)) > 0) 
								<div class="childs" id="menu_5" style="width:921px">
									<ul>
										<li>
											<h3>
												<a href="{{ action('CategoryController@show', $value->id) }}" target="_top">{{ $value->name }}</a>
											</h3>
											<ul>
												@foreach(CommonSite::getSubCategory($value->id) as $item)
												<li>
													<a href="{{ action('CategoryController@show', $item->id) }}" target="_top" title="{{$item->short_des }}">{{ $item->name }}
													</a>
												</li>
												@endforeach
											</ul>
										</li>
										
									</ul>
									@if($value->image_url)
										<div class="ads">
											<img src="{{ url(UPLOADIMG.'/'.UPLOAD_CATEGORY.'/'.$value->id.'/'. $value->image_url) }}">
										</div>
									@endif
								</div>
								@endif
							</div>
						</li>
					@endforeach
					</ul>
				</div>
			</nav>
		</div>
		
		<div class="note">
			<div class="nav-breadcrumb"></div>
			
		</div>
	</div>
</div>