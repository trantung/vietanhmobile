<?php

class AdminSlideController extends AdminController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$slides = AdminSlide::orderBy('id', 'desc')->get();
		return View::make('admin.slider.index')->with(compact('slides'));
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		return View::make('admin.slider.create');
	}


	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		$input = Input::all();
		$input = Input::except('_token', 'image_url');
		$input['type'] = SLIDE_TOP;
		$slideId = AdminSlide::create($input)->id;
		$inputAll = Input::all();
		$listImage = $inputAll['image_url'];
		$this->commonImage($inputAll, $slideId);


		return Redirect::action('AdminSlideController@index');
	}


	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//
	}


	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		$slide = AdminSlide::find($id);
		return View::make('admin.slider.edit')->with(compact('slide'));
	}


	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		$input = Input::except('_token', '_method');
		$input['type'] = SLIDE_TOP;
		if ($input['image_url'][0]) {
			Images::where('slide_id', $id)->delete();
			$this->commonImage($input, $id);
		}
		else{
			$images = $input['image'];
			if ($images) {
				foreach ($images as $key => $image) {
					if ($images[$key]) {
						$path = UPLOAD_IMAGE_SLIDE;
						$destinationPath = public_path().'/image'.$path . '/' . $id;
						$filename = $image->getClientOriginalName();
						$uploadSuccess   =  $image->move($destinationPath, $filename);
						Images::find($key)->update(['image_url' => $filename]);
					}
				}
			}
			
		}
		AdminSlide::find($id)->update(Input::except('_token', '_method', 'image_url', 'image'));

		return Redirect::action('AdminSlideController@index');
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		AdminSlide::find($id)->delete();
		return Redirect::action('AdminSlideController@index');
	}

	// public function search()
	// {
	// 	$input = Input::all();
	// 	if (!$input['keyword']) {
	// 		return Redirect::action('AdminSlideController@index');
	// 	}
	// 	$slides = AdminSlide::where('name', 'like', '%'.$input['keyword'].'%')->paginate(PAGINATE_SLIDE);
	// 	// dd($input);
	// 	return View::make('admin.slider.index')->with(compact('slides'));
	// }
	public function commonImage($inputAll, $slideId)
		{
			foreach ($inputAll['image_url'] as $key => $value) {
				if ($value) {
					$path = UPLOAD_IMAGE_SLIDE;
					$destinationPath = public_path().'/images' .$path. '/' . $slideId;
					$filename = $value->getClientOriginalName();
					$uploadSuccess   =  $value->move($destinationPath, $filename);
					$adminImage['slide_id'] = $slideId;
					$adminImage['image_url'] = $filename;
					$imageRelateId[] = Images::create($adminImage)->id;
				}
			}
		}
	public function deleteSlide($id)
	{
		Images::find($id)->delete();
	}
}
