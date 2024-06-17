import { Routes } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { CardComponent } from "../shared/components/card/card.component";
// import { MyProjectsSectionComponent } from "../shared/components/my-projects-section/my-projects.component";
import { ProjectFormComponent } from "../shared/components/project-form/project-form.component";
import { UserProfileComponent } from "./pages/user-profile/user-profile.component";
import { LoginComponent } from "./pages/login/login.component";



export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'profile', component: UserProfileComponent },
    { path: 'modal', component: ProjectFormComponent },
    { path: 'card', component: CardComponent },
];
