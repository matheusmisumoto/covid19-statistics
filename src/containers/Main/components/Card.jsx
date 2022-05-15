import React, { memo } from 'react';
import { CardContent } from '../../../components'
import { 
    CardStyled,
    LabelStyled,
    ValueStyled,
} from './style';

function Card({ value, label, color }){
    return (
        <CardStyled variant="outlined">
            <CardContent>
                <ValueStyled>{value}</ValueStyled>
                <LabelStyled>{label}</LabelStyled>
            </CardContent>
        </CardStyled>
    )
}

export default memo(Card);