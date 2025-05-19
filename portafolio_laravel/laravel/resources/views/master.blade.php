<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="description" content="{{ setting('site.description') }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ setting('site.title') }}</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <style type="text/tailwindcss">
        @theme {
        --color-clifford: #da373d;
        }
    </style>
</head>

<body>
    @yield('content')
</body>

</html>