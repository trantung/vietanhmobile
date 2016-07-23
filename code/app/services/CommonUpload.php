<?php
use Carbon\Carbon;
class CommonUpload
{
	/**
	*uploadImage Upload image
	*/

	public static function uploadImage($id, $path, $imageUrl, $folder, $image = NULL)
	{
		$destinationPath = public_path().'/'.$path.'/'.$folder.'/'.$id.'/';
		if(Input::hasFile($imageUrl)){
			$file = Input::file($imageUrl);
			$filename = $file->getClientOriginalName();
			$uploadSuccess = $file->move($destinationPath, $filename);
			return $filename;
		}
		if ($image) {
			return $image;
		}
	}

	public static function getNameTypeSlide($type)
	{
		if ($type == SLIDE_TOP) {
			return 'Banner';
		}
		if ($type == SLIDE_BOTTOM) {
			return 'Đối tác';
		}

	}
	public static function uploadFile($input, $path){
		if (Input::hasFile('linkFile'))
			{
				$pathUpload =  $path  ;
			    $file = Input::file('linkFile');
				dd($file);			    
			    Input::file('linkFile')->move(''.$pathUpload.'/%s' ,'images/user');
			    // $file->move(''.$pathUpload.'/%s' , $file->getClientOriginalName());
		 
			    $image = Image::make(sprintf($pathUpload, $file->getClientOriginalName()))->save();
			}
	}

}