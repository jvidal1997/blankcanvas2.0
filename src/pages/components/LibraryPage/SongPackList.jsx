import React from "react";

export const libraryData = [
    {
        name: "La Calma",
        artist: "Gonzy",
        album: "Desahogo",
        imgPath: require("../../../assets/chartImgs/gonzy-la-calma.png"),
        filePath: require("../../../assets/audio/LA CALMA.mp3"),
        difficulty: "Expert",
    },
    {
        name: "Gently",
        artist: "Drake",
        album: "For All The Dogs",
        imgPath: require("../../../assets/chartImgs/drake-gently.png"),
        filePath: require("../../../assets/audio/Drake - Gently ft. Bad Bunny.mp3"),
        difficulty: "Expert",
    },
    {
        name: "XTI",
        artist: "Chris Palace",
        album: "Trip 21",
        imgPath: require("../../../assets/chartImgs/chris-palace-xti.png"),
        filePath: require("../../../assets/audio/Chris Palace - XTI (Official Video).mp3"),
        difficulty: "Expert",
    },
    {
        name: "Baby Hello",
        artist: "Rauw Alejandro",
        album: "Playa Saturno",
        imgPath: require("../../../assets/chartImgs/rauw-alejandro-baby-hello.png"),
        filePath: require("../../../assets/audio/BABY HELLO.mp3"),
        difficulty: "Expert",
    },
    {
        name: "Cybertruck",
        artist: "Bad Bunny",
        album: "Nadie Sabe Lo Que Va a Pasar Mañana",
        imgPath: require("../../../assets/chartImgs/bad-bunny-cybertruck.png"),
        filePath: require("../../../assets/audio/CYBERTRUCK.mp3"),
        difficulty: "Expert",
    },
    {
        name: "Peaches",
        artist: "Jack Black",
        album: "The Super Mario Movie Sountrack",
        imgPath: require("../../../assets/chartImgs/jack-black-peaches.png"),
        filePath: require("../../../assets/audio/Jack-Black-Peaches.ogg"),
        difficulty: "Expert",
    },
    {
        name: "La Calma",
        artist: "Gonzy",
        album: "Desahogo",
        imgPath: require("../../../assets/chartImgs/gonzy-la-calma.png"),
        filePath: require("../../../assets/audio/LA CALMA.mp3"),
        difficulty: "Expert",
    },
    {
        name: "Gently",
        artist: "Drake",
        album: "For All The Dogs",
        imgPath: require("../../../assets/chartImgs/drake-gently.png"),
        filePath: require("../../../assets/audio/Drake - Gently ft. Bad Bunny.mp3"),
        difficulty: "Expert",
    },
    {
        name: "XTI",
        artist: "Chris Palace",
        album: "Trip 21",
        imgPath: require("../../../assets/chartImgs/chris-palace-xti.png"),
        filePath: require("../../../assets/audio/Chris Palace - XTI (Official Video).mp3"),
        difficulty: "Expert",
    },
    {
        name: "Baby Hello",
        artist: "Rauw Alejandro",
        album: "Playa Saturno",
        imgPath: require("../../../assets/chartImgs/rauw-alejandro-baby-hello.png"),
        filePath: require("../../../assets/audio/BABY HELLO.mp3"),
        difficulty: "Expert",
    },
    {
        name: "Cybertruck",
        artist: "Bad Bunny",
        album: "Nadie Sabe Lo Que Va a Pasar Mañana",
        imgPath: require("../../../assets/chartImgs/bad-bunny-cybertruck.png"),
        filePath: require("../../../assets/audio/CYBERTRUCK.mp3"),
        difficulty: "Expert",
    },
    {
        name: "Peaches",
        artist: "Jack Black",
        album: "The Super Mario Movie Sountrack",
        imgPath: require("../../../assets/chartImgs/jack-black-peaches.png"),
        filePath: require("../../../assets/audio/Jack-Black-Peaches.ogg"),
        difficulty: "Expert",
    },    
];

function SongPackList() {
    const listItems = libraryData.map((data, index) => (
        <li key={index} className='library-item row align-items-center pt-1 pb-1'>
            <div className='col-1'>
                <img
                    src={data.imgPath}
                    alt={`Cover for ${data.name} by ${data.artist}`}
                />
            </div>
            <div className='col-9 text-start'>
                <h5>{data.name}</h5>
                <p>
                    by {data.artist} ({data.album}, {data.difficulty})
                </p>
            </div>
            <div className='col-2'>
                <button className='btn btn-dark mt-2 mb-2 me-3'>
                    Add to cart
                    
                    {/* Download
                    <br />
                    {data.name} */}
                </button>
            </div>
        </li>
    ));

    console.log(listItems);
    return (
        <div className="">
            <ul className='library-list container-sm mt-1 ps-4 pe-4 pt-2'>{listItems}</ul>
        </div>
    );
}

export default SongPackList;