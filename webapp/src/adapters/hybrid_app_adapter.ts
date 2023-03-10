export type OutgoingAction = {};
export type IncomingAction = {};

export class HybridAppAdapter {
    processOutputAction(action: OutgoingAction) {
        // command midi instruments
        // fetch(uiStateChanges)
        // update local UI
    }

    receiveInputAction(action: IncomingAction) {
        // receive actions from other devices connected to jam.tools session
    }
}
