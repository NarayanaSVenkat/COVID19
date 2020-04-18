import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, discharged, deaths } }) => {
    if (!confirmed) {
        return '';
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed} duration={2.5} separator=',' />
                        </Typography>
                        <Typography varian='body2'>Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.discharged)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={discharged} duration={2.5} separator=',' />
                        </Typography>
                        <Typography varian='body2'>Number of discharged patients of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths} duration={2.5} separator=',' />
                        </Typography>
                        <Typography varian='body2'>Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;