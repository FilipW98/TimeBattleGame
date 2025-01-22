import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';
// import ResultModal from './components/ResultModal.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title={'Easy'} targetTime={1}/>
        <TimerChallenge title={'Not Easy'} targetTime={5}/>
        <TimerChallenge title={'Hard'} targetTime={10}/>
        <TimerChallenge title={'Pros only'} targetTime={15}/>
      </div>
      {/* <ResultModal/> */}
    </>
  );
}

export default App;