import GuGuDanClass from './gugudan/GuGuDanClass';
import GuGuDanHooks from './gugudan/GuGuDanHooks';
import WordRelayClass from './wordRelay/WordRelayClass';
import WordRelayHooks from './wordRelay/WordRelayHooks';
import NumberBaseballClass from './numberBaseball/NBClass/NumberBaseballClass';
import NumberBaseballHooks from './numberBaseball/NBHooks/NumberBaseballHooks';


function App() {
  return (
    <>
      <h2>1.GuGuDan</h2>
      <span>Class Version</span>
      <GuGuDanClass />
      <br />
      <span>Hooks Version</span>
      <GuGuDanHooks />
      <br />
      <br />
      <h2>2.Word-Relay</h2>
      <span>Class Version</span>
      <WordRelayClass />
      <br />
      <span>Hooks Version</span>
      <WordRelayHooks />
      <h2>3.Number-Baseball</h2>
      {/* <span>Class Version</span> */}
      {/* <NumberBaseballClass /> */}
      <br />
      <span>Hooks Version</span>
      <NumberBaseballHooks />
    </>
  );
}

export default App;
