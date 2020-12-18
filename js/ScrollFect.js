/** ScrollFectJS */

/**
 * Скрипты предоставлены для работы ScrollFectJS
 *
 * Author: Alexandr Shamanin (@slpAkkie)
 * Version: 1.0.0
 * File Version: 1.0.0
*/





class ScrollFect {

  /**
   * @property {Object} Список анимаций элементов с доступом по ключу (HTMLElement который анимируется).
   */
  static #animated_store = new Object( {
    appearance: new Map(),
    parallax: new Map(),
    animate: new Map()
  } );

  /**
   * @property {Object} Список доступных анимаций
   */
  static animations = new Object( {
    appearance: {
      get Fade() { return 'appearanceFade' }
    }
  } );

  /**
   * @var {Object} Хранилище анимаций. Элементы - функции возвращающие сгенерированную анимацию. Название начинается с ее типа
   * appearance - анимации появления
   */
  static #animation_store = new Object( {
    appearanceFade: function ( el, options ) {

    }
  } );



  /**
   * Устанавливает анимацию для переданных элементов
   *
   * @param {string|HTMLElement|array} elements Элементы, которые должны быть анимированы. Может быть CSS селектором, конкретным HTML элементом (HTMLElement) или массивом из этих вариантов
   * @param {Object} options Опции, передаваемые конструктору анимаций
   *
   * @returns {Function} Функция, которой были анимированы элементы
   */
  static appearance( elements, options = {} ) {

  }



  /**
   * Устанавливает параллакс для элементов или их фона
   *
   * @param {string|HTMLElement|array} elements Элементы, которые должны быть анимированы. Может быть CSS селектором, конкретным HTML элементом (HTMLElement) или массивом из этих вариантов
   * @param {Object} options Опции, передаваемые конструктору анимаций
   *
   * @returns {Function} Функция, которой были анимированы элементы
   */
  static parallax( elements, options = {} ) {

  }



  /**
   * Анимирует переданные элементы пользовательской функцией
   *
   * @param {string|HTMLElement|array} elements Элементы, которые должны быть анимированы. Может быть CSS селектором, конкретным HTML элементом (HTMLElement) или массивом из этих вариантов
   * @param {Function} func Пользовательская функция анимации
   * @param {Object} options Опции, передаваемые конструктору анимаций
   *
   * @returns {Function} Функция, которой были анимированы элементы
   */
  static animate( elements, func, options = {} ) {

  }



  /**
   * Добавляет пользовательскую функцию анимации в хранилище
   *
   * @param {string} animationType Тип регистрируемой анимации, например, appearance
   * @param {string} name Имя анимации, по которой она потом будет доступна
   * @param {Function} func Пользовательская функция анимации
   *
   * @returns {Function} Зарегистрированная функция
   */
  static registerAnimation( animationType, name, func ) {

  }



  /**
   * Удалить анимацию для элементов
   *
   * @param {string|HTMLElement|array} elements Элементы, для которых необходимо удалить анимации
   * @param {string} type Тип анимации, которую надо удалить
   * @param {Function} func Конкретная анимация, которую надо удалить
   *
   * @returns {void}
   */
  static removeHandlerFor( elements, type, func = null ) {

  }



  /**
   * Очистить все установленные анимации
   *
   * @param {string|HTMLElement|array} elements Элементы, для которых надо очистить анимации
   *
   * @returns {void}
   */
  static clearHandlers( elements ) {

  }



  /**
   * Обрабатывает переданные элементы, чтобы получить массив готовых HTML элементов
   *
   * @param {string|HTMLElement|array} elements Элементы, которые надо обработать
   *
   * @returns {array} Массив HTML элементов
   */
  static #handleElements( elements ) {

  }



  /**
   * Поиск элемента на странцие по CSS селектору
   *
   * @param {string} selector CSS селектор, по которому будет искаться элемент
   *
   * @returns {HTMLElement|null}
   */
  static #getElementsBySelector( selector ) {

  }



  /**
   * Проверяет можно ли HTML элементу задать анимацию
   *
   * @param {HTMLElement} HTMLElements
   *
   * @returns {HTMLElement|null}
   */
  static #handleHTMLElements( HTMLElements ) {

  }



  /**
   * Генерирует анимацию появления для переданного элемента
   *
   * @param {HTMLElement} element Элемент, для которого генерируется функция
   * @param {Object} options Опции для анимации
   */
  static #getAppearance( element, options = {} ) {

  }



  /**
   * Генерирует анимацию параллакса для переданного элемента
   *
   * @param {HTMLElement} element Элемент, для которого генерируется функция
   * @param {Object} options Опции для анимации
   */
  static #getParallax( element, options = {} ) {

  }



  /**
   * Добавляет элемент в хранилище, сохраняя его функцию
   *
   * @param {HTMLElement} element Регистрируемый элемент
   * @param {Function} func Функция, соответствующая элементу
   */
  static #registerElement( element, func ) {

  }

}
