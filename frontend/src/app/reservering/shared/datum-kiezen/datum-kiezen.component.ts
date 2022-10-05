import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-datum-kiezen',
  templateUrl: './datum-kiezen.component.html',
  styleUrls: ['./datum-kiezen.component.css']
})

export class DatumKiezenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild('myModal', { static: false }) myModal: ElementRef | any;
  elm: HTMLElement |any;
  ngAfterViewInit(): void {
     this.elm = this.myModal.nativeElement as HTMLElement;
  }
  close(): void {
      this.elm.classList.remove('show');
      setTimeout(() => {
        this.elm.style.width = '0';
      }, 75);
  }
  open(): void {
      this.elm.classList.add('show');
      this.elm.style.width = '100vw';
  }
}
