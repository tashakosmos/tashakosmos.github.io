запуск в Terminal после mac\$: jekyll serve
открыть сайт в браузере: http://127.0.0.1:4000/
загрузить картинки: новая папка в разделе Images. Drag'n'drop.
Пронумеровать картинки по порядку.
копипаст другого поста и замена всех картинок
новый блок на Index с заголовком, картинкой и классами
не забывать сохранять каждое действие

Run:
'jekyll serve' in terminal

Main files and folders:

1. index.html
2. posts
3. images

Framework:

1. one picture
   {% include one-picture.html folder="rezo" picture="r1.jpg" %}
2. two pictures
   {% include two-pictures.html folder="rezo" picture1="r1.jpg" picture2="r2.jpg" %}
3. three pictures
   {% include three-pictures.html folder="rezo" picture1="r1.jpg" picture2="r2.jpg" picture3="r3.jpg"%}
4. [link](example.com){:target="\_blank"}

Links:
Markdown Cheatsheet:
https://github.com/adam-p/Markdown-here/wiki/Markdown-Cheatsheet

Foundation
https://foundation.zurb.com/building-blocks/

Index page gallery
https://isotope.metafizzy.co

Gallery settings
http://miromannino.github.io/Justified-Gallery/options-and-events/

Masonry
http://sachinchoolur.github.io/lightGallery/
