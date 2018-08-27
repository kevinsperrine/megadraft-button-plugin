/*
 * Copyright (c) 2018, Kevin S Perrine <kperrine@gmail.com>
 *
 * License: MIT
 */

import React, { Component } from "react";

import { MegadraftPlugin, MegadraftIcons } from "megadraft";

const { BlockContent, BlockData, BlockInput, CommonBlock } = MegadraftPlugin;

export default class Block extends Component {
  constructor(props) {
    super(props);

    this._handleUrlChange = ::this._handleUrlChange;
    this._handleTextChange = ::this._handleTextChange;
    this._handleTargetChange = ::this._handleTargetChange;

    this.actions = [
      {
        key: "delete",
        icon: MegadraftIcons.DeleteIcon,
        action: this.props.container.remove
      }
    ];
  }

  _handleEdit() {
    alert(JSON.stringify(this.props.data, null, 4));
  }

  _handleUrlChange(event) {
    this.props.container.updateData({ url: event.target.value });
  }

  _handleTextChange(event) {
    this.props.container.updateData({ text: event.target.value });
  }

  _handleTargetChange(event) {
    this.props.container.updateData({ target: event.target.value });
  }

  render() {
    return (
      <CommonBlock {...this.props} actions={this.actions}>
        <BlockContent>
          {this.props.data.text ? (
            <a className="mbpButton" href={this.props.data.url}>
              {this.props.data.text}
            </a>
          ) : null}
        </BlockContent>

        <BlockData>
          <BlockInput
            placeholder="Button Text"
            value={this.props.data.text}
            onChange={this._handleTextChange}
          />
          <BlockInput
            placeholder="Button Url"
            value={this.props.data.url}
            onChange={this._handleUrlChange}
          />
          <div className="block__input__row">
            <div className="block__input__wrapper">
              <span className="block__input mbpRadioInput">
                <span style={{ marginRight: "12px" }}>Open Link:</span>
                <input
                  name="target"
                  type="radio"
                  value="_self"
                  checked={this.props.data.target === "_self"}
                  onChange={this._handleTargetChange}
                />{" "}
                In-App
              </span>
              <span className="block__input mbpRadioInput">
                <input
                  name="target"
                  type="radio"
                  value="_blank"
                  checked={this.props.data.target === "_blank"}
                  onChange={this._handleTargetChange}
                />{" "}
                External
              </span>
              <span className="mbpHelperText">
                If being used on a webpage, 'In-App' will open the link in the
                same tab and 'External' will open a new tab.
              </span>
            </div>
          </div>
        </BlockData>
      </CommonBlock>
    );
  }
}
