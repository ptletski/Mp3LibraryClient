import { Action } from '@ngrx/store';
import { IAdminLocation } from '../iadmin-location.intf';
import { Mp3AssetDisplay } from '../Mp3Asset';

export const ADD_LOCATION       = '[MP3LIBCLIENT] AddLocation';
export const REMOVE_LOCATION    = '[MP3LIBCLIENT] RemoveLocation';
export const FETCH_MP3S         = '[MP3LIBCLIENT] FetchMp3s';

export class AddLocation implements Action {
    readonly type = ADD_LOCATION;
    constructor(public payload: IAdminLocation) {}
}

export class RemoveLocation implements Action {
    readonly type = REMOVE_LOCATION;
    constructor(public payload: number) {}
}

export class FetchMp3s implements Action {
    readonly type = FETCH_MP3S;
    constructor(public payload: Mp3AssetDisplay[]) {}
}

export type Actions = AddLocation | RemoveLocation;
