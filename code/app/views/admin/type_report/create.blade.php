@extends('admin.layout.default')

@section('title')
{{ $title='Thêm mới thể loại báo cáo' }}
@stop

@section('content')
<div class="row margin-bottom">
	<div class="col-xs-12">
		<a href="{{ action('TypeReportController@index') }}" class="btn btn-success">Danh sách</a>
	</div>
</div>
<div class="row">
	<div class="col-xs-12">
		<div class="box box-primary">
			{{ Form::open(array('action' => 'TypeReportController@store', 'files' => true)) }}
				<div class="box-body">
					<div class="form-group">
						<label>Tên thể loại</label>
						<div class="row">
							<div class="col-sm-6">
								{{ Form::text('name', null, array('class' => 'form-control')) }}
							</div>
						</div>
					</div>
					<div class="form-group">
						<label>Format</label>
						<div class="row">
							<div class="col-sm-6">
								{{ Form::file('url') }}
							</div>
						</div>
					</div>
					<div class="form-group">
						<label>Phòng ban</label>
						<div class="row">
							<div class="col-sm-6">
								{{ Form::select('dep_id', [0 => 'Chung'] + Department::lists('name', 'id'), null, array('class' => 'form-control')) }}
							</div>
						</div>
					</div>
				</div>
				<div class="box-footer">
					{{ Form::submit('Lưu lại', array('class' => 'btn btn-primary')) }}
				</div>
			{{ Form::close() }}
		</div>
	</div>
</div>
@stop
