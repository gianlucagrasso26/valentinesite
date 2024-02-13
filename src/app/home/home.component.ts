import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;
  noCount = 0;
  buttonSize = 20;
  windowWidth = window.innerWidth;

  constructor(private router: Router) {}

  ngOnInit() {
    this.isLoading = false;
  }

  action() {
    this.router.navigate(['/yes']);
  }
  handleNoClick() {
    this.noCount = this.noCount + 1;
    if (this.noCount < 25) this.buttonSize += 5;
  }

  getNoButtonText() {
    const phrases = [
      'No',
      'Are you sure?',
      'Really sure?',
      'Think again!',
      'Last chance!',
      'Surely not?',
      'You might regret this!',
      'Give it another thought!',
      'Are you absolutely certain?',
      'This could be a mistake!',
      'Have a heart!',
      "Don't be so cold!",
      'Change of heart?',
      "Wouldn't you reconsider?",
      'Is that your final answer?',
      "You're breaking my heart ;(",
    ];

    return phrases[Math.min(this.noCount, phrases.length - 1)];
  }
}
