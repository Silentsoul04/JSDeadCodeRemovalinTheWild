import {Application} from 't3js';
import dom from '@buzzfeed/buzzblocks/js/services/dom';
import template from '../../components/quizzes/hall-of-fame.html';
import { fetch } from '@buzzfeed/buzzblocks/js/services/recsys-api';

Application.addModule('hall-of-fame', function (ctx) {
  'use strict';
  /**
   * Module for handling hall-of-fame package a/b test
   * @exports module:hall-of-fame
   */
  const module = {};
  const position = ctx.getConfig('position');
  let element = ctx.getElement();

  /**
   * Converts data received from components api to match template variables
   * @param {Object} src - quiz item received from components API
   * @param {Integer} number - number in package
   * @returns {Object} - object prepared for package template rendering
   */
  function convertItemData(src, {number}) {
    return {
      category: src.category || '',
      id: src.id,
      link: src.canonical_path,
      description: src.description,
      title: src.name,
      'image_dblwide': src.image.replace('_dblbig.', '_dblwide.'),
      'image_big': src.image,
      'image_alt_text': src.image_alt || '',
      number
    };
  }

  /**
   * Render and show package
   * @param data
   * @returns {HTMLElement} - child element for `feed-package-visual` module
   */
  function render(quizzes) {
    element.innerHTML = template.render({
      image_item: convertItemData(quizzes.shift(), {number: 0}),
      text_items: quizzes.map((quiz, i) => convertItemData(quiz, {number: i + 1})),
      package_type: 'hall-of-fame',
      position,
      data_source: quizzes[0].data_source,
      treatment: 'hall-of-fame|visual',
      sub_unit: 'package',
      unit_name: 'quizzes-hall-of-fame',
      config: {
        webRoot: BZFD.Config.webRoot
      }
    });
    dom.show(element);
    Application.start(dom.findOne(element, '.js-hall-of-fame'));
    Application.broadcast('hall-of-fame-active', { filter: 'quizzes' });
  }

  module.init = function() {
    if (BZFD.Context.page.edition !== 'us' || BZFD.Context.page.name !== 'quizzes') {
      return;
    }

    fetch('web/hall-of-fame/badges', { pageSize: 5, badge: 'quiz' })
      .then(render);
  };

  return module;
});
