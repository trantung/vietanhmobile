@extends('fromtend.layout.default')

@section('title')
{{ $title='Thê giới điện thoại' }}
@stop

@section('content')

@include('fromtend.common.slide');			
@include('fromtend.common.product');

<script>
	$('#showMenu').css('display','block')
</script>
@stop
