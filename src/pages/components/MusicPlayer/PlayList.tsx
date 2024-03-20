import React, { Component } from "react";
import AudioPlayer from "react-h5-audio-player";
import { libraryData } from "../LibraryPage/SongPackList";

// Use libraryData to create a list of dictionaries for each song in the library
const playlist = libraryData.map((data) => {
    return {
        name: (data.name + " by " + data.artist),
        src: data.filePath,
    };
});

console.log(playlist);

interface PlayListState {
    currentMusicIndex: number;
}

class PlayList extends Component<null, PlayListState> {
    state = {
        currentMusicIndex: 0,
    };

    handleClickPrevious = (): void => {
        this.setState((prevState) => ({
            currentMusicIndex:
                prevState.currentMusicIndex === 0
                    ? playlist.length - 1
                    : prevState.currentMusicIndex - 1,
        }));
    };

    handleClickNext = (): void => {
        this.setState((prevState) => ({
            currentMusicIndex:
                prevState.currentMusicIndex < playlist.length - 1
                    ? prevState.currentMusicIndex + 1
                    : 0,
        }));
    };

    playliststyle = {
        height: '120px',
    }

    render(): React.ReactNode {
        const { currentMusicIndex } = this.state;
        return (
            <div style={this.playliststyle}>
                <p className='audio-player-song-label text-center'>
                    {playlist[currentMusicIndex].name}
                </p>
                <AudioPlayer
                    onEnded={this.handleClickNext}
                    autoPlayAfterSrcChange={true}
                    showSkipControls={true}
                    showJumpControls={false}
                    src={playlist[currentMusicIndex].src}
                    onClickPrevious={this.handleClickPrevious}
                    onClickNext={this.handleClickNext}
                />
                
            </div>
        );
    }
}

export default PlayList;
