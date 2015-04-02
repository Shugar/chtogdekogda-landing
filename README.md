# chtogdekogda-landing

We use:
  - nodejs
  - npm
  - bower
  - brunch

How to install: 
```sh
npm install
bower install
```

How to start server:
```sh
brunch w -s
```

How to build:

```sh
brunch build
```

Guidelines for writing your code: 


##Stylus syntax


####Вложенность

```sh
.example-1
  .example-2
    .example-2-1
  .example-3
    .example-3-1
```

##Jade syntax

####Блоки с контентом
```sh
.block(любой блок, например header)
  .container
    здесь контент
```
##Github

Писать нужно нормальные комментраии, желательно на английском языке:
- Если добавили какие-либо файлы в проект: 
```sh
git add -A
```
- Сверстали блок: 
```sh
git commit -a -m "твой комментарий" 
git push
```
