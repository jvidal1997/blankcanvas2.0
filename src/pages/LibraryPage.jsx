import React, { Component } from "react";
import SongPackList from "./components/LibraryPage/SongPackList";
import LeftSection from "./components/LibraryPage/LeftSection";

export class LibraryPage extends Component {
    render() {
        return (
            <div className="library-page-wrap">
                <div className='library-page container-fluid'>
                    <article className=''>
                        <section className=''>
                            <LeftSection />
                        </section>
                        <aside className="pe-1">
                            <div className='library-list-wrapper'>
                                <SongPackList />
                            </div>
                        </aside>
                    </article>
                </div>
            </div>
        );
    }
}

export default LibraryPage;
