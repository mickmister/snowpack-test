export type OutgoingAction = {};
export type IncomingAction = {};

export class ServerAppAdapter {
    processOutputAction(action: OutgoingAction) {
        // command midi instruments
        // update local state
        // websocket(uiChanges)
    }

    receiveNetworkInput() {
        // serialized action that is the same as a hybrid app receiving a request from another client
    }

    receiveMidiInput() {

    }

    receiveKeyboardInput() {

    }
}
