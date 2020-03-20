import { Injectable } from '@angular/core';
import { IAdminLocation } from './iadmin-location.intf';
import { Mp3AssetDisplay } from './Mp3Asset';

export interface AppState {
  adminLocation: IAdminLocation[];
  mp3sStatus: boolean;
  mp3s: Mp3AssetDisplay[];
}
