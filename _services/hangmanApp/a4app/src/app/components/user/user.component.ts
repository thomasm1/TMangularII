import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  hello:any;
  posts:Post[];
  isEdit:boolean = false;

  constructor(private dataService:DataService) { 
    console.log('tmConstructor operating fine ...');
  }

  ngOnInit() {
    console.log('ngOnInit operating well-alreight');
    this.name = 'Tom Milton';
    this.email = 'thomas76milton@gmail.com'
    this.age = 40;
    this.address = {
        street:'2300 Calle de Real',
        city: 'Albuquerque',
        state:'NM'
        }
this.hobbies = ['write code', 'watch movies', 'listen to music'];
this.hello = 'hello';

this.dataService.getPosts().subscribe((posts) => {
// console.log(posts);
this.posts = posts;
});
}
onClick(){
  this.name = 'Thomas Milton Maestas';
  this.hobbies.push('New Hobby');
}
addHobby(hobby){
  console.log(hobby);
  this.hobbies.unshift(hobby);
  return false;
}
deleteHobby(hobby){
  for(let i = 0;i <this.hobbies.length;i++){
    if(this.hobbies[i] == hobby){
      this.hobbies.splice(i, 1);
    }
  }
 }
toggleEdit(){
  this.isEdit = !this.isEdit;
}
}
interface Address {
    street:string,
    city:string,
    state:string
  }

interface Post{
  id: number, 
  title:string,
  body:string,
  UserId: number
}