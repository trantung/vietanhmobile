@extends('fromtend.layout.default')

@section('title')
{{ $title='Thê giới điện thoại' }}
@stop

@section('content')
				
				@include('fromtend.common.product',  array('category' => $category));


@stop
