@extends('admin.layout.default')

@section('title')
{{ $title='Quản lý dự án' }}
@stop

@section('content')

@if(User::isAdmin() == ROLE_ADMIN)
<div class="row margin-bottom">
	<div class="col-xs-12">
		<a href="{{ action('ProjectController@create') }}" class="btn btn-primary">Thêm mới</a>
	</div>
</div>
@endif

@include('admin.project.search')
<div class="row">
	<div class="col-xs-12">
		<div class="box">
			<div class="box-header">
				<h3 class="box-title">Danh sách dự án</h3>
				<span> (Tổng số: {{ count($data) }})</span>
			</div>
			<!-- /.box-header -->
			<div class="box-body table-responsive no-padding">
				<table class="table table-hover">
					<tr>
						<!-- <th>ID</th> -->
						<th>Tên dự án</th>
						<th>Tiến độ (%)</th>
						<th>Ngày bắt đầu</th>
						<th>Ngày kết thúc</th>
						<th>Trạng thái</th>
						<th>Action</th>
					</tr>
					@foreach($data as $key => $value)
						<tr>
							<!-- <td>{{-- $value->id --}}</td> -->
							<td>{{ $value->name }}</td>
							<td>{{ $value->percent }}</td>
							<td>{{ Common::getDateTimeString($value->start) }}</td>
							<td>{{ Common::getDateTimeString($value->end) }}</td>
							<td>{{ CommonOption::getFieldTextByModel('ProjectStatus', $value->status, 'name') }}</td>
							<td>
								@if(Common::checkModelUserStatus('ProjectUser', $value->id, 'project_id') == ASSIGN_STATUS_1 && Common::checkModelUserFunction('ProjectUser', $value->id, 'project_id'))
									<a href="{{ action('ProjectController@edit', $value->id) }}" class="btn btn-primary">Sửa</a>
									{{ Form::open(array('method'=>'DELETE', 'action' => array('ProjectController@destroy', $value->id), 'style' => 'display: inline-block;')) }}
										<button class="btn btn-danger" onclick="return confirm('Bạn có chắc chắn muốn xóa?');">Xóa</button>
									{{ Form::close() }}
								@elseif(Common::checkModelUserStatus('ProjectUser', $value->id, 'project_id') == ASSIGN_STATUS_3)
									<a href="{{ action('ProjectController@accept', $value->id) }}" class="btn btn-success">Đồng ý</a>
									<a href="{{ action('ProjectController@refuse', $value->id) }}" class="btn btn-danger">Từ chối</a>
								@endif
							</td>
						</tr>
					@endforeach
				</table>
			</div>
			<!-- /.box-body -->
		</div>
		<!-- /.box -->
	</div>
</div>
<div class="row">
	<div class="col-xs-12">
		<ul class="pagination">
			<!-- phan trang -->
			{{ $data->appends(Request::except('page'))->links() }}
		</ul>
	</div>
</div>
@stop

