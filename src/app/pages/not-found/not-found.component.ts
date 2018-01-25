import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundPage implements OnInit 
{

	private message: string								= '404';
	constructor() { }

	ngOnInit() 
	{

	}

}
