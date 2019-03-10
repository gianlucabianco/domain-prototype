<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
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
  </body>
</html>
