import { Injectable } from '@angular/core'; 
import { UserList } from './user-list';
import { Subject } from 'rxjs';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'; 
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

   userList: UserList[] = [];

   addData(userList: UserList) { // เพิ่มข้อมูลเข้าอาเรย์
      this.userList.push(userList);
      window.alert('เพิ่มข้อมูลเรียบร้อยแล้ว');
   }

   getUserData() {
      return this.userList;
   }
  
   clearUserData() {
      this.userList = [];
      return this.userList;
   }
}
