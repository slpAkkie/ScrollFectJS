/** ScrollFectJS */

/**
 * Скрипты предоставлены для работы ScrollFectJS
 *
 * Author: Alexandr Shamanin (@slpAkkie)
 * Version: 1.0.8
 * File Version: 1.2.10
*/





class ScrollFect {



  /**
   * @var {Map} Список анимированных блоков с их параметрами
   */
  static animatedStore = new Map();

  /**
   * @var {Object} Предопределенные анимации
   */
  static animationStore = new Object( {

    /**
     * Конструкт анимации плавного появления с увеличением
     *
     * @param {array} elems Массив HTMLElement'ов
     * @param {object} options Параметры
     */
    appearanceFade: function ( elems, options ) {
      let params = options.params;
      ( !params.minScale || ( typeof params.minScale !== 'number' ) ) && ( params.minScale = 0.85 );

      for ( let i = 0; i < elems.length; i++ ) {
        elems[ i ].style.transition = '';

        elems[ i ].style.opacity = '0';
        elems[ i ].style.transform = `scale(${params.minScale})`;

        /** HACK: Строчка нужна, чтобы стили, заданные выше применились до того, как я их снова изменю */
        elems[ i ].offsetWidth;

        elems[ i ].style.transitionProperty = 'opacity, transform';
        elems[ i ].style.transitionDuration = `${options.duration}s`;
        elems[ i ].style.transitionTimingFunction = 'ease';
      }

      /**
       * Функция изменения состояния блока
       *
       * @param {boolean} visible Виден ли сейчас блок
       */
      return function ( visible ) {
        if ( visible ) {
          this.style.opacity = '1';
          this.style.transform = 'scale(1)';
        } else {
          this.style.opacity = '0';
          this.style.transform = `scale(${params.minScale})`;
        }
      }
    },

    /**
     * Конструкт анимации появления сверху
     *
     * @param {array} elems Массив HTMLElement'ов
     * @param {object} options Параметры
     */
    appearanceSlideTop: function ( elems, options ) {
      let params = options.params;
      ( !params.offset || ( typeof params.offset !== 'number' ) ) && ( params.offset = -25 );
      params.offset = -Math.abs( params.offset );

      for ( let i = 0; i < elems.length; i++ ) {
        elems[ i ].style.transition = '';

        elems[ i ].style.opacity = '0';
        elems[ i ].style.transform = `translateY(${params.offset}px)`;

        /** HACK: Строчка нужна, чтобы стили, заданные выше применились до того, как я их снова изменю */
        elems[ i ].offsetWidth;

        elems[ i ].style.transitionProperty = 'opacity, transform';
        elems[ i ].style.transitionDuration = `${options.duration}s`;
        elems[ i ].style.transitionTimingFunction = 'ease';
      }

      /**
       * Функция изменения состояния блока
       *
       * @param {boolean} visible Виден ли сейчас блок
       */
      return function ( visible ) {
        if ( visible ) {
          this.style.opacity = '1';
          this.style.transform = 'translateY(0px)';
        } else {
          this.style.opacity = '0';
          this.style.transform = `translateY(${params.topOffset}px)`;
        }
      }
    },

    /**
     * Конструкт анимации появления снизу
     *
     * @param {array} elems Массив HTMLElement'ов
     * @param {object} options Параметры
     */
    appearanceSlideBottom: function ( elems, options ) {
      let params = options.params;
      ( !params.offset || ( typeof params.offset !== 'number' ) ) && ( params.offset = 25 );
      params.offset = Math.abs( params.offset );

      for ( let i = 0; i < elems.length; i++ ) {
        elems[ i ].style.transition = '';

        elems[ i ].style.opacity = '0';
        elems[ i ].style.transform = `translateY(${params.offset}px)`;

        /** HACK: Строчка нужна, чтобы стили, заданные выше применились до того, как я их снова изменю */
        elems[ i ].offsetWidth;

        elems[ i ].style.transitionProperty = 'opacity, transform';
        elems[ i ].style.transitionDuration = `${options.duration}s`;
        elems[ i ].style.transitionTimingFunction = 'ease';
      }

      /**
       * Функция изменения состояния блока
       *
       * @param {boolean} visible Виден ли сейчас блок
       */
      return function ( visible ) {
        if ( visible ) {
          this.style.opacity = '1';
          this.style.transform = 'translateY(0px)';
        } else {
          this.style.opacity = '0';
          this.style.transform = `translateY(${params.topOffset}px)`;
        }
      }
    },

    /**
     * Конструкт анимации появления слева
     *
     * @param {array} elems Массив HTMLElement'ов
     * @param {object} options Параметры
     */
    appearanceSlideLeft: function ( elems, options ) {
      let params = options.params;
      ( !params.offset || ( typeof params.offset !== 'number' ) ) && ( params.offset = -25 );
      params.offset = -Math.abs( params.offset );

      for ( let i = 0; i < elems.length; i++ ) {
        elems[ i ].style.transition = '';

        elems[ i ].style.opacity = '0';
        elems[ i ].style.transform = `translateX(${params.offset}px)`;

        /** HACK: Строчка нужна, чтобы стили, заданные выше применились до того, как я их снова изменю */
        elems[ i ].offsetWidth;

        elems[ i ].style.transitionProperty = 'opacity, transform';
        elems[ i ].style.transitionDuration = `${options.duration}s`;
        elems[ i ].style.transitionTimingFunction = 'ease';
      }

      /**
       * Функция изменения состояния блока
       *
       * @param {boolean} visible Виден ли сейчас блок
       */
      return function ( visible ) {
        if ( visible ) {
          this.style.opacity = '1';
          this.style.transform = 'translateX(0px)';
        } else {
          this.style.opacity = '0';
          this.style.transform = `translateX(${params.offset}px)`;
        }
      }
    },

    /**
     * Конструкт анимации появления справа
     *
     * @param {array} elems Массив HTMLElement'ов
     * @param {object} options Параметры
     */
    appearanceSlideRight: function ( elems, options ) {
      let params = options.params;
      ( !params.offset || ( typeof params.offset !== 'number' ) ) && ( params.offset = 25 );
      params.offset = Math.abs( params.offset );

      for ( let i = 0; i < elems.length; i++ ) {
        elems[ i ].style.transition = '';

        elems[ i ].style.opacity = '0';
        elems[ i ].style.transform = `translateX(${params.offset}px)`;

        /** HACK: Строчка нужна, чтобы стили, заданные выше применились до того, как я их снова изменю */
        elems[ i ].offsetWidth;

        elems[ i ].style.transitionProperty = 'opacity, transform';
        elems[ i ].style.transitionDuration = `${options.duration}s`;
        elems[ i ].style.transitionTimingFunction = 'ease';
      }

      /**
       * Функция изменения состояния блока
       *
       * @param {boolean} visible Виден ли сейчас блок
       */
      return function ( visible ) {
        if ( visible ) {
          this.style.opacity = '1';
          this.style.transform = 'translateX(0px)';
        } else {
          this.style.opacity = '0';
          this.style.transform = `translateX(${params.offset}px)`;
        }
      }
    },

  } );



  /**
   * Устанавливает на блок анимацию появления, когда тот находится в видимой части экрана
   *
   * @param {string|array|HTMLElement} elements CSS селектор, HTMLElement или массив этих вариантов
   * @param {Object} options Параметры анимации
   */
  static appearance( elements, options ) {
    options = ScrollFect.getOptions( options );
    elements = ScrollFect.getElements( elements );
    ScrollFect.setAnimation( elements, options );


    if ( !window.ScrollFectAppearanceHandler ) {
      window.ScrollFectAppearanceHandler = true;
      window.addEventListener( 'scroll', ScrollFect.appearanceHandler );
      window.addEventListener( 'resize', ScrollFect.appearanceHandler );
    }

    setTimeout( ScrollFect.appearanceHandler, 0 );
  }



  /**
   * Обработчик прокрутки страницы
   *
   * Проверяет все анимированные блоки на то, видно ли их сейчас и применяет анимацию с переданным значение видимости
   */
  static appearanceHandler() {
    ScrollFect.animatedStore.forEach( ( options, el ) => {
      if ( el.scrollfectShown === true ) return;
      let inVisibleZone = ( options.onVisible === false ) || ScrollFect.inVisibleZone( el, options.gap );

      options.animation.call( el, inVisibleZone );

      if ( options.once ) ScrollFect.animatedStore.delete( el );
    } );
  }



  /**
   * Запрашивает анимацию, добавляет параметры и анимацию в хранилище, привязывая их к анимируемому блоку
   *
   * @param {array} elements Элементы, которые должны быть анимированы
   * @param {object} options Параметры анимации
   */
  static setAnimation( elements, options ) {
    options.animation = options.animation( elements, options );
    for ( let i = 0; i < elements.length; i++ )
      ScrollFect.animatedStore.set( elements[ i ], options );
  }



  /**
   * Удаляет элемент из анимируемых
   *
   * @param {string|array|HTMLElement} elements CSS селектор, HTMLElement или массив этих вариантов
   */
  static deleteFrom( elements ) {
    elements = ScrollFect.getElements( elements );

    for ( let i = 0; i < elements.length; i++ ) {
      ScrollFect.animatedStore.delete( elements[ i ] );
    }
  }



  /**
   * Проверяет находится ли элемент в видимой части экрана с поправкой на отступ
   *
   * @param {HTMLElement} el Проверяемый элемент
   * @param {number} gap Отступ сверху и снизу видимой области
   */
  static inVisibleZone( el, gap ) {
    if ( window.scrollY + gap.top < el.offsetTop + el.clientHeight && window.scrollY + innerHeight - gap.bottom > el.offsetTop )
      el.scrollfectShown = true;
    else
      el.scrollfectShown = false;

    return el.scrollfectShown;
  }



  /**
   * Устанавливает и проверяет параметры анимации
   *
   * @param {object} o Параметры анимации
   */
  static getOptions( o ) {
    if ( !o.animation || !o.duration ) return false;

    !o.once && ( o.once = false );
    ( o.onVisible !== false ) && ( o.onVisible = true );
    !o.params && ( o.params = {} );

    if ( o.gap ) {
      if ( typeof o.gap === 'number' ) o.gap = { top: o.gap, bottom: o.gap }
      else if ( Array.isArray( o.gap ) ) {
        if ( o.gap[ 0 ] && o.gap[ 1 ] ) o.gap = { top: o.gap[ 0 ], bottom: o.gap[ 1 ] }
      }
      else if ( typeof o.gap === 'object' ) {
        if ( o.gap.top && o.gap.bottom ) o.gap = { top: o.gap.top, bottom: o.gap.bottom }
      }
      else return false;
    }
    else o.gap = { top: 0, bottom: 0 };

    return o;
  }



  /**
   * Получить элементы для анимирования
   *
   * @param {string|array|HTMLElement} elements CSS селектор, HTMLElement или массив этих вариантов
   * @param {number} depth Глубина рекурсии
   *
   * @returns {array} Массив HTMLElement'ов
   */
  static getElements( elements, depth = 1 ) {
    if ( typeof elements === 'string' ) {
      elements = Array.from( document.querySelectorAll( elements ) );
    }

    else if ( Array.isArray( elements ) ) {
      if ( depth === 1 ) for ( let i = 0; i < elements.length; i++ ) {
        let element = ScrollFect.getElements( elements[ i ], depth + 1 );
        if ( element === false ) return false;
        Array.isArray( element )
          ? elements.splice( i, 1, ...element )
          : elements.splice( i, 1, element );
      }
      else {
        console.error( `Внутри массива находился недопустимый тип элемента. Допустима строка, встречено '${typeof elements}'` );
        return false;
      }
    }

    else if ( !( elements instanceof Element ) ) {
      console.error( `Первый аргумент передан неверно. Ожидалась строка или массив передано '${typeof elements}'` );
      return false;
    }

    if ( depth === 1 && elements instanceof Element ) return [ elements ];

    return elements;
  }



}
