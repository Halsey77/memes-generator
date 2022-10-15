import React, {useEffect} from 'react';
import ImageContainer from "./ImageContainer";

function MainBody() {
    const [allMemes, setAllMemes] = React.useState([]);
    const [numMemes, setNumMemes] = React.useState(20);
    const [images, setImages] = React.useState([]);

    useEffect(() => {
        const url = "https://api.imgflip.com/get_memes";
        fetch(url)
            .then(response => response.json())
            .then(response => {
                setAllMemes(response.data.memes);
                showMemes(response.data.memes);
            })
    }, [])

    function showMemes(memesArray) {
        //select different random allMemes from the array
        let randomMemes = [];
        const indexes = [];
        for (let i = 0; i < numMemes; i++) {
            let randomIndex = Math.floor(Math.random() * memesArray.length);
            while (indexes.includes(randomIndex)) {
                randomIndex = Math.floor(Math.random() * memesArray.length);
            }
            indexes.push(randomIndex);
            randomMemes.push(memesArray[randomIndex]);
        }

        setImages(randomMemes);
    }

    return (
        <main className="main-body">
            <select value={numMemes} onChange={(event) => setNumMemes(parseInt(event.target.value))}>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
                <option value="30">30</option>
            </select>
            <button className="button" onClick={() => showMemes(allMemes)}>Get memes</button>
            <ImageContainer images={images}/>
        </main>
    );
}

export default MainBody;
