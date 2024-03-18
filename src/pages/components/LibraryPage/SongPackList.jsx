import React from "react";


const libraryData = [
    {
        name: "La Calma",
        artist: "Gonzy",
        imgPath: require("../../../assets/chartImgs/gonzy-la-calma.png"),
        album: "Desahogo",
        difficulty: "Expert",
    },
    {
        name: "Gently",
        artist: "Drake",
        imgPath: require("../../../assets/chartImgs/drake-gently.png"),
        album: "For All The Dogs",
        difficulty: "Expert",
    },
    {
        name: "XTI",
        artist: "Chris Palace",
        imgPath: require("../../../assets/chartImgs/chris-palace-xti.png"),
        album: "Trip 21",
        difficulty: "Expert",
    },
    {
        name: "Baby Hello",
        artist: "Rauw Alejandro",
        imgPath: require("../../../assets/chartImgs/rauw-alejandro-baby-hello.png"),
        album: "Playa Saturno",
        difficulty: "Expert",
    },
    {
        name: "Cybertruck",
        artist: "Bad Bunny",
        imgPath: require("../../../assets/chartImgs/bad-bunny-cybertruck.png"),
        album: "Nadie Sabe Lo Que Va a Pasar Mañana",
        difficulty: "Expert",
    },
    {
        name: "Peaches",
        artist: "Jack Black",
        imgPath: require("../../../assets/chartImgs/jack-black-peaches.png"),
        album: "The Super Mario Movie Sountrack",
        difficulty: "Expert",
    },
    {
        name: "La Calma",
        artist: "Gonzy",
        imgPath: require("../../../assets/chartImgs/gonzy-la-calma.png"),
        album: "Desahogo",
        difficulty: "Expert",
    },
    {
        name: "Gently",
        artist: "Drake",
        imgPath: require("../../../assets/chartImgs/drake-gently.png"),
        album: "For All The Dogs",
        difficulty: "Expert",
    },
    {
        name: "XTI",
        artist: "Chris Palace",
        imgPath: require("../../../assets/chartImgs/chris-palace-xti.png"),
        album: "Trip 21",
        difficulty: "Expert",
    },
    {
        name: "Baby Hello",
        artist: "Rauw Alejandro",
        imgPath: require("../../../assets/chartImgs/rauw-alejandro-baby-hello.png"),
        album: "Playa Saturno",
        difficulty: "Expert",
    },
    {
        name: "Cybertruck",
        artist: "Bad Bunny",
        imgPath: require("../../../assets/chartImgs/bad-bunny-cybertruck.png"),
        album: "Nadie Sabe Lo Que Va a Pasar Mañana",
        difficulty: "Expert",
    },
    {
        name: "Peaches",
        artist: "Jack Black",
        imgPath: require("../../../assets/chartImgs/jack-black-peaches.png"),
        album: "The Super Mario Movie Sountrack",
        difficulty: "Expert",
    },
];

function SongPackList() {
    const listItems = libraryData.map((data, index) => (
        <li key={index} className='library-item row align-items-center'>
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
                    Download
                    <br />
                    {data.name}
                </button>
            </div>
        </li>
    ));

    console.log(listItems);
    return (
        <div className="">
            <ul className='library-list container-sm ps-4 pe-4 pt-2 pb-2'>{listItems}</ul>
        </div>
    );
}

export default SongPackList;