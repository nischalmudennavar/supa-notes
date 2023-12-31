import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import ReactCodeMirror from "@uiw/react-codemirror";
import { useState } from "react";

export const NoteEditor = ({
  onSave,
}: {
  onSave: (note: { title: string; content: string }) => void;
}) => {
  const [code, setCode] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  return (
    <div className="card  border border-gray-200 ">
      <div className="card-body">
        <h2 className="card-title">
          <input
            type="text"
            className="input input-primary input-lg w-full font-bold"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
        </h2>
        <ReactCodeMirror
          value={code}
          width="500px"
          height="30vh"
          minWidth="100%"
          minHeight="30vh"
          extensions={[
            markdown({
              base: markdownLanguage,
              codeLanguages: languages,
            }),
          ]}
          onChange={(value) => setCode(value)}
          className="border border-gray-900 bg-inherit"
        />
      </div>
      <div className="card-actions justify-end">
        <button
          className="btn btn-primary"
          onClick={() => {
            onSave({
              title,
              content: code,
            });
            setCode("");
            setTitle("");
          }}
          disabled={title.trim().length === 0 || code.trim().length === 0}
        >
          Save
        </button>
      </div>
    </div>
  );
};
