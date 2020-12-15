/** ScrollFectJS */

/**
 * Скрипты предоставлены для работы ScrollFectJS
 *
 * Author: Alexandr Shamanin (@slpAkkie)
 * Version: 1.0.0
 * File Version: 1.0.0
*/





class ScrollFect {

  /** @property Количество запусков регистрации объектов */
  static runCount = 0;

  /** @property Режим отладки */
  static DEBUG__MODE = true;



  /** @property Отступ сверху экрана для расчета момента появления (Например если есть фиксированная шапка) */
  static offsetTop = 0;



  /** @property Внутренний отступ видимой части, на которой объекты начнут исчезать */
  static showPadding = 30;



  /** @property Массив уже зарегистрированных элементов */
  static animated = Array();



  /** @property {object} Ключ-значение - CSS классы анимирования */
  static animations = {

    /** @property {string} Плавное увеличение и появление */
    Fade: 'scrollfect--a-fade'

  };



  /**
   * Устанавливает анимацию для элемента
   *
   * @param {string|object} el Селектор элемнта или объект класса HTMLElement
   * @param {boolean|null} once Должна ли анимация проигрываться только один раз
   * @param {string|null} animation Какую анимацию задать
   */
  static animate( { el, once = false, animation = ScrollFect.animations.Fade } ) {

    ScrollFect.runCount++;

    dd();
    dd( `[ ${ScrollFect.runCount} ] Была инициирована регистрация элементов на анимирование` );

    el = ScrollFect.getEl( el );

    let scrollHandler = ScrollFect.getHandler( { el, once, animation } );
    document.addEventListener( 'scroll', scrollHandler );
    document.addEventListener( 'resize', scrollHandler );
    scrollHandler();

    dd( `[ ${ScrollFect.runCount} ] Регистрация завершена, обработчики установлены, первоначальный запуск выолнен` );
    dd();

  }



  /**
   * Получить со страницы элементы для анимирования и вернуть массив этих элементов
   *
   * @param {string|object|null} el Элементы для получения
   *
   * @returns {Array}
   */
  static getEl( el ) {

    if ( typeof el === 'string' && el.trim() !== '' ) {
      let elem = document.querySelectorAll( el.trim() );

      if ( elem.length === 0 ) el = null;
      else el = Array.from( elem );
    } else if ( el instanceof HTMLElement ) el = [ el ];
    else el = null;

    if ( el === null ) throw Error( 'Простите, но я не смог получить указанный элемент, пожалуйста проверьте правильность указанного в поле "el"' );

    return el;

  }



  /**
   * Генерация функции обработчика скорлла для указанных элементов с указанными настройками
   *
   * @param {Array} el Массив элементов, для которых будет сгенерирована функция
   * @param {bool} once Должна ли это функция изменять элементы только один раз
   * @param {string} animation Класс анимации для элементов
   *
   * @returns {function}
   */
  static getHandler( { el, once, animation } ) {

    el = el.filter( elem => { return ScrollFect.animated.indexOf( elem ) === -1 } );

    el.forEach( ( elem ) => {
      elem.setAttribute( 'scrollfect--s-show', false );
      once && elem.setAttribute( 'scrollfect--d-once', true );
      elem.classList.add( animation );

      ScrollFect.animated.push( elem );
    } );

    let scrollHandler = function () {
      el.forEach( ( elem ) => {

        if (
          window.pageYOffset + ScrollFect.offsetTop + ScrollFect.showPadding < elem.offsetTop + elem.offsetHeight &&
          window.pageYOffset + window.innerHeight - ScrollFect.showPadding > elem.offsetTop
        ) elem.setAttribute( 'scrollfect--s-show', true );
        else if ( !elem.attributes[ 'scrollfect--d-once' ] ) elem.setAttribute( 'scrollfect--s-show', false );

      } );
    }

    el.forEach( ( elem ) => { elem.scrollfectHandler = scrollHandler } );

    return scrollHandler;

  }



  /**
   * Вывод отладочной информации при включенном DEBUG_MODE
   *
   * @param {*} data Любое значение для вывода в консоли
   *
   * @returns {void}
   */
  static dd( data = '' ) { ScrollFect.DEBUG__MODE && console.log( data ); }

}



const dd = ScrollFect.dd;
