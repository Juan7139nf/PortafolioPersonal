<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="description" content="{{ $page->meta_description }}">
    <meta name="keywords" content="{{ $page->meta_keywords }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $page->title }}</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <style type="text/tailwindcss">
      @theme {
        --color-clifford: #da373d;
      }
    </style>
</head>
<body>
    <h1 class="text-3xl font-bold underline text-clifford">
      Hello world!
    </h1>
    <div class="max-w-3xl mx-auto">
        <h1 class="text-3xl font-bold mb-4">{{ $page->title }}</h1>

        @if ($page->image)
            <img src="{{ Voyager::image($page->image) }}" alt="{{ $page->title }}" class="mb-4">
        @endif

        <div class="prose">
            {!! $page->body !!}
        </div>
    </div>
</body>
</html>
