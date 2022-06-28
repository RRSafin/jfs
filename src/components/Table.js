import React, { useMemo } from 'react';
import './Table.css';

function Table({
        array = []
    }) {
    const rowsLayout = useMemo(() => {
        return array.map((elem, i) => {
            return (
                <div key={`${elem.id}-cont-${i}`} className="line">
                    <div className="lineDiv">
                        {elem.date}
                    </div>
                    <div className="lineDiv">
                        {elem.name}
                    </div>
                    <div className="lineDiv">
                        {elem.quantity}
                    </div>
                    <div className="lineDiv">
                        {elem.distance}
                    </div>
                </div>
            )
        })
    }, [array])
    return (
        <div className="table">

            <div className="headerLine">
                <div className="hlDiv">
                    Дата
                </div>
                <div className="hlDiv">
                    Название
                </div>
                <div className="hlDiv">
                    Количество
                </div>
                <div className="hlDiv">
                    Расстояние
                </div>
            </div>
            {rowsLayout}
        </div>
    )
}

export default Table;