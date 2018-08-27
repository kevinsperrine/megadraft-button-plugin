"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _megadraft = require("megadraft");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2018, Kevin S Perrine <kperrine@gmail.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * License: MIT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var BlockContent = _megadraft.MegadraftPlugin.BlockContent,
    BlockData = _megadraft.MegadraftPlugin.BlockData,
    BlockInput = _megadraft.MegadraftPlugin.BlockInput,
    CommonBlock = _megadraft.MegadraftPlugin.CommonBlock;

var Block = function (_Component) {
  _inherits(Block, _Component);

  function Block(props) {
    _classCallCheck(this, Block);

    var _this = _possibleConstructorReturn(this, (Block.__proto__ || Object.getPrototypeOf(Block)).call(this, props));

    _this._handleUrlChange = _this._handleUrlChange.bind(_this);
    _this._handleTextChange = _this._handleTextChange.bind(_this);
    _this._handleTargetChange = _this._handleTargetChange.bind(_this);

    _this.actions = [{
      key: "delete",
      icon: _megadraft.MegadraftIcons.DeleteIcon,
      action: _this.props.container.remove
    }];
    return _this;
  }

  _createClass(Block, [{
    key: "_handleEdit",
    value: function _handleEdit() {
      alert(JSON.stringify(this.props.data, null, 4));
    }
  }, {
    key: "_handleUrlChange",
    value: function _handleUrlChange(event) {
      this.props.container.updateData({ url: event.target.value });
    }
  }, {
    key: "_handleTextChange",
    value: function _handleTextChange(event) {
      this.props.container.updateData({ text: event.target.value });
    }
  }, {
    key: "_handleTargetChange",
    value: function _handleTargetChange(event) {
      this.props.container.updateData({ target: event.target.value });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        CommonBlock,
        _extends({}, this.props, { actions: this.actions }),
        _react2.default.createElement(
          BlockContent,
          null,
          this.props.data.text ? _react2.default.createElement(
            "a",
            { className: "mbpButton", href: this.props.data.url },
            this.props.data.text
          ) : null
        ),
        _react2.default.createElement(
          BlockData,
          null,
          _react2.default.createElement(BlockInput, {
            placeholder: "Button Text",
            value: this.props.data.text,
            onChange: this._handleTextChange
          }),
          _react2.default.createElement(BlockInput, {
            placeholder: "Button Url",
            value: this.props.data.url,
            onChange: this._handleUrlChange
          }),
          _react2.default.createElement(
            "div",
            { className: "block__input__row" },
            _react2.default.createElement(
              "div",
              { className: "block__input__wrapper" },
              _react2.default.createElement(
                "span",
                { className: "block__input mbpRadioInput" },
                _react2.default.createElement(
                  "span",
                  { style: { marginRight: "12px" } },
                  "Open Link:"
                ),
                _react2.default.createElement("input", {
                  name: "target",
                  type: "radio",
                  value: "_self",
                  checked: this.props.data.target === "_self",
                  onChange: this._handleTargetChange
                }),
                " ",
                "In-App"
              ),
              _react2.default.createElement(
                "span",
                { className: "block__input mbpRadioInput" },
                _react2.default.createElement("input", {
                  name: "target",
                  type: "radio",
                  value: "_blank",
                  checked: this.props.data.target === "_blank",
                  onChange: this._handleTargetChange
                }),
                " ",
                "External"
              ),
              _react2.default.createElement(
                "span",
                { className: "mbpHelperText" },
                "If being used on a webpage, 'In-App' will open the link in the same tab and 'External' will open a new tab."
              )
            )
          )
        )
      );
    }
  }]);

  return Block;
}(_react.Component);

exports.default = Block;