import React from 'react'
import { notesProduct1to2, notesProduct3to4, notesProduct5to6, notesProduct7to8 } from '../../utils/data'
import NoteCard from './NoteCard'

function NotesCards() {

    return (
        <div className='notes__section'>
            <div className="notes__title-body container">
                <h1 className='notes__title'>Наша подборка для вас</h1>
            </div>
            <div className="notes container">
                <div className="notes__div">
                    <div className="notes__items-div">
                        {notesProduct1to2.map((item) => (
                            <NoteCard
                                key={item.key}
                                id={item.id}
                                title={item.title}
                                img={item.img}
                                credit={item.credit}
                            />
                        ))}
                    </div>
                    <div className="notes__items-div">
                        {notesProduct3to4.map((item) => (
                            <NoteCard
                                key={item.key}
                                id={item.id}
                                title={item.title}
                                img={item.img}
                                credit={item.credit}
                            />
                        ))}
                    </div>
                </div>
                <div className="notes__div">
                    <div className="notes__items-div">
                        {notesProduct5to6.map((item) => (
                            <NoteCard
                                key={item.key}
                                id={item.id}
                                title={item.title}
                                img={item.img}
                                credit={item.credit}
                            />
                        ))}
                    </div>
                    <div className="notes__items-div">
                        {notesProduct7to8.map((item) => (
                            <NoteCard
                                key={item.key}
                                id={item.id}
                                title={item.title}
                                img={item.img}
                                credit={item.credit}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotesCards