import React from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";

function MusicPlayer() {
    return (
        <footer>
            <AudioPlayer
                autoPlay
                src={require("../../../assets/audio/XCLUSIVO.mp3")}
                onPlay={(e) => console.log("onPlay")}
                customProgressBarSection={[
                    RHAP_UI.CURRENT_TIME,
                    RHAP_UI.PROGRESS_BAR,
                    RHAP_UI.CURRENT_LEFT_TIME,
                ]}
                customControlsSection={[
                    RHAP_UI.MAIN_CONTROLS,
                    RHAP_UI.ADDITIONAL_CONTROLS,
                    RHAP_UI.VOLUME_CONTROLS,
                ]}
            />
        </footer>
    );
}

export default MusicPlayer;
