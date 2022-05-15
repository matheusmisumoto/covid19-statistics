import styled from 'styled-components';
import { Typography, CardContent, Card } from '../../../components'

export const LabelStyled = styled(Typography)`
    font-weight: 700;
    font-size: 1.5rem;
`
export const ValueStyled = styled(Typography)`
    font-weight: 700;
    font-size: 3rem;
`
export const CardStyled = styled(Card)`
    background: rgba(0,0,0,.4);
    backdrop-filter: saturate(180%) blur(20px);
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    border: 2px solid rgba(240,240,240,.6);
    border-radius: 1rem;
    padding: 1rem;
`
export const CardPanelContentStyled = styled(CardContent)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 1rem;
    text-align: center;
`
export const ItemStyled = styled.div`
    display: flex;
    gap: 1rem;
    min-width: 150px;
    align-items: center;
    height: 1.25rem;
`