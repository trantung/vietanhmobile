@extends('admin.layout.default')

@section('title')
{{ $title='Sửa Header' }}
@stop

@section('content')

<div class="row">
	<div class="col-xs-12">
		<div class="box box-primary">
			<!-- form start -->
			{{ Form::open(array('action' => array('ConfigHeaderController@update', $id), 'method' => 'PUT')) }}
			<div class="box-body">
				<div class="form-group">
					<label for="name">Chi tiết</label>
					<div class="row">
						<div class="col-sm-12">
						   {{ Form::textarea('description', $data->description , array('class' => 'form-control',"rows"=>6, 'id' => 'editor1')) }}
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
@include('admin.common.ckeditor')
@stop
