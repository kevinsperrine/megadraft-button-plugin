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
            placeholder="Text"
            value={this.props.data.text}
            onChange={this._handleTextChange}
          />
          <BlockInput
            placeholder="Url"
            value={this.props.data.url}
            onChange={this._handleUrlChange}
          />
          <input
            name="target"
            type="radio"
            value="webview"
            checked={this.props.data.target === "webview"}
            onChange={this._handleTargetChange}
          />{" "}
          WebView
          <input
            name="target"
            type="radio"
            value="browser"
            checked={this.props.data.target === "browser"}
            onChange={this._handleTargetChange}
          />{" "}
          Browser
        </BlockData>
      </CommonBlock>
    );
  }
}
