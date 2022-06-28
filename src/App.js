import React, {useMemo, useState} from 'react';
import './App.css';
import Select from "./components/Select";
import Input from "./components/Input";
import { elements } from './array';
import Table from "./components/Table";
import Pagination from "./components/Pagination";
import Reset from "./components/Reset";

const column = ['date', 'name', 'quantity', 'distance'];
const conditions = ['=', '>', '<'];
const perPage = 10; //Количество строк на страницу

function App() {
    const [selectedFilter, setSelectedFilter] = useState('')
    const [selectedColumn, setSelectedColumn] = useState('')
    const [selectedCondition, setSelectedCondition] = useState('')
    const [selectedSort, setSelectedSort] = useState('')
    const [selectedPage, setSelectedPage] = useState(1)

    const filteredData = useMemo(() => {
        if (!selectedCondition || !selectedFilter || !selectedColumn) {
            return elements;
        }else if (selectedCondition === '=') {
            return elements.filter(el => el[selectedColumn] === selectedFilter)
        } else if (selectedCondition === '<') {
            return elements.filter(el => el[selectedColumn] < selectedFilter)
        } else if (selectedCondition === '>') {
            return elements.filter(el => el[selectedColumn] > selectedFilter)
        }
    }, [selectedFilter, selectedCondition, selectedColumn])

    const currentTableData = useMemo(() => {
        if (selectedSort) {
            return filteredData.slice(perPage * (selectedPage - 1), selectedPage * perPage).sort(
                function(a, b) {
                    return a[selectedSort] - b[selectedSort];
                }
            )
        } else return filteredData.slice(perPage * (selectedPage - 1), selectedPage * perPage)
    }, [filteredData, selectedPage, selectedSort]);

    const lastPage = useMemo(() => {
        return Math.ceil(filteredData.length / perPage);
    }, [filteredData])

    return (
      <div className="App">
        <Select
            elArray={column}
            onSelect={(col) => setSelectedColumn(col)}
            placeholder={'Выберите колонку'}
        />
        <Select
            elArray={conditions}
            onSelect={(con) => setSelectedCondition(con)}
            placeholder={'Выберите условие'}
        />
          <Select
              elArray={column}
              onSelect={(col) => setSelectedSort(col)}
              placeholder={'Выберите сортировку'}
          />
        <Input
            onFilter={(val) => setSelectedFilter(val)}
        />
        <Reset
            makeReset={() => {
                    setSelectedColumn('')
                    setSelectedFilter('')
                    setSelectedCondition('')
                    setSelectedSort('')
                    setSelectedPage(1)
                }
            }
        />
        <Table
            array={currentTableData}
            selPage={selectedPage}
        />
        <Pagination
            currentPage={selectedPage}
            lastPage={lastPage}
            onSelect={p => setSelectedPage(p)}
        />
      </div>
    )
}

export default App;
