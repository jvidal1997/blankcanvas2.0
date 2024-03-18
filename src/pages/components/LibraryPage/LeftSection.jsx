import React from "react";

function LeftSection() {
    return (
        <div className="library-left-section">
            <p className='h4 text-center'>
                Free
                <br />
                CHARTS
                <br />
                FOR
            </p>
            <img
                src={require('../../../assets/imgs/CloneHero_Logo.png')}
                alt='Clone hero logo'
            />
            <div className='text-center'>
                <p>
                    To import them: extract the files from the zip folder; then,
                    drag and drop them into the "Songs" folder in your CloneHero
                    directory.
                    <br />
                    When your done, you'll find a "scan for songs" option in the
                    settings of the application.
                    <br />
                    Once it completes, the songs will be available in your song
                    library.
                </p>
            </div>
        </div>
    );
}

export default LeftSection;
