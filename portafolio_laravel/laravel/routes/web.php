<?php

use Illuminate\Support\Facades\Route;
use TCG\Voyager\Models\Page;

Route::get('/', function () {
    return view('welcome');
});


Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});


Route::get('pages', function () {
    return view('pages/pages');
});


Route::get('/pages/{slug}', function ($slug) {
    $page = Page::where('slug', $slug)
                ->where('status', 'ACTIVE') // solo si está activa
                ->firstOrFail();

    return view('pages/pages-views', compact('page'));
});