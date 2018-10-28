import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  /*styleUrls: ['./app.component.css']*/
  styles:[
    `
      .online{
        color: white;
      }

    `

  ]
})
export class ServerComponent {
     serverId:number=10;
     serverStatus:string='离线';

     constructor(){
       this.serverStatus=Math.random()>0.5?'离线':'在线';
     }

     getServerStatus(){
       return this.serverStatus;
     }

     getcolor(){
       return this.serverStatus==='离线'?'red':'green';
     }
}
