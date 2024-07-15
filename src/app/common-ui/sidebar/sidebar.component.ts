import { Component, inject, WritableSignal } from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { AsyncPipe, NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ImgUrlPipe } from '../../helpers/pipes/img-url.pipe';
import { SubscriberCardComponent } from './subscriber-card/subscriber-card.component';
import { ProfileService } from '../../data/services/profile.service';
import { Profile } from '../../data/intrfaces/profile.interface';
import { firstValueFrom, Observable } from 'rxjs';
import { Pageble } from '../../data/intrfaces/pageble.interface';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    SvgIconComponent,
    NgForOf,
    RouterLink,
    ImgUrlPipe,
    SubscriberCardComponent,
    AsyncPipe,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  profileService = inject(ProfileService);
  subscribers$ = this.profileService.getSubscrbersShortList();
  me = this.profileService.me;

  menuItems = [
    { label: 'Моя страница', icon: 'home', link: '' },
    {
      label: 'Чаты',
      icon: 'chats',

      link: 'chats',
    },
    {
      label: 'Поиск',
      icon: 'search',
      link: 'search',
    },
  ];
  ngOnInit() {
    firstValueFrom(this.profileService.getMe());
  }
}
