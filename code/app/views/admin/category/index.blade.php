@extends('admin.layout.default')

@section('title')
{{ $title='Quản lý loại sản phẩm' }}
@stop

@section('content')

<!-- inclue Search form 

-->
<div class="row margin-bottom">
	<div class="col-xs-12">
		<a href="{{ action('TypeProductController@create') }}" class="btn btn-primary">Thêm Thể loại</a>
	</div>
</div>

<div class="row">
	<div class="col-xs-12">
	  <div class="box">
		<div class="box-header">
		  <h3 class="box-title">Danh sách loại sản phẩm</h3>
		</div>
		<!-- /.box-header -->
		<div class="box-body table-responsive no-padding">
		  <table class="table table-hover">
			<tr>
			  <th>ID</th>
			  <th>Loại sản phẩm</th>
			  <th>Sub category</th>
			  <th>Mô tả ngắn</th>
			  <th style="width:200px;">Action</th>
			</tr>
			@foreach($data as $value)
				<tr>
				  <td>{{ $value->id }}</td>
				  <td>{{ $value->name }}</td>
				  <td>{{  CommonProduct::getNameOption('Product', $value)  }}</td>
				  <td>{{ $value->short_des }}</td>
				  <td>
					<a href="{{ action('TypeProductController@edit', $value->id) }}" class="btn btn-primary">Sửa</a>
					{{ Form::open(array('method'=>'DELETE', 'action' => array('TypeProductController@destroy', $value->id), 'style' => 'display: inline-block;')) }}
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
			{{ $data->appends(Request::except('page'))->links() }}
		</div>
	</div>

@stop

