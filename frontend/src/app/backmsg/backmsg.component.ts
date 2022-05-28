import { Component, OnInit } from '@angular/core';
import { RESTAPIServiceService } from '../restapiservice.service';

@Component({
  selector: 'app-backmsg',
  templateUrl: './backmsg.component.html',
  styleUrls: ['./backmsg.component.scss']
})
export class BackmsgComponent implements OnInit {

  constructor(private apiService: RESTAPIServiceService) { }

  ngOnInit(): void {
    console.log("SDFGFDSGSDFGSDF");
    this.apiService.getMsg().subscribe((data) => {
      console.log(data);
    });
  }

}

