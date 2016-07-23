@extends('admin.layout.default')

@section('title')
{{ $title='Quản lý sản phẩm' }}
@stop

@section('content')
@include('admin.news.search')
<!-- inclue Search form

-->
@if(!Admin::isSeo())
<div class="row margin-bottom">
	<div class="col-xs-12">
		<a href="{{ action('AdminProductController@create') }}" class="btn btn-primary">Thêm mới sản phẩm</a>
	</div>
</div>
@endif
<div class="row">
	<div class="col-xs-12">
	  <div class="box">
		<div class="box-header">
		  <h3 class="box-title">Danh sách sản phẩm</h3>
		</div>
		<!-- /.box-header -->
		<div class="box-body table-responsive no-padding">
		  <table class="table table-hover">
			<tr>
			  <th>ID</th>
			  <th>Tên sản phẩm</th>
			  <th>Hãng sản xuất</th>
			  <th>Giá tiền</th>
			  <th style="width:200px;">Action</th>
			</tr>
				@foreach($data as $value)
					<tr>
						<td>{{ $value->id }}</td>
						<td>{{ $value->name }}</td>
						<td>{{ CommonSite::getCategoryNameByproduct($value->id)->name }}</td>
						<td>{{ $value->price }}</td>
						<td>
							<a href="{{  action('AdminProductController@edit', $value->id) }}" class="btn btn-primary">Sửa</a>
								{{ Form::open(array('method'=>'DELETE', 'action' => array('AdminProductController@destroy', $value->id), 'style' => 'display: inline-block;')) }}
								<button class="btn btn-danger" onclick="return confirm('Bạn có chắc chắn muốn xóa?');">Xóa</button>
								{{ Form::close() }}
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

