import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
   @Input('total') all:number = 0 ;
   @Input() professional : number =0;
   @Input() normal : number = 0;

   selectedRadioButtonValue: string = 'All';

   @Output()
   filterRadioButtonSelectedChanged : EventEmitter<string> = new EventEmitter<string>();


   onRadioButtonSelectedChange(){
    this.filterRadioButtonSelectedChanged.emit(this.selectedRadioButtonValue);
   }

}

