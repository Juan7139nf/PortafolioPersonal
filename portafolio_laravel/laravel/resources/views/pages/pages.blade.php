@extends('master')

@section('content')
    <?php
    use TCG\Voyager\Models\Page;

    $pages = Page::all()->where('status', 'ACTIVE');
        ?>

    <ul>
        @foreach($pages as $page)
            <li><a href="{{ url("pages", $page->slug) }}">{{ $page->title }}</a></li>
        @endforeach
    </ul>
@endsection