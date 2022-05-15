import React, { memo, useState, useEffect, useCallback } from 'react';
import Api from '../../api';
import { ContainerStyled } from './style';
import Panel from './components/Panel'
import Board from './components/Board'

function Main() {
    const [data, setData] = useState({});
    const [country, setCountry] = useState('brazil');
    const updateAt = new Date().toLocaleString();

    const getCovidData = useCallback((country) => {
        Api.getCountry(country)
            .then(data => setData(data))
    }, [])

    useEffect(() => {
        getCovidData(country)
    }, [getCovidData, country])

    const handleChange = ({ target }) => {
        const country = target.value;
        setCountry(country);
    }

    return (
        <div>
            <ContainerStyled>
                <div className="mb-2">
                    <Panel
                        data={data}
                        updateAt={updateAt}
                        onChange={handleChange}
                        country={country}
                        getCovidData={getCovidData}
                    />
                </div>
                <Board data={data} />
            </ContainerStyled>
        </div>
    )
}

export default memo(Main)