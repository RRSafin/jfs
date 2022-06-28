import React, { useMemo } from 'react';
import './Pagination.css';

function Pagination({
    currentPage = 1,
    lastPage = 1,
    onSelect = () => {}
    }) {

    const paginationLayout = useMemo(() => {
        const pagination = [];

        if (lastPage <= 5) {
            for (let i = 1; i <= lastPage; i++) {
                pagination.push(
                    <div
                        className={currentPage === i ? "pButtonActive" : "pButton"}
                        key={i}
                        data-step={i}
                        onClick={() => onSelect(i)}
                    >
                        {i}
                    </div>
                )
            }
        } else if ( Number(currentPage) < 3 || Number(currentPage) > (lastPage - 2) ) {
            for(let i = 1; i <= 3; i++) {
                pagination.push(
                    <div
                        className={currentPage === i ? "pButtonActive" : "pButton"}
                        key={i}
                        data-step={i}
                        onClick={() => onSelect(i)}
                    >
                        {i}
                    </div>
                )
            }

            pagination.push(<div>...</div>)
            for(let i = lastPage - 2; i <= lastPage; i++) {
                pagination.push(
                    <div
                        className={currentPage === i ? "pButtonActive" : "pButton"}
                        key={i}
                        data-step={i}
                        onClick={() => onSelect(i)}
                    >
                        {i}
                    </div>
                )
            }
        } else if (Number(currentPage) >= 3 && Number(currentPage) <= (lastPage - 2) ) {
            pagination.push(
                <div
                    className={currentPage === 1 ? "pButtonActive" : "pButton"}
                    key={1}
                    data-step={1}
                    onClick={() => onSelect(1)}
                >
                    1
                </div>
            )
            pagination.push(<div>...</div>)
            for(let i = currentPage - 1; i <= Number(currentPage) + 1; i++) {
                pagination.push(
                    <div
                        className={currentPage === i ? "pButtonActive" : "pButton"}
                        key={i}
                        data-step={i}
                        onClick={() => onSelect(i)}
                    >
                        {i}
                    </div>
                )
            }
            pagination.push(<div>...</div>)
            pagination.push(
                <div
                    className="pButton"
                    key={lastPage}
                    data-step={lastPage}
                    onClick={() => onSelect(lastPage)}
                >
                    {lastPage}
                </div>
            )
        }

        return pagination;
    }, [currentPage, lastPage])

    return (
        <div className="pContainer">
            {paginationLayout}
        </div>
    )
}

export default Pagination;