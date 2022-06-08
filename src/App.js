import './App.css';
import Images from './Images';
import {useState} from "react";
import {shuffle} from 'lodash';
import Accordian from './Components/Accordian';


function App() {

  //function for restarting the game
  function refreshPage() {
    window.location.reload();
    
  }
//installed lodash and used shuffle to get random images
  const [albums,setAlbums] = useState( shuffle([...Images, ...Images]) );
  const [clicks,setClicks] = useState(0);
  const [won,setWon] = useState(false);
  const [activeAlbums,setactiveAlbums] = useState([]);
  const [matches,setMatches] = useState([]);

//function called on click event
  function flipalbum(index) {
    if (won) {
      setAlbums(shuffle([...Images, ...Images]));
      setMatches([]);
      setWon(false);
      setClicks(0);
    }
    if (activeAlbums.length === 0) {
      setactiveAlbums([index]);
    }
    if (activeAlbums.length === 1) {
      const firstIndex = activeAlbums[0];
      const secondsIndex = index;
      if (albums[firstIndex] === albums[secondsIndex]) {
        if (matches.length + 2 === albums.length) {
          setWon(true);
        }
        setMatches( [...matches, firstIndex, secondsIndex] );
      }
      setactiveAlbums([...activeAlbums, index]);
    }
    if (activeAlbums.length === 2) {
      setactiveAlbums([index]);
    }
    setClicks(clicks + 1);
  }


  return (
    <div>
    <h1 className='header'>Match the albums!</h1>
    
      <div className="board">
        {albums.map((album,index) => {
          const flippedToFront =  (activeAlbums.indexOf(index) !== -1) || matches.indexOf(index) !== -1;
          return (
            <div className={"album-outer " + (flippedToFront ? 'flipped' : '')}
                  onClick={() => flipalbum(index)}>
              <div className="album">
                <div className="front">
                  <img src={album} alt=""/>
                </div>
                <div className="back" />
              </div>
            </div>
          );
        })}
      </div>
      <div className="results">
        {won && (
            <>You won! Congratulations!<br />
            Click the restart button to play again.<br /><br />
            </>
        )}
        Clicks: {clicks} &nbsp;&nbsp;&nbsp; Found pairs:{matches.length/2}
        </div>
      <Accordian />
      <button className='restartButton' onClick={ refreshPage }>Restart!</button>
    </div>
  );
}

export default App;
