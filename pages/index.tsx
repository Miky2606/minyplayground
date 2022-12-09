import { CodeMirrorDiv } from "../components/codeMirror/codeMirrror";
import { IframeView } from "../components/iframe/iframe";

export default function Home() {
  return (
    <div className="flex lg:flex-row flex-col p-2">
      <CodeMirrorDiv />
      <IframeView />
    </div>
  );
}
