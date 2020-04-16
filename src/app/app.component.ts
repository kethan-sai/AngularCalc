import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator';
 
  MainText="";
  opset = false;
  allClear(){
    
    this.MainText="";
  }

  bcksp(){
    let z: number =this.MainText.length - 1;
    
    this.MainText = this.MainText.substring(0,z);
  
  }
  pressKey(key: string){
    
   
    if(key === '/' || key === '+' || key === '-' || key=== '*'){
      
      const lastkey = this.MainText[this.MainText.length - 1];
      if(lastkey === '/' || lastkey==='+' || lastkey==='-' || lastkey==='*'){
        let z: number =this.MainText.length - 1;
    
        this.MainText = this.MainText.substring(0,z);
      
      }
      if(this.MainText === ''){
        return;
      }
      
    }
    
   
this.MainText +=key;

  }

  getres(){
    this.MainText = eval(this.MainText);
  }
}
