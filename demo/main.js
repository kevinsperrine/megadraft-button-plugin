/*
 * Copyright (c) 2018, Kevin S Perrine <kperrine@gmail.com>
 *
 * License: MIT
 */

import React from "react";
import ReactDOM from "react-dom";
import { MegadraftEditor } from "megadraft";
import { editorStateFromRaw, editorStateToJSON } from "megadraft/lib/utils";

import plugin from "../src/plugin";

import INITIAL_CONTENT from "./content";

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: editorStateFromRaw(INITIAL_CONTENT)
    };
    this.onChange = ::this.onChange;
    this.handleDumpState = ::this.handleDumpState;
  }

  onChange(content) {
    this.setState({ content });
  }

  handleDumpState() {
    console.log(editorStateToJSON(this.state.content));
  }

  render() {
    const pluginName = "megadraft button plugin";
    return (
      <div className="content">
        <header>
          <h1>{pluginName} - Megadraft Plugin</h1>
          <button onClick={this.handleDumpState}>Dump State</button>
        </header>

        <div className="editor">
          <MegadraftEditor
            plugins={[plugin]}
            editorState={this.state.content}
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById("container"));
