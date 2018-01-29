import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundPage implements OnInit 
{

	public message: string								= '404';
	public constructor() { }

	public ngOnInit() 
	{

	}

}
