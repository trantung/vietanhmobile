<?php

class ConfigHeaderController extends AdminController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		return $this->edit(1);
	}


	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}


	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		//
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
		$data = Header::find(1);
		return View::make('admin.header.edit')->with(compact('data', 'id'));
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
            'description'   => 'required',
            // 'en_description' => 'required',
        );
        $input = Input::except('_token');
		$validator = Validator::make($input,$rules);
		if($validator->fails()) {
			return Redirect::action('ConfigHeaderController@edit', $id)
	            ->withErrors($validator);
        } else {
        	$data = Header::find($id);
        	$data->update(['description' => $input['description']]);
			return Redirect::action('ConfigHeaderController@edit', $id);
        }
	}


	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	// public function destroy($id)
	// {
	// 	Customer::find($id)->delete();
 //        return Redirect::action('ConfigHeaderController@feedback');
	// }

	// public function feedback()
	// {
	// 	$data = Customer::orderBy('id', 'desc')->paginate(PAGINATE);
	// 	return View::make('admin.header.index')->with(compact('data'));
	// }

}
