<?php

class SearchController extends SiteController {

	public function search()
	{
		$input = Input::except('_token');
		$data = Product::where('name', 'like', '%'.$input['keyword'].'%')->where('typemenu', TYPEPRODUCT)
			->get();
		dd($data->toArray(0));
		return View::make('fromtend.search')->with(compact('data'));
	}

}
