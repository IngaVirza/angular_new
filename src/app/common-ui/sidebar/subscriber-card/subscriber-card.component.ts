import { Component, Input } from '@angular/core';
import { Profile } from '../../../data/intrfaces/profile.interface';
import { ImgUrlPipe } from '../../../helpers/pipes/img-url.pipe';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-subscriber-card',
  standalone: true,
  imports: [ImgUrlPipe, AsyncPipe],
  templateUrl: './subscriber-card.component.html',
  styleUrl: './subscriber-card.component.scss',
})
export class SubscriberCardComponent {
  @Input() profile!: Profile;
}
