@extends('admin.layout.default')

@section('title')
{{ $title='Thêm mới thể loại tin' }}
@stop

@section('content')

<div class="row margin-bottom">
	<div class="col-xs-12">
		<a href="{{ action('TypeProductController@index') }} " class="btn btn-success">Danh sách</a>
	</div>
</div>

<div class="row">
	<div class="col-xs-12">
		<div class="box box-primary">
			<!-- form start -->
			{{ Form::open(array('action' => array('TypeProductController@store', 'files'=> true))) }}
			<div class="box-body">
					<div class="form-group">
						<label>Parent</label>
						<div class="row">
							<div class="col-sm-6">
								{{ Form::select('parent_id', CommonOption::getOption('Regency'), null, array('class' => 'form-control')) }}
							</div>
						</div>
					</div>
				</div>
			<div class="box-body">
				<div class="form-group">
					<label for="name">Tên loại</label>
					<div class="row">
						<div class="col-sm-6">
						   {{ Form::text('name', null , textParentCategory('Tên thể loại sản phẩm')) }}
						</div>
					</div>
					<label for="name">Mô tả ngắ	n</label>
					<div class="row">
						<div class="col-sm-6">
						   {{ Form::text('short_des', null , textParentCategory('Mô tả ngắn')) }}
						</div>
					</div>
					<label for="name">Ảnh đại diện</label>
					<div class="row">
						<div class="col-sm-6">
						   {{ Form::text('image_url', null , textParentCategory('Ảnh đại diện hiển thị trên menu')) }}
						</div>
					</div>
				</div>
			  <!-- /.box-body -->

			  <div class="box-footer">
				{{ Form::submit('Lưu lại', array('class' => 'btn btn-primary')) }}
			  </div>
			{{ Form::close() }}
		  </div>
		  <!-- /.box -->
	</div>
</div>
@stop
