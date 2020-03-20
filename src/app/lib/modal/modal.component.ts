import {
    Component, ElementRef, ViewChild, Input, Output, OnInit, AfterViewChecked, HostListener, HostBinding, EventEmitter, ViewEncapsulation
  } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: 'modal.component.html',
    styleUrls: ['modal.component.scss'],
    encapsulation: ViewEncapsulation.None,
  })
  export class ModalComponent implements OnInit, AfterViewChecked {
    @Input() title: string;
    @Input() width: number;
    @Input() zIndex: number;
    @Input() minWidth: number = 260;
    @Input() minHeight: number = 200;
    @Input() scrollTop: boolean = true;
    @Output() openModal: EventEmitter<boolean> = new EventEmitter();
    @Output() closeModal: EventEmitter<boolean> = new EventEmitter();
    @ViewChild('modalRoot', {static: false}) modalRoot: ElementRef;
    @ViewChild('modalBody', {static: false}) modalBody: ElementRef;
    @ViewChild('modalHeader', {static: false}) modalHeader: ElementRef;
    @ViewChild('modalFooter', {static: false}) modalFooter: ElementRef;
    @HostBinding('class.app-modal') cssClass = true;

    visible: boolean;
    contentzIndex: number;
    executePostDisplayActions: boolean;
    dragEventTarget: MouseEvent | TouchEvent;

    constructor(private element: ElementRef) {}

    ngOnInit() {
      if (!this.zIndex) {
        this.zIndex = this.getMaxModalIndex();
        this.zIndex = (this.zIndex || 1000) + 1;
      }
      this.contentzIndex = this.zIndex + 1;
    }

    ngAfterViewChecked() {
      if (this.executePostDisplayActions) {
        this.center();
        this.executePostDisplayActions = false;
      }
    }

    @HostListener('keydown.esc', ['$event'])
    onKeyDown(event): void {
      event.preventDefault();
      event.stopPropagation();
      this.hide();
    }

    show(): void {
      this.executePostDisplayActions = true;
      this.visible = true;
      this.openModal.emit(true);
      setTimeout(() => {
        this.modalRoot.nativeElement.focus();
        if (this.scrollTop) {
          this.modalBody.nativeElement.scrollTop = 0;
        }
      }, 1);
    }

    hide(): void {
      this.visible = false;
      this.closeModal.emit(true);
    }

    center() {
      let elementWidth = this.modalRoot.nativeElement.offsetWidth;
      let elementHeight = this.modalRoot.nativeElement.offsetHeight;

      if (elementWidth === 0 && elementHeight === 0) {
        this.modalRoot.nativeElement.style.visibility = 'hidden';
        this.modalRoot.nativeElement.style.display = 'block';
        elementWidth = this.modalRoot.nativeElement.offsetWidth;
        elementHeight = this.modalRoot.nativeElement.offsetHeight;
        this.modalRoot.nativeElement.style.display = 'none';
        this.modalRoot.nativeElement.style.visibility = 'visible';
      }

      const x = Math.max((window.innerWidth - elementWidth) / 2, 0);
      const y = Math.max((window.innerHeight - elementHeight) / 2, 0);

      this.modalRoot.nativeElement.style.left = x + 'px';
      this.modalRoot.nativeElement.style.top = y + 'px';
    }

    initDrag(event: MouseEvent | TouchEvent) {
        this.dragEventTarget = event;
    }

    calcBodyHeight() {
      const diffHeight = this.modalHeader.nativeElement.offsetHeight + this.modalFooter.nativeElement.offsetHeight;
      const contentHeight = this.modalRoot.nativeElement.offsetHeight - diffHeight;
      this.modalBody.nativeElement.style.height = contentHeight + 'px';
      this.modalBody.nativeElement.style.maxHeight = 'none';
    }

    getMaxModalIndex() {
      return Array.from(document.querySelectorAll('.ui-modal'))
      .map(a => parseFloat(window.getComputedStyle(a).zIndex))
      .filter(a => !isNaN(a))
      .sort((a, b) => a - b)
      .pop() || 0;
    }

    onCloseIcon(event: Event) {
      event.stopPropagation();
    }

    get dialogStyles() {
      return {
        display: this.visible ? 'block' : 'none',
        'z-index': this.contentzIndex,
        'width.px': this.width,
        'min-width.px': this.minWidth,
      };
    }

    get overlayStyles() {
      return {
        display: (this.visible) ? 'block' : 'none',
        'z-index': this.zIndex,
      };
    }
  }