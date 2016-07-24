<div style="width:100%;display:inline-block;clear:both">
	<div id="wrapper">
		<div id="sub_wrapper">
			<section id="slider1_container" style="height: 471px; width: 100%;" jssor-slider="true">
				<div id="demo">
					<div id="owl-demo" class="owl-carousel">
						@foreach(CommonSite::getSlideHome() as $value)
						<div class="item"><img src="{{ url(UPLOADIMG.UPLOAD_SLIDE.'/'.$value->slide_id.'/'. $value->image_url) }}" alt="The Last of us"></div>
						@endforeach
					</div>
			</div>
	<script src="assets/js/jquery-2.1.4.min.js"></script>
   <link media="all" type="text/css" rel="stylesheet" href="assets/css/owl.theme.css">
   <link media="all" type="text/css" rel="stylesheet" href="assets/css/owl.carousel.css">
  	<script src="assets/js/owl.carousel.js"></script>

	<!-- Demo -->
	<style>
	#owl-demo .item img{
		display: block;
		width: 100%;
		height: auto;
	}
	</style>
	<script>
	$(document).ready(function() {
	  $("#owl-demo").owlCarousel({
	  navigation : false,
	  slideSpeed : 100,
	  autoPlay: true,
	  paginationSpeed : 1000,
	  pagination: true,
	  singleItem : true,

	  // "singleItem:true" is a shortcut for:
	  // items : 1, 
	  // itemsDesktop : false,
	  // itemsDesktopSmall : false,
	  // itemsTablet: false,
	  // itemsMobile : false

	  });
	});
	</script>
			</section>
		</div>
	</div>
</div>