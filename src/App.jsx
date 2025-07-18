import { useState } from 'react';
import MoodTabs from './components/MoodTabs';
import AlbumContainer from './components/AlbumContainer';
// import SearchModal from './components/SearchModal';


function App() {
  const moods = [
    { name: 'Everything', emoji: '🌀' },
    { name: 'Morning', emoji: '🌞' },
    { name: 'Work', emoji: '💼' },
    { name: 'Workout', emoji: '🏋️‍♂️' },
    { name: 'Dance', emoji: '💃' },
    { name: 'Relax', emoji: '☕' },
  ];
  const [selectedMood, setSelectedMood] = useState(moods[0]);
  
  const [fetchedAlbumsData, setFetchedAlbumsData] = useState([
    { name: 'Test', url: 'test.com' },
    { name: 'trial', url: 'try.com' },
    { name: 'Yes!', artist: 'Jason Mraz', mood: 'Relax', url: 'https://music.apple.com/us/album/yes/877925874', imgSrc: 'https://is1-ssl.mzstatic.com/image/thumb/Video126/v4/7e/f9/11/7ef91190-90c0-2a8e-bbc0-aaefad222b79/Jobe698db8a-dd5d-433f-875d-c780dc5733f4-153268312-PreviewImage_Preview_Image_Intermediate_nonvideo_sdr_292525350_1511505095-Time1690232118486.png/592x592bb.webp'},
    { name: 'Minecraft', artist: 'C418', mood: 'Relax', url: 'https://music.apple.com/jp/album/minecraft-volume-alpha/424968465', imgSrc: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/08/11/31/08113125-d66e-1f90-65d9-08e28000495c/859705593825_cover.jpg/592x592bb.webp'},
    { name: 'Now That the Light Is Fading', artist: 'Maggie Rogers', mood: 'Morning', url: 'https://music.apple.com/jp/album/now-that-the-light-is-fading-ep/1440897454?l=en-US', imgSrc: 'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/dd/66/99/dd6699ee-e293-0178-eb66-fc38d00933ee/16UMGIM88298.rgb.jpg/592x592bb.webp'},
    { name: 'Donuts and Pizza (feat. george isaac)', artist: 'Rob S Max', mood: 'Dance', url: 'https://music.apple.com/us/album/donuts-and-pizza-feat-george-isaac-single/1667691353', imgSrc: 'https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/16/ae/4c/16ae4c25-d6c8-5f1e-db0f-feba3b82bc76/artwork.jpg/592x592bb.webp'},
  ]);
  const [searchOpen, setSearchOpen] = useState(false);


  return (
    <>
      <MoodTabs moods={moods} selectedMood={selectedMood} onChangeMood={setSelectedMood}/>
      <AlbumContainer
        albums={
          selectedMood.name === 'Everything'
            ? fetchedAlbumsData
            : fetchedAlbumsData.filter((album) => album.mood === selectedMood.name)
        }
      />
      {/* <button onClick={() => setSearchOpen(true)}>🔍</button>
      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />} */}
    </>
  )
}

export default App
