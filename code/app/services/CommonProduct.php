<?php
class CommonProduct
{

	public static function getNameOption($model, $value)
	{
		$data = $model::where('parent_id', $value->id)->get();
		if (count($data)>0){
			$name = '';
			foreach ($data as $item) {
				$name .= $item->name.'-';
			}
			return $name;
		}
		return null;
	}
	public static function searchProduct($input)
	{
		$data = Product::where(function ($query) use ($input)
		{
			$query = $query->whereNotNull('parent_id');
			if ($input['id'] != 0) {
				$listid = Product::where('parent_id', $input['id'])->lists('id');
				$query = $query->whereIn('parent_id', $listid);
			}
			if ($input['name']) {
				$query = $query->where('name', 'like', '%'.$input['name'].'%');
			}
		})->orderBy('id', 'desc')->paginate(PAGINATE);
		return $data;
	}
	

}