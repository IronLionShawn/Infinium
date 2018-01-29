import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent 
{
	public pages: string[]								= ['home','portfolio','services','quote','contact'];
	constructor()
	{
		
	}
}
