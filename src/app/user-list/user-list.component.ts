import { Component, OnInit, TemplateRef } from '@angular/core';
import { UserList} from '../user-list';
import { DebugService } from '../debug.service';
import { UserListService } from '../user-list.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale, thBeLocale } from 'ngx-bootstrap/chronos';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  title: string;
  userList: UserList[];
  modalRef: BsModalRef;
  
  selectedDate: Date;
  maxEndDate: Date;

  constructor(private debugService: DebugService, private restService : UserListService, private modalService: BsModalService,
              private localeService: BsLocaleService) {
                this.maxEndDate = new Date(); // set enddate to today
                defineLocale('th-be', thBeLocale); // กำหนด locale ของปีพ.ศ.
                this.localeService.use('th-be'); // ใช้งาน locale ที่กำหนด
              }

  ngOnInit() {
    this.debugService.info("User List component initialized");
    this.title = "ผู้ใช้งาน"
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
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
