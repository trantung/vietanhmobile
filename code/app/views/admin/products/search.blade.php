<div class="margin-bottom">
	{{ Form::open(array('action' => 'AdminProductController@search', 'method' => 'GET')) }}
		<div class="input-group" style="width: 150px; display:inline-block;">
			<label>Tên sản phẩm</label>
		  	<input type="text" name="name" class="form-control" placeholder="Tên sản phẩm" />
		</div>
		<div class="input-group" style="width: 150px; display:inline-block;">
			<label>Thể loại</label>
			 {{  Form::select('id', ['0' => '-- Lựa chọn'] + CommonOption::getOption('Product')  ,null,array('class' => 'form-control' )) }}
		</div>
		<div class="input-group" style="display: inline-block; vertical-align: bottom;">
			<input type="submit" value="Search" class="btn btn-primary" />
		</div>
	</form>
</div>