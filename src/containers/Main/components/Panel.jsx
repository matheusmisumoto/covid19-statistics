import React, { memo } from 'react';
import { Typography, Button, Select, MenuItem, Grid } from '../../../components';
import COUNTRIES from '../../../commons/constants/countries';
import { CardPanelContentStyled, CardStyled, ItemStyled } from './style';

const navigatorHasShare = navigator.share;

function Panel({ updateAt, onChange, data, country, getCovidData }) {

    const renderCountries = (country, index) => (
        <MenuItem key={`country-${index}`} value={country.value}>
            <ItemStyled>
                <img src={country.flag} width="32" alt={`Country: ${country.label}`} />
                <div>{country.label}</div>
            </ItemStyled>
        </MenuItem>
    )

    const filterCountry = (arr, searchKey) => {
        return arr.filter(obj => Object.keys(obj).some(key => obj[key].includes(searchKey)));
    }

    const textCovid19 = `Check the latest COVID-19 Statistics - ${filterCountry(COUNTRIES, country)[0].label}\r\n${window.location.href}`;

    const copyInfo = () => {
        navigator.clipboard.writeText(textCovid19);
    }

    const shareInfo = () => {
        navigator.share({
            title: 'COVID-19 Statistics',
            text: 'The latest data about the pandemic',
            url: window.location.href
        })
    }

    const renderShareButton = (
        <div>
            <Button variant="contained" size="large" color="primary" onClick={shareInfo}>
                Share this page
            </Button>
        </div>
    )
    
    const renderCopyButton = (
        <div>
            <Button variant="contained" size="large" color="primary" onClick={copyInfo}>
                Copy URL
            </Button>
        </div>
    )

    return (
        <CardStyled>
            <CardPanelContentStyled>
                <div>
                    <Typography variant="h3" component="h3">COVID-19 Statistics</Typography>
                    <Typography variant="h6" component="h6">Last updated: {updateAt} </Typography>
                </div>
                <div className='pt-2'>
                    <Grid container spacing={4} justifyContent="center" alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Select disableUnderline onChange={onChange} value={country}>
                                {COUNTRIES.map(renderCountries)}
                            </Select>
                        </Grid>
                        <Grid item>
                            {navigatorHasShare ? renderShareButton : renderCopyButton }
                        </Grid>
                    </Grid>
                </div>
            </CardPanelContentStyled>
        </CardStyled>
    )
}

export default memo(Panel);