import React, { memo } from 'react';
import { Card, Typography, Button, Select, MenuItem } from '../../../components';
import COUNTRIES from '../../../commons/constants/countries';
import { CardPanelContentStyled, ItemStyled } from './style';

const navigatorHasShare = navigator.share;

function Panel({ updateAt, onChange, data, country, getCovidData }) {

    const renderCountries = (country, index) => (
        <MenuItem key={`country-${index}`} value={country.value}>
            <ItemStyled>
                <div>{country.label}</div>
                <img src={country.flag} alt={`Country: ${country.label}`} />
            </ItemStyled>
        </MenuItem>
    )

    const textCovid19 = `Country: ${country}`;
    
    const copyInfo = () => {
        navigator.clipboard.writeText(textCovid19);
    }

    const shareInfo = () => {
        navigator.share({
            title: `COVID-19 Statistics - ${country}`,
            text: textCovid19,
            url: 'https://example.com'
        })
    }

    const renderShareButton = (
        <div>
            <Button variant="contained" color="primary" onClick={shareInfo}>
                Share
            </Button>
        </div>
    )
    
    const renderCopyButton = (
        <div>
            <Button variant="contained" color="primary" onClick={copyInfo}>
                Copy
            </Button>
        </div>
    )

    return (
        <Card>
            <CardPanelContentStyled>
                <div>
                    <Typography variant="h5" component="span" color="primary">COVID-19 Statistics</Typography>
                    <Typography variant="h6" component="span" color="primary">Last updated: {updateAt} </Typography>
                </div>
                <div className='pt-2'>
                    <Select onChange={onChange} value={country}>
                        {COUNTRIES.map(renderCountries)}
                    </Select>
                </div>
                {navigatorHasShare ? renderShareButton : renderCopyButton }
            </CardPanelContentStyled>
        </Card>
    )
}

export default memo(Panel);