import React from 'react'
import { useSelector } from 'react-redux'
import { RootStore } from '../store/store'
import styled from 'styled-components/native'

const Text = styled.Text<{ loading: boolean }>`
color: ${props => props.loading ? 'red' : 'blue'};
padding:16px;
font-size:24px;
`

export default function Test() {
    const counter = useSelector((state: RootStore) => state.counter)
    const status = useSelector((state: RootStore) => state.network)
    return <Text loading={status.progress === 'LOADING'}>
        {
            counter
        }
    </Text>
}