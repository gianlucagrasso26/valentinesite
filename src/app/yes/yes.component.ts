import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-yes',
  templateUrl: './yes.component.html',
  styleUrls: ['./yes.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
})
export class YesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
