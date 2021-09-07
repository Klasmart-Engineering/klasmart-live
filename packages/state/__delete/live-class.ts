import { configureStore } from '@reduxjs/toolkit';
import { Transport } from './network';
import { root } from './redux';

export class LiveClassState {
    constructor(
        private readonly store = configureStore({ reducer: root }),
        private transport = new Transport(store.dispatch),
    ) {
    }

    public getStore() { return this.store; }

    public connect(url: string) {
        return this.transport.connect(url);
    }
}