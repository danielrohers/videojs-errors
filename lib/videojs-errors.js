/*! videojs-errors - v1.0.0 - 2016-4-2
 * Copyright (c) 2016 Daniel Röhers Moura
 * Licensed under the MIT license. */
(function(window, videojs) {

  'use strict';

  var defaults = {
    poster: null,
    errorDisplay: null,
    content: null,
    videojs: null,
    version: null
  }

  var _addError = function (message) {
    switch (defaults.version) {
      case 4:
        defaults.content.innerHTML = '<div>' + message + '</div>';
        defaults.content.style.display = 'block';
        defaults.videojs.classList.add('vjs-error');
        break;
      case 5:
        defaults.poster.style.display = 'block';
        defaults.videojs.classList.add('vjs-error');
        defaults.content.innerHTML = message;
        defaults.errorDisplay.setAttribute('aria-hidden', false);
        defaults.errorDisplay.classList.remove('vjs-hidden');
        break;
    }
  };

  var _removeError = function () {
    switch (defaults.version) {
      case 4:
        defaults.content.innerHTML = '<div></div>';
        defaults.content.style.display = 'none';
        defaults.videojs.classList.remove('vjs-error');
        break;
      case 5:
        defaults.poster.style.display = 'none';
        defaults.errorDisplay.classList.add('vjs-hidden');
        defaults.errorDisplay.setAttribute('aria-hidden', true);
        defaults.content.innerHTML = '';
        defaults.videojs.classList.remove('vjs-error');
        break;
    }
  };

  var _getError = function () {
    var message = '';
    switch (defaults.version) {
      case 4:
        message = defaults.content.querySelector('div').innerHTML;
        break;
      case 5:
        message = defaults.content.innerHTML;
        break;
    }
    return message;
  }

  /**
   * Initialize the plugin.
   * @param options (optional) {object} configuration for the plugin
   */
  var errors = function(options) {
    defaults.version = Number(videojs.VERSION.split('.')[0]);
    defaults.videojs = document.querySelector('.video-js');
    defaults.poster = defaults.videojs.querySelector('.vjs-poster');
    defaults.errorDisplay = defaults.videojs.querySelector('.vjs-error-display');
    defaults.content = defaults.version === 4 ? document.querySelector('.vjs-error-display') : defaults.videojs.querySelector('.vjs-modal-dialog-content');

    return {

      add : _addError,

      remove : _removeError,

      get : _getError

    };

  };

  // register the plugin
  videojs.plugin('errors', errors);

})(window, window.videojs);
