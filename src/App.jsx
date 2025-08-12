import { useState, useEffect } from 'react';
import MoodTabs from './components/MoodTabs';
import AlbumContainer from './components/AlbumContainer';
import './loader.css'; // we’ll put your loader CSS here

function App() {
    const moods = [
        { name: 'Everything', emoji: '🌀' },
        { name: 'Work', emoji: '💼' },
        { name: 'Workout', emoji: '🏋️‍♂️' },
        { name: 'Dance', emoji: '💃' },
        { name: 'Relax', emoji: '☕' },
        { name: 'Christmas', emoji: '🎄' },
    ];

    const [selectedMood, setSelectedMood] = useState(moods[0]);
    const [fetchedAlbumsData, setFetchedAlbumsData] = useState([]);
    const [loading, setLoading] = useState(true);

    const baseUrl = 'https://script.google.com/macros/s/AKfycbxDJS4AQ5WxT8lLrz5qwtiPOOKtW87l6PWkeVT9B3VCD0GAIrFQ_VfF_ChvEBae8JvO4A/exec'; // replace with your API URL

    useEffect(() => {
        setLoading(true);

        const url = `${baseUrl}?callback=jsonpCallback&action=fetchData`;

        window.jsonpCallback = (data) => {
            console.log('API Response (fetchData):', data);
            if (data.success) {
                const sorted = data.data.sort((a, b) => b.lastPlayedAt - a.lastPlayedAt);
                setFetchedAlbumsData(sorted);
            } else {
                console.error('Error fetching data:', data.message);
            }
            setLoading(false);
        };

        const script = document.createElement('script');
        script.src = url;
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            document.body.removeChild(script);
        };

        return () => {
            delete window.jsonpCallback;
        };
    }, []);

    return (
    <div className="min-h-screen bg-neutral-900">
        {loading ? (
            <div className="fixed inset-0 flex items-center justify-center">
                <span className="loader" role="status" aria-label="Loading"></span>
            </div>
        ) : (
            <>
                <MoodTabs
                    moods={moods}
                    selectedMood={selectedMood}
                    onChangeMood={setSelectedMood}
                />
                <AlbumContainer
                    albums={
                        selectedMood.name === 'Everything'
                            ? fetchedAlbumsData
                            : fetchedAlbumsData.filter((album) => album.mood === selectedMood.name)
                    }
                />
            </>
        )}
    </div>
);

}

export default App;
