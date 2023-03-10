export type OutgoingAction = {};
export type IncomingAction = {};

export class LocalAppAdapter {
    processOutputAction(action: OutgoingAction) {
        // command midi instruments
        // change UI state
    }

    receiveInputAction(action: IncomingAction) {
        // should never be called
    }
}
