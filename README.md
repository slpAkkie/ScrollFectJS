# ScrollFectJS

Простой скрипт для анимирования блоков на сайте во время скролла

## Подключение

Подключите файл **ScrollFectJS** в теге `head` вашего html файла

## Использование

* Метод appearance задает анимацию, когда блок появляется в видимой области страницы
* Первый параметр это css селектор или html элемент или массив этих вариантов
* Второй параметр это объект, содержащий информацию для построения анимации

```js
ScrollFect.appearance( ".block", {
  animation: ScrollFect.animations.appearanceFade,
  duration: 0.750,
  once: false,
  gap: 50,
  params: {}
} );
```

* **animation** - Какая анимация должны быть проиграна (Может быть задана пользовательская анимация)
* **duration** - Длительность анимации
* **once**
  * true - Анимация проиграется один раз
  * false - будет проигрываться каждый раз
* **gap** - Отступы сверху и снизу видимой части экрана, на которой надо проигрывать анимация. Может быть задана просто числом (Отступ сверху и снизу), массивом ([сверху, снизу]) или объектом ({top: 50, bottom: 50})
* **params** - Параметры, которые пользователь хочет передать конструктору (Нужно только в случае, если это пользовательская анимация)
params: {}

## Автор

Alexandr Shamanin (@slpAkkie)

## Версия

1.0.2

## Лицензия

MIT
