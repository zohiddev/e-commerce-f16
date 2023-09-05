import React from 'react'
import { notesProduct1to2, notesProduct3to4, notesProduct5to6, notesProduct7to8 } from '../../../data/notes'
import NoteCard from './NoteCard'

function NotesCards() {

    return (
        <section className='notes__section'>
            <div className="container scale">
                <h1 className='notes__title'>Наша подборка для вас</h1>
            </div>
            <div className="container notes">
                <div className="notes__div">
                    <div className="notes__items-div">
                        {notesProduct1to2.map((item) => (
                            <NoteCard
                            key={item.id}
                            item={item}
                            />
                        ))}
                    </div>
                    <div className="notes__items-div">
                        {notesProduct3to4.map((item) => (
                            <NoteCard
                            key={item.id}
                            item={item}
                            />
                        ))}
                    </div>
                </div>
                <div className="notes__div">
                    <div className="notes__items-div">
                        {notesProduct5to6.map((item) => (
                            <NoteCard
                            key={item.id}
                            item={item}
                            />
                        ))}
                    </div>
                    <div className="notes__items-div">
                        {notesProduct7to8.map((item) => (
                            <NoteCard
                                key={item.id}
                                item={item}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NotesCards