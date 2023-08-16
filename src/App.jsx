import './App.css'
/**
 * @param {string} s 
 * @param {string} search 
 * @param {string} replace 
 * @returns {string}
 */
function replaceAll (s, search, replace) {
  return s.split(search).join(replace)
}

function App() {

  /** @type{string[]} */
  const songFiles= [
    'Cherry',
    'Demyelination',
    'Microlattice',
    'OGLE-TR-122b',
    'Ozone',
    'WF6',
    'Who_Let_This_Guy_in_Here!'
  ]

  function play(){
    console.log("play!");
  }
  
  function pause(){
    console.log("pause!");
  }

  function next(){
    console.log("next!");
  }

  function before(){
    console.log("before!");
  }

  /** @param {number} index */
  function playAt(index) {
      console.log('Playing At Index: ' + index);
  }

  return (
    <>
      <div className='content'>
        <div className="list-container">
          <div className="player">
            <h1 className="song-header" id="song-header">SONG TITLE</h1>
            <img src="/assets/jumpyBug_paused.png" className='song-image' id='song-image' />

            <div className="song-controls">
              <img
                src="/assets/navigate_before_FILL0_wght400_GRAD0_opsz48.svg"
                className="song-control-img"
                onClick={before}/>
              <img
                src="/assets/play_circle_FILL0_wght400_GRAD0_opsz48.svg"
                className="song-control-img"
                onClick={play} hidden/>
              <img
                src="/assets/pause_circle_FILL0_wght400_GRAD0_opsz48.svg"
                className="song-control-img"
                onClick={pause} />
              <img
                src="/assets/navigate_next_FILL0_wght400_GRAD0_opsz48.svg"
                className="song-control-img"
                onClick={next}/>
            </div>
          </div>

          <div className="song-list" id="song-list">
            {songFiles.map((song, i) => (<span key={i} className='song' onClick={() => playAt(i)}>{replaceAll(song, '_', ' ')}</span>))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
