import { Routes } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { CardComponent } from "../shared/components/card/card.component";
// import { MyProjectsSectionComponent } from "../shared/components/my-projects-section/my-projects.component";
import { ProjectFormComponent } from "../shared/components/project-form/project-form.component";
import { UserProfileComponent } from "./pages/user-profile/user-profile.component";
import { LoginComponent } from "./pages/login/login.component";
import { SignUpComponent } from "./pages/sign-up/sign-up.component";
import { IndexComponent } from "./pages/index.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { InvestimentComponent } from "./pages/investiment_pages/investiments.component";
import { HomeInvesterComponent } from "./pages/investiment_pages/home_invester/home.component";



export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: "full" },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignUpComponent },
   
    {
        path: 'index', component: IndexComponent, children:[
            { path: 'index/home', component: HomeComponent},
            { path: 'index/profile', component: UserProfileComponent},
            { path: 'index/project', component: ProjectsComponent},
           
        ]
    },
    { path: 'investiments', component: InvestimentComponent, children:[
        { path: 'investiments/home', component: HomeInvesterComponent},
        { path: 'investiments/profile', component: UserProfileComponent},
    ]},
    // { path: 'modal', component: ProjectFormComponent },
    // { path: 'card', component: CardComponent },
];
