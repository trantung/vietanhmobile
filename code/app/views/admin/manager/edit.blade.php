@extends('admin.layout.default')

@section('title')
{{ $title='Sửa thành viên' }}
@stop

@section('content')
<div class="row">
	<div class="col-xs-12">
		<div class="box box-primary">
			<!-- form start -->
			{{ Form::open(array('action' => array('ManagerController@update', $data->id), 'method' => 'PUT')) }}
				<div class="box-body">
					<div class="form-group">
						<label for="username">Tên đăng nhập</label>
						<div class="row">
							<div class="col-sm-6">
								<input type="text" class="form-control" id="username" placeholder="Username" name="username" value="{{ $data->username }}">
							</div>
						</div>
					</div>
					<div class="form-group">
						<label for="password">Password</label>
						<div class="row">
							<div class="col-sm-6">
								{{ Form::password('password') }}
							</div>
						</div>
					</div>
					<div class="form-group">
						<label for="email">Email</label>
							<div class="row">
								<div class="col-sm-6">
									<input type="email" class="form-control" id="email" placeholder="Email" name="email" value="{{ $data->email }}" >
							</div>
						</div>
					</div>
				</div>
				<!-- /.box-body -->

				<div class="box-footer">
					<input type="submit" class="btn btn-primary" value="Lưu lại" />
				</div>
			{{ Form::close() }}
		</div>
		<!-- /.box -->
	</div>
</div>

@stop
