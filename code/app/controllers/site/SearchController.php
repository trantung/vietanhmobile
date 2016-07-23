<?php

class SearchController extends SiteController {

	public function search()
	{
		$input = Input::except('_token');
		$data = Product::where('name', 'like', '%'.$input['keyword'].'%')
			->get();
		return View::make('fromtend.search')->with(compact('data'));
	}

}
