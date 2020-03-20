import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { Mp3httpService } from '../mp3http.service';
import { Mp3AssetDisplay } from '../Mp3Asset';
import { ModalComponent } from '../Lib/modal/modal.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  @ViewChild('modalInfo', {static: false}) modalInfo: ModalComponent;
  @ViewChild(DataTableDirective, {static: false}) dtElement: DataTableDirective;

  messageHeader = '';
  messageText = '';
  messageWindowWidth = 400;
  mp3s: Mp3AssetDisplay[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<Mp3AssetDisplay> = new Subject();
  selection: Mp3AssetDisplay;
  closeResult: string;
  transactionSuccess: boolean;

  constructor(
    private spinner: NgxSpinnerService,
    private mp3http: Mp3httpService,
    private router: Router) {
  }

  ngOnInit() {
    this.spinner.show();

    const mp3Observable: Observable<any> = this.mp3http.getMp3s();

    mp3Observable.subscribe(data => {
        this.mp3s = data;
        this.dtTrigger.next();
        this.spinner.hide();
      },
      error => {
        console.log(error);
        this.spinner.hide();
        this.transactionSuccess = this.handleHttpResult(error);
      }
    );

    /*
    const mp3Promise: Promise<any> = mp3Observable.toPromise();

    mp3Promise.then(
      (value) => {
        this.mp3s = value;
        this.dtTrigger.next();
        this.spinner.hide();
      },
      (error) => {
        console.log(error);
      }
    );
    */

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 4,
      columns: [{
          title: 'Id',
          data: 'Id',
          visible: false
        },
        {
          title: 'Physical Asset',
          data: 'PhysicalAsset'
        },
        {
          title: 'Artist Name',
          data: 'ArtistName'
        },
        {
          title: 'Track Title',
          data: 'TrackTitle'
        },
        {
          title: 'Album Title',
          data: 'AlbumTitle'
        },
        {
          title: 'Track Number',
          data: 'TrackNumber'
        },
        {
          title: 'Year',
          data: 'Year'
        },
        {
          title: 'Genre',
          data: 'Genre'
        },
        {
          title: 'Comment',
          data: 'Comment'
        }
      ],
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        $('td', row).off('click');
        $('td', row).on('click', () => {
          this.assetSelected(data as Mp3AssetDisplay);
        });
      }
    };
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  private handleHttpResult(error: HttpErrorResponse): boolean {
      if (error.status === 200) {
        return true;
      }

      if (error.status === 204) {
          this.openInfo('MP3 Service Message', 'There no MP3 files in the collection.');
          return true;
      }

      this.openInfo('MP3 Service Failure', error.statusText);
      return false;
  }

  openInfo(header: string, text: string) {
    this.messageHeader = header;
    this.messageText = text;
    this.messageWindowWidth = (text.length < 40 ? 200 : text.length < 50 ? 300 : 400);
    this.modalInfo.show();
  }

  assetSelected(asset: Mp3AssetDisplay): void {
    this.selection = asset;
  }

  onEditSelection() {
    this.openInfo('Edit Item', this.selection.Id.toString());
  }

  onInfoOk() {
    this.modalInfo.hide();

    if (this.transactionSuccess === false) {
      this.router.navigate(['/home']);
    }
  }

  onCloseInfo() {
    console.log('hit close');
  }
}
