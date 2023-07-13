import { Component, OnInit, TemplateRef, Output, EventEmitter } from '@angular/core';
import { UserList} from '../user-list';
import { DebugService } from '../debug.service';
import { UserListService } from '../user-list.service';
import { ActivatedRoute } from '@angular/router';

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
  modalRef: BsModalRef;
  userList: UserList[] = [];

  selectedDate: Date;
  maxEndDate: Date;
  bsValue: Date;

  name: string;
  lastname: string;
  age: number;
  birthdate: Date;
  gender: string;
  id: number;

  constructor(private debugService: DebugService, private restService : UserListService, private modalService: BsModalService,
              private localeService: BsLocaleService) {
                this.maxEndDate = new Date(); // set enddate to today
                defineLocale('th-be', thBeLocale); // กำหนด locale ของปีพ.ศ.
                this.localeService.use('th-be'); // ใช้งาน locale ที่กำหนด
              }

  ngOnInit() {
    this.debugService.info("User List component initialized");
    this.title = "ผู้ใช้งาน"
    this.userList = this.restService.getUserData(); // ดึงข้อมูลผู้ใช้งานทั้งหมดจาก service
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  @Output() dataAdded: EventEmitter<any> = new EventEmitter();

  addUserData(){
    var id = 1;
    const data = {
      num: this.userList.length + 1,
      id: id++,
      name: this.name,
      lastname: this.lastname,
      age: this.age,
      craetedate: new Date(),
      gender: this.gender,
      birthdate: this.birthdate,
      createby: this.name,
      updatedate: new Date(),
      updateby: this.name,
      fullname: this.name + " " + this.lastname
    };

    console.log(data);
    this.dataAdded.emit(data);
    this.addData(data);
    this.name = '';
    this.lastname = '';
    this.age = null;
    this.birthdate = null;
    this.gender = '';

    this.modalRef.hide(); // ปิด modal
    this.updateDisplayData(); // อัปเดตข้อมูลที่แสดงในตาราง
  }

  addData(userList: UserList) {
    this.restService.addData(userList); // เรียกใช้งานเมธอด addData() ของ UserListService
  }

  onValueChange($value: Date): void {
    if ($value) {
      this.age = this.calculateAge();
    }
  }

  runId(){
    var id = 1;
    id = id + 1;
  }

  calculateAge(){
    const today = new Date();
    const birthdate = new Date(this.birthdate);
    console.log(birthdate);
    var age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }
    return age;
  }

  updateDisplayData() {
    this.displayData = [...this.userList]; // อัปเดตข้อมูลที่แสดงในตาราง
  }

  displayData = [...this.userList];
}
