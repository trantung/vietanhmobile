<?php 

class TypeProductController extends AdminController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$data = Product::whereNull('parent_id')->orderBy('id', 'desc')->paginate(PAGINATE);
		return View::make('admin.category.index')->with(compact('data'));
	}


	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		return View::make('admin.category.create');
	}


	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		$rules = array(
			'name' => 'required',
		);
		$input = Input::except('_token');
		$validator = Validator::make($input,$rules);
		if($validator->fails()) {
			return Redirect::action('TypeProductController@create')
	            ->withErrors($validator);
        }else{
        	$input['typemenu'] = TYPEMENU;
        	if($input['parent_id'] == 0)
        	{
        		$input['parent_id'] = null;
        	}
        	$id =CommonNormal::create($input);
        	$input['image_url'] = CommonUpload::uploadImage($id, UPLOADIMG, 'image_url',UPLOAD_CATEGORY);
        	CommonNormal::update($id, ['image_url' => $input['image_url']] );
        	return Redirect::action('TypeProductController@index');

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
		return View::make('admin.category.edit')->with(compact('data'));
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
			'name' => 'required',
		);
		$input = Input::except('_token');
		$validator = Validator::make($input,$rules);
		if($validator->fails()) {
			return Redirect::action('TypeProductController@edit', $id)
	            ->withErrors($validator);
        }else{
        	if($input['image_url'] != null)
        	{
        		$input['image_url'] = CommonUpload::uploadImage($id, UPLOADIMG, 'image_url',UPLOAD_CATEGORY);        		
        	}else
        	{
				$input['image_url'] = Product::find($id)->image_url;
        	}
        	if($input['parent_id'] == 0)
        	{
        		$input['parent_id'] = null;
        	}
        	CommonNormal::update($id, $input);
        	return Redirect::action('TypeProductController@index');

        }
	}


	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		Product::find($id)->delete();
		return Redirect::action('TypeProductController@index');
	}


}
