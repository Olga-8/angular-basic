import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  displayNotification: boolean = false;

  constructor() { }

  ngOnInit(): void {}

  closeNotification() {
    this.displayNotification = true;
  }

}
