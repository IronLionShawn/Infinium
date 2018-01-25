import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, Route, RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomePage } from './pages/home/home.component';
import { ServicesPage } from './pages/services/services.component';
import { NotFoundPage } from './pages/not-found/not-found.component';
import { PortfolioPage } from './pages/portfolio/portfolio.component';
import { ContactPage } from './pages/contact/contact.component';
import { QuotePage } from './pages/quote/quote.component';
import { ProjectDetailPage } from './pages/project/project-detail.component';
import { ServiceDetailPage } from './pages/services/service-detail.component';


const routes: Routes									= [
	{ path: 'home', redirectTo: '', pathMatch: 'full' },
	{ path: '', component: HomePage, },
	{ path: 'services', component: ServicesPage },
	{ path: 'services:id', component: ServiceDetailPage },
	{ path: 'portfolio', component: PortfolioPage },
	{ path: 'portfolio:id', redirectTo: 'project:id' },
	{ path: 'project:id', component: ProjectDetailPage },
	{ path: 'contact', component: ContactPage },
	{ path: 'quote', component: QuotePage },
	{ path: '**', component: NotFoundPage }, //always last
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
    	routes,
    	{enableTracing: true}, // debugging
    ),
    NgbModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

export const RoutedComponents:any[]						= [HomePage, NotFoundPage, ServicesPage, ServiceDetailPage, PortfolioPage, ProjectDetailPage, ContactPage, QuotePage];