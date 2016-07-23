<footer>
<div class="bottom">
	<div class="hh-container">
		<div class="hoangha-info">
			
		{{ Contact::first()->description }}
		</div>
	</div>
</div>
</footer>
		<div id="scriptsANTS"></div>
		<div id="p_ajax" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="true" data-focus-on="input:first"></div>
		<div id="p_ajax_cart" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="true" data-focus-on="input:first"></div>
		<div id="dialog-message" class="modal fade" tabindex="-1" data-keyboard="true"></div>
		<div id="dialog-confirm" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="true"></div>
		<div id="bttop" style="display: none;"><img src="../assets/image/top.png"></div>
		<!-- <script async src="https://e.anthill.vn/delivery-ants/conversion.js"></script> -->
		
		{{ HTML::script('assets/js/plusone.js') }}
		{{ HTML::script('assets/js/scripts.js') }}
		{{ HTML::script('assets/js/app.home.min.js') }}
		{{ HTML::script('assets/js/demo.js') }}
		{{ HTML::script('assets/js/platform.js') }}
		<!-- <script src="assets/js/conversion.js"></script> -->
	</body>
</html>