import { IAdminLocation } from '../iadmin-location.intf';
import { Mp3AssetDisplay } from '../Mp3Asset';
import * as ClientActions from './../actions/client.actions';

const initialState: IAdminLocation[] = [
    { Location: 'D:\\music' }
];

export function adminReducer(
        state: IAdminLocation[] = initialState,
        action: ClientActions.Actions): IAdminLocation[] {
    switch (action.type) {
        case ClientActions.ADD_LOCATION:
            return [...state, action.payload];
        case ClientActions.REMOVE_LOCATION:
            const newState = [...state];
            newState.splice(action.payload, 1);
            return newState;
        default:
            return state;
    }
}

/*
import { AdminLocation } from '../admin-location';

            const newState = new AdminLocation();
            newState.Location = action.payload.Location;
            return newState;
*/
