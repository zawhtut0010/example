import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent {
  
  findtext:string = '';

  @Output()
  findTextEntered:EventEmitter<string> = new EventEmitter<string>();

  onFindTextValued(){
    this.findTextEntered.emit(this.findtext);
  }

}
