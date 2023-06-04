import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { UtilityService } from './service/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'sim-college-classroom';
  public items: any[] = [];
  public lecs: any[] = [];
  public selectedLecturer: string;
  lecObj: any;


  constructor(
    private utilityService: UtilityService) { 
    }

  ngOnInit(): void {
    this.items = this.utilityService.fetchClassRooms();
    this.lecs = this.utilityService.fetchLecturer();
  }

  studentEnter(id: number){
    this.items.forEach(it =>{
      if(it.id == id){
        if(it.tcount < it.capacity && it.classStatus == false){
          it.ecount +=1;
          it.tcount +=1;
        }else{
          console.log("Warning class limit exceeded");
        }
      }
    });
  }

  studentSitThread(id: number){
    this.items.forEach(it =>{
      if(it.id == id){

        if(it.tcount < it.capacity && it.scount < it.ecount){
          it.scount +=1;
        }else{
          console.log("warning sit limit exceeded for entered students");
        }
      }
    });
  }

  studentSit(id: number){
    
    this.items.forEach(it =>{
      if(it.id == id){

        if(it.tcount < it.capacity && it.scount < it.ecount){
          it.scount +=1;
        }else{
          console.log("warning sit limit exceeded for entered students");
        }
      }
    });
  }


  studentLeave(id: number){
    this.items.forEach(it =>{
      if(it.id == id){
        if( it.scount != 0 && it.classStatus ==  false){
          if(it.ecount == it.scount){
            it.scount -=1;
          }
          it.ecount -=1;
          it.tcount -=1;
        }else{
          console.log("warning sit limit exceeded for entered students");
        }
      }
    });
  }

  visitorEnter(id: number){
    this.items.forEach(it =>{
      if(it.id == id){
        if(it.tcount < it.capacity && it.classStatus == false && it.vcount < it.vcapacity){
          it.tcount +=1;
          it.vcount +=1;
        }else{
          console.log("warning class limit exceeded");
        }
      }
    });
    console.log("visitorEnter "+JSON.stringify(this.items));
  }

  visitorSit(id: number){
    this.items.forEach(it =>{
      if(it.id == id){

        if( it.vscount < it.vcount){
          it.vscount +=1;
        }else{
          console.log("warning sit limit exceeded for entered students");
        }
      }
    });
    console.log("Visitor Sit:  "+JSON.stringify(this.items));
  }

  visitorLeave(id: number){
    this.items.forEach(it =>{
      if(it.id == id){
        if( it.vcount != 0 ){
          if(it.vcount == it.vscount){
            it.vscount -=1;
          }
          it.vcount -=1;
          it.tcount -=1;
          
        }else{
          console.log("warning sit limit exceeded for entered students");
        }
      }
    });
  }

  lecEnter(id: number){
    this.items.forEach(it =>{
      if(it.id == id){
        if(it.tcount < it.capacity && it.classStatus == false){
          it.ecount +=1;
          it.tcount +=1;
        }else{
          console.log("warning class limit exceeded");
        }
      }
    });
  }

  lecStart(id: number){
      this.items.forEach(it =>{
      if(it.id == id){

        if( it.ecount == it.scount){
          it.classStatus = true;
        }else{
          console.log("warning All students should be sitted");
        }
      }
    });
  }

  lecLeave(id: number){
    console.log("lecLeave"+id);
    this.items.forEach(it =>{
      if(it.id == id){
        it.lecId = null;
        it.lecName = '';
        it.classStatus = false;
        it.roomStatus = false;
      }
    });
  }

  selectLect(){
    this.lecs = this.lecs.filter(item => item.busy === false);
  }

  selectOption(id: number, gpId: number) {
    let obj = '';
    this.lecs.forEach(lec => {
      if(lec.id == id){
        lec.busy = true;
        this.selectedLecturer = lec.label;
        obj = lec.label;
      }
    })
    this.items.forEach(item => {
        if(item.id == gpId){
          item.roomStatus = true;
          item.lecId = id;
          item.lecName = obj;
        }
    })
  }
}
