import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Member } from '../shared/model';

@Injectable()
export class CustomerService {

  constructor(private firebase: AngularFireDatabase) { }
  customerList: AngularFireList<any>;

  form = new FormGroup({
    key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
    location: new FormControl('') 
  })

  getCustomers() {
    this.customerList = this.firebase.list<Member>('members')
    return this.customerList.snapshotChanges();
  }
  // listCustomers() {
  //   return this.firebase.list<Member>('members').snapshotChanges();
  // }

  insertCustomer(customer) {
    let newCustomer = {
      fullName: customer.fullName, 
      email: customer.email,
      mobile: customer.mobile,
      location: customer.location
    } ;
    this.customerList.push(newCustomer);
  }
  populateForm(customer) {
    this.form.setValue(customer);
  }
  updateCustomer(customer) {
    
    let newCustomer = {
      fullName: customer.fullName, 
      email: customer.email,
      mobile: customer.mobile,
      location: customer.location
    } ;
    this.customerList.update(customer.key, newCustomer);
  }
  deleteCustomer(key: string) {
    this.customerList.remove(key);
  }
}
