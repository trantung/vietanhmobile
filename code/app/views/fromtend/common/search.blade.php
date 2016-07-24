<div class="section">
	<div class="box-container">
		<div class="box-head">
			<a href="" class="box-title">Kết quả tìm kiếm</a> 
			</a>
		</div>
		<div class="product-list">
			<div class="list-content">
			@for($i = 0; $i< ceil(count($data) / RECORDS); $i++)
				<div class="row-item">
					@foreach($data as $key => $item)
					@if( $key < RECORDS)
						<div class="list-item">
							<div class="box-border">
								<div class="mosaic-block">
									<a href="{{ action('SiteController@show', $item->id) }}" class="mosaic-overlay" style="display: inline; opacity: 0;">
										<div class="details">
											<ul>
												{{ $item->short_des }}
											</ul>
										</div>
									</a>
									<div class="mosaic-backdrop" style="display: block;">
										<img width="219" alt="{{ $item->name }}" height="170" src="{{ url(UPLOADIMG.'/'.UPLOAD_PRODUCT.'/'.$item->id.'/'. $item->image_url) }}">
									</div>
								</div>
								<div class="product-name">
									<h4><a href="{{ action('SiteController@show', $item->id) }}">{{ $item->name }}</a></h4>
								</div>
							</div>
							<div class="product-price">{{ $item->price }}</div>
						</div>
						@endif
					@endforeach
				</div>
				@endfor
			</div>
		</div>
	</div>
</div>