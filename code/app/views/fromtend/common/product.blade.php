@foreach($category as $value)
<div class="section">
	<div class="box-container">
		<div class="box-head">
			<a href="{{ action('CategoryController@show', $value->id) }}" class="box-title">{{ $value->name }}</a> 
			<a href="{{ action('CategoryController@show', $value->id) }}" class="more">Xem tất cả 
			</a>
		</div>
		<div class="product-list">
			<div class="list-content">
			@for($i = 0; $i< CommonSite::countPageProduct($value->id); $i++)
				<?php 
					if($i >= 2 && count($category) > 1)
						break; 
					?>
					<div class="row-item">
						@foreach(CommonSite::getProduct($value->id, $i) as $key => $item)
							@if( $key < RECORDS)
								<div class="list-item">
									<div class="box-border">
										<!-- <div class="hh-label hh-label-topright"><span class="label label-success">-18%</span></div> -->
										<!-- <div class="hh-label hh-label-right"><span class="label label-danger">HOT</span></div> -->
										<div class="mosaic-block">
											<a href="{{ action('SiteController@show', $item->id) }}" class="mosaic-overlay" style="display: inline; opacity: 0;">
												<div class="details">
													<ul>
														{{ $item->short_des }}
													</ul>
												</div>
											</a>
											<div class="mosaic-backdrop" style="display: block;">
												<img width="219" alt="{{ $item->name }}" height="170" src="{{ $item->image_url }}">
											</div>
										</div>
										<div class="product-name">
											<h4><a href="{{ action('SiteController@show', $item->id) }}">{{ $item->name }}</a></h4>
										</div>
									</div>
									<div class="product-price">{{ $item->price }}</div>
									<!-- <div class="product-addCart"><a href="javascript:;" class="btn-buy-popup" data-id="4715"><i class="fa fa-shopping-cart"></i> Mua ngay</a></div> -->
								</div>
							@endif
						@endforeach
					</div>
					@endfor
			</div>
		</div>
	</div>
</div>
@endforeach