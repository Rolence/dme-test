import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { UtilityService } from './service/utility.service';
import {WebWorkerService} from 'ngx-web-worker';

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
  // protected _worker: Worker;


  constructor(//worker: Worker,
    private utilityService: UtilityService) { 
      // this._worker = worker;
    }

  ngOnInit(): void {
    this.items = this.utilityService.fetchClassRooms();
    this.lecs = this.utilityService.fetchLecturer();
  }//#&d9Yj8@p}W}fDM

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
    // console.log(JSON.stringify(this.items));
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
    console.log(JSON.stringify(this.items));
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
    this.sumInAnotherThread(this.items);
    // console.log(JSON.stringify(this.items));
  }
  sumInAnotherThread(input: any)
	{
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker('./app.worker.ts');
      worker.onmessage = ({ data }) => {
        console.log(`page got message: ${data}`);
      };
      worker.postMessage('hello'+JSON.stringify(input));
    } else {
      console.log("Error occured");
      // Web workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }

		console.log(`The input is ${input}`)

		let result = 0;

		// for (let i = 1; i <= input; i++)
		// {
		// 	result += i;

		// 	if (i % (input / 100) === 0)
		// 	{
		// 		postMessage(
		// 			{
		// 				type: 'progress',
		// 				data: Math.round((i / input) * 100)
		// 			}
		// 		);
		// 	}

		// }


		return result;
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
    console.log("lecStart"+id);
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
    console.log("Called selectLec")
    console.log("before Filter "+JSON.stringify(this.lecs));
    this.lecs = this.lecs.filter(item => item.busy === false);
    console.log("after filter:  "+JSON.stringify(this.lecs));
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
    
    //getted from event
    console.log(id+" Group Id is  "+gpId);
    console.log(JSON.stringify(this.lecs));
    console.log(JSON.stringify(this.items));
    //getted from binding
    // console.log(this.selected)
  }
}
