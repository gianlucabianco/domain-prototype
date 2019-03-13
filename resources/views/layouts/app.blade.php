<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <link rel="stylesheet" href=" {{ asset('css/app.css') }}">
    <title></title>
  </head>
  <body>
    @yield('header')
    @yield('about')
    @yield('merits')
    @yield('skills')
    @yield('projects')
    @yield('blog')
    @yield('contact')
    @yield('footer')

    <script src="{{ asset('js/animation.js') }}" charset="utf-8"></script>
    <script src="{{ asset('js/app.js') }}" charset="utf-8"></script>
  </body>
</html>
