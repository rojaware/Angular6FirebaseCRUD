import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';
import { Member } from '../shared/model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(private customerService: CustomerService) { }
  customerArray = [];
  showDeleteMessage : boolean;
  searchText: string = "";

  ngOnInit() {
    this.customerService.getCustomers().subscribe(
      list => {
        this.customerArray = list.map( item => { 
          const data = item.payload.val();
          console.log('data ---> ' + JSON.stringify(data));
          data['key'] = item.key;
          return data;
        });
      });
  } 
   
  onDelete(key: string) {
    if (confirm('Are you sure to delete this record?')) {
      this.customerService.deleteCustomer(key);
      this.showDeleteMessage = true;
      setTimeout( () => this.showDeleteMessage = false, 9000);
      // setTimeout(function() {
      //   this.showDeleteMessage = false
      // }, 3000);
    }
  } 
  filterCondition(customer) {
    return customer.fullName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }
}   
