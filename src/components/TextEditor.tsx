// src/components/TextEditor.js
import { useState } from "react";
import { Editor, EditorState, RichUtils, convertToRaw, convertFromRaw } from "draft-js";
import "draft-js/dist/Draft.css";

const TextEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleKeyCommand = (command: any) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  const onBoldClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
  };

  const onItalicClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "ITALIC"));
  };

  const handlePastedText = (text: string) => {
    // Remove all text styles
    const rawContentState = convertToRaw(editorState.getCurrentContent());
    const plainText = rawContentState.blocks
      .map((block) => block.text)
      .join("\n");
    const contentState = convertFromRaw({
      blocks: [{ type: "unstyled", text: plainText }],
      entityMap: {},
    });
    const newEditorState = EditorState.createWithContent(contentState);
    setEditorState(newEditorState);
  };

  return (
    <div>
      <button onClick={onBoldClick}>Bold</button>
      <button onClick={onItalicClick}>Italic</button>
      <div style={{ border: "1px solid black", minHeight: "200px" }}>
        <Editor
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          handlePastedText={handlePastedText}
          onChange={setEditorState}
        />
      </div>
    </div>
  );
};

export default TextEditor;
