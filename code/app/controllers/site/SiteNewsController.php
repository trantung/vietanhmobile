<?php

class SiteNewsController extends SiteController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		// $lang = LaravelLocalization::setLocale();
		$inputListNews = AdminNew::where('start_date', '<=', Carbon\Carbon::now())
							->orderBy('id', 'desc')
							->paginate(FRONENDPAGINATE);
		return View::make('site.news.listNews')->with(compact('inputListNews'));
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
	public function show($slug)
	{
		$inputNew = AdminNew::findBySlug($slug);
		$inputRelated = AdminNew::where('type_new_id', $inputNew->type_new_id)
								->whereNotIn('id', [$inputNew->id])
								->where('start_date', '<=', Carbon\Carbon::now())
								->orderBy('id', 'desc')
								->limit(PAGINATE_RELATED)
								->get();
		return View::make('site.news.showNews')->with(compact('inputNew', 'inputRelated'));
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}


	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
	}


	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}


}
