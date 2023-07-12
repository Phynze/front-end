import { Component, OnInit } from '@angular/core';
import { UserList} from '../user-list';
import { DebugService } from '../debug.service';
import { UserListService } from '../user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  title: string;
  userList: UserList[];

  constructor(private debugService: DebugService, private restService : UserListService) { }

  ngOnInit() {
    this.debugService.info("User List component initialized");
    this.title = "ผู้ใช้งาน"
  }

  data = [
    { num: 1,
      id: 1, 
      name: "สมชาย", 
      lastname: "ใจดี", 
      age: 25, 
      craetedate: new Date(),
      gender: "ชาย",
      birthdate: new Date(1991, 5, 5),
      createby: "สมชาย",
      updatedate: new Date(),
      updateby: "สมชาย",
      fullname: "สมชาย ใจดี"
    }, 
    { num: 2, 
      id: 2, 
      name: "สวยงาม", 
      lastname: "มาก", 
      age: 21, 
      craetedate: new Date(),
      gender: "หญิง",
      birthdate: new Date(2002, 6, 7),
      createby: "สวยงาม",
      updatedate: new Date(),
      updateby: "สวยงาม",
      fullname: "สวยงาม มาก"
    }, 
    { num: 3, 
      id: 3, 
      name: "ภัทร", 
      lastname: "ธนภัทร", 
      age: 21, 
      craetedate: new Date(),
      gender: "ชาย",
      birthdate: new Date(2001, 12, 11),
      createby: "ภัทร",
      updatedate: new Date(),
      updateby: "ภัทร",
      fullname: "ภัทร ธนภัทร" 
    }, 
    { num: 4,
      id: 4, 
      name: "สมชาย", 
      lastname: "ใจดี", 
      age: 25, 
      craetedate: new Date(),
      gender: "ชาย",
      birthdate: new Date(1991, 5, 5),
      createby: "สมชาย",
      updatedate: new Date(),
      updateby: "สมชาย",
      fullname: "สมชาย ใจดี" 
    }, 
    { num: 5,
      id: 5, 
      name: "สมชาย", 
      lastname: "ใจดี", 
      age: 25, 
      craetedate: new Date(),
      gender: "ชาย",
      birthdate: new Date(1991, 5, 5),
      createby: "สมชาย",
      updatedate: new Date(),
      updateby: "สมชาย",
      fullname: "สมชาย ใจดี" 
     },  
  ];
  displayData = [...this.data];
}
