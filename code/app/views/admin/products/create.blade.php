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
						<label for="name">Dòng sản phẩm</label>
						<div class="row">
							<div class="col-sm-6">
							   {{  Form::select('parent_id', CommonOption::getOptionCreateProduct('Product'), null, array('class' => 'form-control' )) }}
							</div>
						</div>
					</div>
					<div class="form-group">
						<label for="title">Ảnh sản phẩm</label>
						<div class="row">
							<div class="col-sm-6">
							   	{{ Form::file('image_url') }}
							</div>
						</div>
					</div>
					<div class="form-group">
						<label for="title">Giá</label>
						<div class="row">
							<div class="col-sm-6">
							   {{ Form::text('price', null , textParentCategory('Giá sản phẩm')) }}
							</div>
						</div>
					</div>
					<div class="form-group">
						<label for="title">Vị trí hiển thị</label>
						<div class="row">
							<div class="col-sm-6">
							   {{ Form::text('weight_number', null , textParentCategory('Vị trí hiển thị')) }}
							</div>
						</div>
					</div>
					<div class="form-group">
						<label for="title">Mô tả ngắn</label>
						<div class="row">
							<div class="col-sm-6">
							  {{ Form::textarea('short_des', '' , array('class' => 'form-control',"rows"=>6, 'id' => 'editor1')) }}
							</div>
						</div>
					</div>
					<div class="form-group">
						<label for="description">Chi tiết</label>
						<div class="row">
							<div class="col-sm-12">
							   {{ Form::textarea('description', '' , array('class' => 'form-control',"rows"=>6, 'id' => 'editor2')) }}
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
