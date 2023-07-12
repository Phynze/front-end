import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DebugService {

  constructor() { }

  info(message : String) : void { 
    console.log(message); 
 }
}
