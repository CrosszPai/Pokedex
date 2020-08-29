import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, View } from 'react-native';
import { increment, decrement, reset } from '../store/slices/counterSlice';
import styled from 'styled-components/native';
import { RootStore } from '../store/store';

const PaginationView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  margin-bottom: 16px;
`;

export default function PaginationButton() {
    const gen = useSelector((state: RootStore) => state.counter);
    const dispatch = useDispatch();
    return (
        <PaginationView>
            <View style={{ marginRight: 16 }}>
                <Button
                    title="<"
                    onPress={() => {
                        if (gen > 2) {
                            dispatch(decrement());
                        }
                    }}
                />
            </View>
            <View style={{ marginRight: 16 }}>
                <Button title="rst" onPress={() => dispatch(reset())} />
            </View>
            <View>
                <Button title=">" onPress={() => {
                    if (gen < 5) {
                        dispatch(increment())
                    }
                }} />
            </View>
        </PaginationView>
    );
}
