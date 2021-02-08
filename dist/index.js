'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _slateHyperscript = require('slate-hyperscript');

var _nextSlatePlugin = require('@jswork/next-slate-plugin');

var _nextSlatePlugin2 = _interopRequireDefault(_nextSlatePlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _nextSlatePlugin2.default.define({
  id: 'bold',
  hotkey: 'mod+b',
  serialize: {
    input: function input(_ref, children) {
      var el = _ref.el;

      var nodeName = el.nodeName.toLowerCase();
      if (nodeName === 'span' && el.style.fontWeight === 'bold') {
        return (0, _slateHyperscript.jsx)('text', { bold: true }, children);
      }
    },
    output: function output(_ref2) {
      var el = _ref2.el;

      el.style.fontWeight = 'bold';
      return el;
    }
  },
  render: function render(_, _ref3) {
    var attributes = _ref3.attributes,
        children = _ref3.children,
        leaf = _ref3.leaf;

    return _react2.default.createElement(
      'strong',
      attributes,
      children
    );
  }
}); /**
     * @usage:
     * Editor.addMark(editor,'bold', true)
     */