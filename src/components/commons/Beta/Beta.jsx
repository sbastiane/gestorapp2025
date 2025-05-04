import React, { useState, useEffect } from 'react'
import './Beta.css'
import { getGalery } from '../../../services/galeryServices'
import Header from '../../commons/Header/Header'

const Beta = () => {
    const [galery, setGalery] = useState([])
    const [searchTerm, setSearchTerm] = useState('places')
    const [page, setPage] = useState(1)

    useEffect(() => {
        getGalery(searchTerm || 'places', page)
            .then((response) => {
                setGalery(response.photos)
            })
            .catch((error) => {
                console.error("Error fetching gallery:", error)
            })
    }, [searchTerm, page])

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value)
        setPage(1) // Reset to the first page when search term changes
    }

    return (
        <>
            
            <div className="beta">
                <div className="beta__container">
                    <div className="beta__search">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="beta__search-icon" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>
                        <input
                            type="text"
                            className="beta__search-input"
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="beta__gallery">
                    {galery.map((item) => (
                        <div key={item.id} className="beta__gallery-item">
                            <img
                                src={item.src.landscape}
                                alt={item.alt}
                                className="beta__gallery-image"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="beta__pagination">
                <button
                    className="beta__pagination-button"
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                    </svg>

                </button>
                <p className="beta__pagination-page">{page}</p>
                <button
                    className="beta__pagination-button"
                    onClick={() => setPage(page + 1)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                </button>
            </div>
        </>
    )
}

export default Beta