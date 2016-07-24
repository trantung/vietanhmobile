<?php

class AdminProductController extends AdminController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$data = Product::where('typemenu', TYPEPRODUCT)->orderBy('id', 'desc')->paginate(PAGINATE);
		return View::make('admin.products.index')->with(compact('data'));
	}

	public function search()
	{
		$input = Input::all();
		// dd($input);
		$data = CommonProduct::searchProduct($input);
		return View::make('admin.products.index')->with(compact('data'));
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		return View::make('admin.products.create');
	}


	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		$rules = array(
			'name'   => 'required',
			'weight_number' => 'numeric',
		);
		$input = Input::except('_token');
		$validator = Validator::make($input,$rules);
		if($validator->fails()) {
			return Redirect::action('AdminProductController@create')
				->withErrors($validator)
				->withInput(Input::except('name'));
		} else {

			$input['typemenu'] = TYPEPRODUCT;
			if($input['parent_id'] == 0)
			{
				return Redirect::action('AdminProductController@create')->with('error', 'Phải chọn thể loại category');
			}
			$id =CommonNormal::create($input);
			$input['image_url'] = CommonUpload::uploadImage($id, UPLOADIMG, 'image_url',UPLOAD_PRODUCT);
			CommonNormal::update($id, ['image_url' => $input['image_url']] );
			return Redirect::action('AdminProductController@index');
		}
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
		$data = Product::find($id);
		return View::make('admin.products.edit')->with(compact('data'));
	}


	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
			$rules = array(
				'name'   => 'required',
				'weight_number' => 'numeric',
			);
			$input = Input::except('_token');
			$validator = Validator::make($input,$rules);
			if($validator->fails()) {
				return Redirect::action('AdminProductController@edit',$id)
					->withErrors($validator)
					->withInput(Input::except('name'));
			} else {

					if($input['image_url'] != null)
					{
						$input['image_url'] = CommonUpload::uploadImage($id, UPLOADIMG, 'image_url', UPLOAD_PRODUCT);	
					} else {
						$input['image_url'] = Product::find($id)->image_url;
					}
					if($input['parent_id'] == 0)
					{
						return Redirect::action('AdminProductController@edit', $id)->with('error', 'Phải chọn thể loại category');
					}
					
					CommonNormal::update($id, $input);
				}

			return Redirect::action('AdminProductController@index') ;

	}


	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		CommonNormal::delete($id);
		return Redirect::action('AdminProductController@index') ;
	}

}
