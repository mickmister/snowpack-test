// definitely want to make it so the page reloads when you start a remote session
// shouldn't be balancing between that at page startup or later

export type OutgoingAction = {};
export type IncomingAction = {};

export class RemoteAppAdapter {
    processOutputAction(action: OutgoingAction) {
        // fetch();
    }

    receiveInputAction(action: IncomingAction) {
        // change UI state
    }
}
