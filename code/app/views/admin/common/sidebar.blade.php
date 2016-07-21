<aside class="main-sidebar">
	<!-- sidebar: style can be found in sidebar.less -->
	<section class="sidebar">
		<!-- sidebar menu: : style can be found in sidebar.less -->
		<ul class="sidebar-menu">
			<li class="header">Menu</li>
			<li><a href="{{ action('AdminCategoryController@index') }}"><i class="fa fa-newspaper-o"></i> <span>Quản lý category</span></a></li>
			<li><a href="{{ action('AdminProductController@index') }}"><i class="fa fa-newspaper-o"></i> <span>Quản lý sản phẩm</span></a></li>
			<li><a href="{{ action('AdminContactController@index') }}"><i class="fa fa-newspaper-o"></i> <span>Liên hệ</span></a></li>
			<li><a href="{{ action('AdminSlideController@index') }}"><i class="fa fa-newspaper-o"></i> <span>Slide</span></a></li>
			<!-- @if(Admin::isAdmin()) -->
			<!-- <li>
				<a href="{{ action('ManagerController@index') }}">
					<i class="fa fa-users"></i> <span>Quản lý thành viên</span>
				</a>
			</li> -->
			<!-- @endif -->
		</ul>
	</section>
	<!-- /.sidebar -->
</aside>