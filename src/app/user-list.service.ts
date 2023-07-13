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

  /*private expenseRestUrl = 'http://localhost:8000/api/expense';

  private httpOptions = { 
    headers: new HttpHeaders( { 'Content-Type': 'application/json' }) 
  };

  constructor(private httpClient : HttpClient) { }

  getExpenseEntries() : Observable<UserList[]> {
    return this.httpClient.get<UserList[]>(this.expenseRestUrl, this.httpOptions)
    .pipe(retry(3),catchError(this.httpErrorHandler));
 }
 
 getExpenseEntry(id: number) : Observable<UserList> {
    return this.httpClient.get<UserList>(this.expenseRestUrl + "/" + id, this.httpOptions)
    .pipe(
       retry(3),
       catchError(this.httpErrorHandler)
    );
 }
 
 private httpErrorHandler (error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
       console.error("A client side error occurs. The error message is " + error.message);
    } else {
       console.error(
          "An error happened in server. The HTTP status code is "  + error.status + " and the error returned is " + error.message);
    }
 
    return throwError("Error occurred. Pleas try again");
 }*/
}
