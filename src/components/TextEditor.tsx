

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from "react-draft-wysiwyg";
import { useEffect, useRef } from "react";

const TextEditor = ({ editorState, handleEditorChange, handleKeyCommand, handlePastedText, clearContent, onBoldClick, onItalicClick }) => {
  // Create a ref to store the editor element
  const editorRef = useRef(null);

  // Focus the editor when the component mounts
  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.focus();
    }
  }, []);

  return (
    <div>
      <div style={{ border: "1px solid black", minHeight: "300px" }}>
        <Editor
        ref={editorRef}
          editorState={editorState}
          toolbar={{
            options: [
              "inline",
              "blockType",
              "fontSize",
              "fontFamily",
              "list",
              "textAlign",
              "colorPicker",
              "link",
              "embedded",
              "emoji",
              "image",
              "remove",
              "history",
            ],
            inline: {
              options: [
                "bold",
                "italic",
                "underline",
                "strikethrough",
                "monospace",
              ],
            },
            blockType: {
              options: [
                "Normal",
                "H1",
                "H2",
                "H3",
                "H4",
                "H5",
                "H6",
                "Blockquote",
                "Code",
              ],
            },
            fontSize: {
              options: [10, 12, 14, 16, 18, 24, 30, 36, 48],
            },
            list: {
              options: ["unordered", "ordered"],
            },
            textAlign: {
              options: ["left", "center", "right", "justify"],
            },
          }}
          onEditorStateChange={handleEditorChange}
          handleKeyCommand={handleKeyCommand}
          handlePastedText={handlePastedText}
        />
      </div>
      <div className="button-container">
        <button onClick={onBoldClick}>Bold</button>
        <button onClick={onItalicClick}>Italic</button>
        <button onClick={clearContent}>Clear Content</button>
      </div>
    </div>
  );
};

export default TextEditor;
