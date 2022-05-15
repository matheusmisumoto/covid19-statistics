import React, { memo, useState, useEffect, useCallback } from 'react';
import Api from '../../api';
import { ContainerStyled } from './style';
import { CardStyled, CardPanelContentStyled } from './components/style';
import Panel from './components/Panel'
import Board from './components/Board'
import { Typography } from '../../components'

function Main() {
    const [data, setData] = useState({});
    const [country, setCountry] = useState('world');
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
                <div className="mb-2">
                    <Board data={data} />
                </div>
                <div className="mb-2">
                    <CardStyled>
                        <CardPanelContentStyled>
                            <Typography variant="body1" component="p">Source: <a href="https://coronavirus-19-api.herokuapp.com/" target="_blank" rel="noreferrer">Public API</a> with information from <a href="https://www.worldometers.info/coronavirus/" target="_blank" rel="noreferrer">Worldometer</a></Typography>
                            <Typography variant="body1" component="p">Developed by <a href="https://matheusmisumoto.dev/">Matheus Misumoto</a></Typography>
                            <Typography variant="body2" component="p"><a href="https://github.com/matheusmisumoto/covid19-statistics" target="_blank" rel="noreferrer">Repository on Github</a></Typography>
                        </CardPanelContentStyled>
                    </CardStyled>
                </div>
            </ContainerStyled>
        </div>
    )
}

export default memo(Main)