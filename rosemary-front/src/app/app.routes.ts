import { Routes } from '@angular/router';
import { HomepageComponent } from './components/landing-pages/homepage/homepage.component';
import { UserProfile } from './components/profile/user-profile.component';

export const routes: Routes = [
    {
        path: '',
        component: HomepageComponent
    },
    {
        path: 'user/:username',
        component:UserProfile
    },
];
