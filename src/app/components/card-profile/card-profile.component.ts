import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-profile',
  templateUrl: './card-profile.component.html',
  styleUrls: ['./card-profile.component.scss'],
})
export class CardProfileComponent implements OnInit {
  @Input() imgRoute: string; // "./assets/img/faces/erik-lucatero-2.jpg"
  @Input() description: string;
  @Input() role: string;
  @Input() name: string;

  constructor() {}

  ngOnInit(): void {}
}
