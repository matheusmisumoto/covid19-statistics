import React, { memo } from 'react';
import { Grid, Skeleton } from '../../../components';
import Card from './Card'

function Board({data}) {
    const { cases, todayDeaths, deaths, todayCases } = data;

    const getValue = (value) => value ? new Intl.NumberFormat('en-US').format(value) : <Skeleton variant="text" width={182} />

    return (
        <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
                <Card value={getValue(todayDeaths)} label="Today's deaths" color="#000" />
            </Grid>
            <Grid item xs={12} md={6}>
                <Card value={getValue(deaths)} label="Total deaths" />
            </Grid>
            <Grid item xs={12} md={6}>
                <Card value={getValue(todayCases)} label="Today's cases" color="#990000" />
            </Grid>
            <Grid item xs={12} md={6}>
                <Card value={getValue(cases)} label="Total cases" color="#FF3300" />
            </Grid>
        </Grid>
    )
}

export default memo(Board)