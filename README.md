Install Statamic v2 from scratch

1. After unpack Statamic, setup Lando with simple Lamp config
2. `cp sample.htaccess .htaccess`
3. `lando start`
4. Open site and browser and add `/installer.php`. Press Enter
5. After installation, run in terminal `lando php please clear:site --force` `lando php please make:theme my-theme`
6. To setup webpack instead gulp and for using tailwind css follow instructions `https://gist.github.com/binoclard/c7237c55038e5aa51877ce5c6451cda6`

 "cross-env": "^5.1.3",
        "laravel-mix": "^2.0.0",
        "tailwindcss": "^0.5.3",
        "webpack": "^3.11.0"

        "laravel-mix-purgecss": "^2.2.0"