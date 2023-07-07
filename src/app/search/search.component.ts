import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

   enteredSearchValue:string = '';

   @Output()
    searchTextChanged:EventEmitter<string> = new EventEmitter<string>();

    onSearchTextChange(){
      this.searchTextChanged.emit(this.enteredSearchValue);
   }

}
