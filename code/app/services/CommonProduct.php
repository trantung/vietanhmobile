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
	public static function getOption($model)
	{
		$array = array(
			null => 'Parent',
		);
		return $array + self::childOption($model);
	}

}