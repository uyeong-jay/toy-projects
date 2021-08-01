// import Lotto from './lotto/Lotto';
import GuGuDanClass from './gugudan/GuGuDanClass';
import GuGuDanHooks from './gugudan/GuGuDanHooks';
import WordRelayClass from './wordRelay/WordRelayClass';


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


      {/* <Lotto /> */}
    </>
  );
}

export default App;
