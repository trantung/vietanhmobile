@extends('admin.layout.default')

@section('title')
{{ $title='Thêm mới sản phẩm' }}
@stop

@section('content')

@include('admin.products.common')

<div class="row">
	<div class="col-xs-12">
		<div class="box box-primary">
			<!-- form start -->
			{{ Form::open(array('action' => array('AdminProductController@store'), 'files'=> true)) }}
				<div class="box-body">
					<div class="form-group">
						<label for="title">Tên sản phẩm</label>
						<div class="row">
							<div class="col-sm-6">
							   {{ Form::text('name', null , textParentCategory('Tên sản phẩm')) }}
							</div>
						</div>
					</div>
					<div class="form-group">
						<label for="name">Category</label>
						<div class="row">
							<div class="col-sm-6">
							   {{  Form::select('type_new_id', Common::getTypeList('TypeNew'), null, array('class' => 'form-control' )) }}
							</div>
						</div>
					</div>
					<div class="form-group">
						<label for="name">Trạng thái</label>
						<div class="row">
							<div class="col-sm-6">
							   {{ Form::select('status', [ 2=> 'Hiển thị', 1=> 'Không hiển thị'], null, array('class' => 'form-control')) }}
							</div>
						</div>
					</div>
					<label for="name">Giá</label>
					<div class="row">
						<div class="col-sm-6">
						   {{ Form::text('price', null , textParentCategory('Giá sản phẩm')) }}
						</div>
					</div>
					<label for="name">Số lượng</label>
					<div class="row">
						<div class="col-sm-6">
						   {{ Form::text('quantity', null , textParentCategory('Số lượng')) }}
						</div>
					</div>
					<label for="name">Vị trí sắp xếp</label>
					<div class="row">
						<div class="col-sm-6">
						   {{ Form::text('position', null , textParentCategory('Vị trí sắp xếp(số nguyên dương)')) }}
						</div>
					</div>
					<div class="form-group">
						<label for="image_url">Upload ảnh sản phẩm</label>
						<p>Kích thước: 360x230 / Dung lượng < 1Mb</p>
						<div class="row">
							<div class="col-sm-6">
								{{ Form::file('image_url') }}
							</div>
						</div>
					</div>
					<div class="form-group">
						<label for="description">Giới thiệu ngắn</label>
						<div class="row">
							<div class="col-sm-12">
							   {{ Form::textarea('short_des', '' , array('class' => 'form-control',"rows"=>6)) }}
							</div>
						</div>
					</div>
					<div class="form-group">
						<label for="description">Chi tiết</label>
						<div class="row">
							<div class="col-sm-12">
							   {{ Form::textarea('description', '' , array('class' => 'form-control',"rows"=>6, 'id' => 'editor1')) }}
							</div>
						</div>
					</div>

					<!-- /.box-body -->

					<div class="box-footer">
					{{ Form::submit('Lưu lại', array('class' => 'btn btn-primary')) }}
					</div>
				</div>
			{{ Form::close() }}
		  	<!-- /.box -->
	  	</div>
	</div>
</div>
@include('admin.common.ckeditor')
@stop
