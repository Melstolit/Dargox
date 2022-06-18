import { Component, OnInit } from '@angular/core';
import { RESTAPIServiceService } from '../restapiservice.service';

@Component({
  selector: 'app-backmsg',
  templateUrl: './backmsg.component.html',
  styleUrls: ['./backmsg.component.scss']
})
export class BackmsgComponent implements OnInit {

  constructor(private apiService: RESTAPIServiceService) { }

  mmsg = "empty";

  ngOnInit(): void {
    this.mmsg = "Getting messages...";
    this.apiService.getMsg().subscribe((data) => {
      this.mmsg = data.toString();
    });
  }

}

