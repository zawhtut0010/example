import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  person = [
    {id:1,Name:"Zaw Htut",Email:"zawhtut@gmail.com",Job:"Software Engineer",type:"Professional",img:'assets/person/person1.jpg'},
    {id:2,Name:"Kyaw Kyaw",Email:"kyawkyaw@gmail.com",Job:"Player",type:"Normal",img:'assets/person/person2.jpg'},
    {id:3,Name:"Aung Aung",Email:"aungaung@gmail.com",Job:"Singer",type:"Normal",img:'assets/person/person3.jpg'},
    {id:4,Name:"John",Email:"john@gmail.com",Job:"Software Network Engineer",type:"Professional",img:'assets/person/person4.jpg'},
    {id:5,Name:"Welcord",Email:"welcord@gmail.com",Job:"Data Analysic",type:"Normal",img:'assets/person/person5.jpg'},
    {id:6,Name:"Messi",Email:"messi@gmail.com",Job:"Doctor",type:"Professional",img:'assets/person/person6.jpg'},
    {id:7,Name:"Ronaldo",Email:"ronaldo@gmail.com",Job:"Farmer",type:"Normal",img:'assets/person/person7.jpg'},
    {id:8,Name:"Neymar",Email:"neymar@gmail.com",Job:"Nurse",type:"Normal",img:'assets/person/person8.jpg'},
    {id:9,Name:"Dybala",Email:"dybala@gmail.com",Job:"Actor",type:"Professional",img:'assets/person/person9.jpg'},
    {id:10,Name:"Selena",Email:"selena@gmail.com",Job:"Artist",type:"Professional",img:'assets/person/person10.jpg'},
    {id:11,Name:"Alucad",Email:"alucad@gmail.com",Job:"Police",type:"Normal",img:'assets/person/person11.jpg'},
    {id:12,Name:"Min Thet",Email:"minthet@gmail.com",Job:"Project Manager",type:"Professional",img:'assets/person/person12.jpg'},
    {id:13,Name:"Zeenick",Email:"zeenick@gmail.com",Job:"Team Lead",type:"Normal",img:'assets/person/person13.jpg'},
    {id:14,Name:"Paing Paing",Email:"paing@gmail.com",Job:"Tester",type:"Normal",img:'assets/person/person14.jpg'},
    {id:15,Name:"Thant Htet",Email:"thanthtet@gmail.com",Job:"Teacher",type:"Normal",img:'assets/person/person15.jpg'}
  ]


  getAllPerson(){
    return this.person.length;
  }

  getProfessionalPerson(){
    return this.person.filter(person=>person.type==='Professional').length;
  }

  getNormalPerson(){
    return this.person.filter(person=>person.type==='Normal').length;
  }


  personCountRadioButton:string = 'All';
  searchText:string = '';
  

  onFilterRadionButtonChange(data:string){
    this.personCountRadioButton = data;
  }

  onSearchTextEntered(searchValue:string){
    this.searchText = searchValue;
  }

  findValue:string = '';

  onFindChange(text:string){
    this.findValue = text;
  }


}
