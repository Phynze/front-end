import { Component, OnInit, TemplateRef, Output, EventEmitter, ViewChild } from '@angular/core';
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
  num: number;
  craetedate: Date;

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
    const data = {
      num: this.num || (this.userList.length + 1), // ใช้ค่า num เดิมหากมีการแก้ไข
      id: this.id || (this.userList.length + 1), // ใช้ id เดิมหากมีการแก้ไข
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

    if (this.id) {
      // แก้ไขข้อมูลผู้ใช้
      const index = this.userList.findIndex(item => item.id === this.id);
      if (index !== -1) {
        this.userList[index] = data;
      }
    } else {
      // เพิ่มข้อมูลผู้ใช้ใหม่
      console.log(data);
      this.addData(data);
    }

    console.log(data);
    //this.dataAdded.emit(data);
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

  deleteUserData(user: UserList) {
    const index = this.userList.indexOf(user);
    if (index !== -1) {
      this.userList.splice(index, 1);
      this.updateDisplayData();
    }
  }

  @ViewChild('template', { static: false }) template: TemplateRef<any>;
  
  editUserData(user: UserList) {
    this.num = user.num;
    this.name = user.name;
    this.lastname = user.lastname;
    this.age = user.age;
    this.birthdate = user.birthdate;
    this.gender = user.gender;
    this.id = user.id;
    this.craetedate = user.craetedate;
  
    // เปิด Modal สำหรับแก้ไขข้อมูล
    this.openModal(this.template);
  }
}
