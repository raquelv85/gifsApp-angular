import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {

  @ViewChild('txtSearch') txtSearch!:ElementRef<HTMLInputElement>; 

  search() {
    const value = this.txtSearch.nativeElement.value;

    this.txtSearch.nativeElement.value = '';

  }

}
