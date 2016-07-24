<?php
class CommonSite
{
	public static function isLogin()
	{
		if (Auth::user()->check()) {
			return true;
		}
		else{
			return false;
		}
	}

	// get advertise
	public static function getAdvertise($position, $modelName = null, $modelId = null)
	{
		// Header & Footer
		if($modelName == null && $modelId == null) {
			if (Cache::has('ad'.$position))
			{
				$ad = Cache::get('ad'.$position);
			} else {
				$ad = Advertise::where(array('position' => $position, 'status' => ENABLED))->first();
				Cache::put('ad'.$position, $ad, CACHETIME);
			}
			return $ad;
		}
		// Content
		else {
			//check Common models
			if (Cache::has('common_model'.$modelName.$modelId))
			{
				$common_model = Cache::get('common_model'.$modelName.$modelId);
			} else {
				$common_model = CommonModel::where(array('model_name' => $modelName, 'model_id' => $modelId))->first();
				Cache::put('common_model'.$modelName.$modelId, $common_model, CACHETIME);
			}
			if ($common_model) {
				$common_model_id = $common_model->id;
				if (Cache::has('advertisement_id'.$common_model_id))
				{
					$advertisement_id = Cache::get('advertisement_id'.$common_model_id);
				} else {
					$advertisement_id = AdvertisePosition::where(array('common_model_id' => $common_model_id, 'status' => ENABLED))->first();
					Cache::put('advertisement_id'.$common_model_id, $advertisement_id, CACHETIME);
				}
				if($advertisement_id) {
					if (Cache::has('ad'.$advertisement_id))
					{
						$ad = Cache::get('ad'.$advertisement_id);
					} else {
						$advertisement_id = AdvertisePosition::where(array('common_model_id' => $common_model_id, 'status' => ENABLED))->first()->advertisement_id;
						$ad = Advertise::find($advertisement_id);
						Cache::put('ad'.$advertisement_id, $advertisement_id, CACHETIME);
					}
					return $ad;
				}
				return null;
			}
			else {
				return null;
			}
		}
	}

	public static function getRelationModel($id, $relationType) {
		$model = Relation::where('model_name', $relationType)
						->where('model_id', $id)
						->first();
		if ($model) {
			return $relationType::find($model->relation_id);
		}
		return null;
	}

	public static function getLatestNews()
	{
		if (Cache::has('newsLatest'))
		{
			$news = Cache::get('newsLatest');
		} else {
			$now = Carbon\Carbon::now();
			$news =  AdminNew::where('start_date', '<=', $now)
				->orderBy('start_date', 'desc')
				->first();
			Cache::put('newsLatest', $news, CACHETIME);
		}
		if($news) {
			return $news;
		} else {
			return null;
		}
	}

	public static function getMetaSeo($modelName, $modelId = null)
	{
		if(!$modelId) {
			$seoMeta = AdminSeo::where('model_name', $modelName)
					->first();
			return $seoMeta;
		}
		$seoMeta = AdminSeo::where('model_name', $modelName)
				->where('model_id', $modelId)
				->first();
		$meta = $modelName::find($modelId);
		if($seoMeta->title_site == '') {
			$seoMeta->title_site = $meta->name;
		}
		if($seoMeta->description_site == '') {
			$seoMeta->description_site = limit_text(strip_tags($meta->description), TEXTLENGH_DESCRIPTION);
		}
		if($seoMeta->keyword_site == '') {
			$seoMeta->keyword_site = 'Game '.$meta->name.', trò chơi '.$meta->name.', game cho mobile hay nhất tại choinhanh.vn';
		}
		if($seoMeta->title_fb == '') {
			$seoMeta->title_fb = $meta->name;
		}
		if($seoMeta->description_fb == '') {
			$seoMeta->description_fb = limit_text(strip_tags($meta->description), TEXTLENGH_DESCRIPTION);
		}
		// if($seoMeta->image_url_fb == '') {
		//     $seoMeta->image_url_fb = url(UPLOAD_GAME_AVATAR . '/' . $meta->image_url);
		// }
		return $seoMeta;
	}

	public static function uploadImg($path, $folder, $imageUrl, $imageCurrent = NULL)
	{
		$destinationPath = public_path().'/'.$path.'/'.$folder.'/';
		if(Input::hasFile($imageUrl)){
			$file = Input::file($imageUrl);
			$filename = $file->getClientOriginalName();
			$filename = changeFileNameImage($filename);
			$uploadSuccess = $file->move($destinationPath, $filename);
			return $filename;
		}
		if ($imageCurrent) {
			return $imageCurrent;
		}
	}
	public static function getCategory(){
		$data = Product::whereNull('parent_id')->get();
		return $data;
	}
	public static function getCategoryById($id){
		$data = Product::whereNull('parent_id')->where('id', $id)->get();
		return $data;
	}
	public static function getSubCategory($id)
	{
		return Product::where('parent_id', $id)->get();
	}
	public static function getProduct($id, $i)
	{
		$data = Product::where('parent_id', $id)->lists('id');
		$data = Product::whereIn('parent_id', $data)->orderBy('weight_number', 'desc')->orderBy('id', 'desc')->skip($i* RECORDS)->take(RECORDS)->get();
		return $data;
	}
	public static function countPageProduct($id){
		$listID = Product::where('parent_id', $id)->lists('id');
		$data = count(Product::whereIn('parent_id', $listID)->orderBy('id', 'desc')->get());
		$ketqua = ceil($data / RECORDS);
		return $ketqua;
	}
	public static function getCategoryNameByproduct($id)
	{
		$id = Product::find($id);
		$data = Product::find($id->parent_id);
		if($data->parent_id){
			return Product::find($data->parent_id);
		}else
		{
			return $data;
		}

	}
	public static function getTopProductDetail($id)
	{
		$data = Product::where('parent_id', $id)->lists('id');
		$data = Product::whereIn('parent_id', $data)->orderBy('weight_number', 'desc')->skip(1)->take(5)->get();
		return $data;
	}
	public static function getSlideHome()
	{
		$data = AdminSlide::where('type', SLIDE_TOP)->first();
		return $data->images;
	}

}