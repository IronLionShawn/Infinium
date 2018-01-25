import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent 
{
	title 												= 'app';
	private pages: string[]								= ['home','portfolio','services','quote','contact'];
	constructor()
	{
		console.log(this);
	}
}
