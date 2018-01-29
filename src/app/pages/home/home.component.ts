import { Component, OnInit, AfterViewInit } from '@angular/core';

import { CardInfo } from '../../interfaces/card-info/card-info.interface';

import { Utilities } from '../../services/utilities/utilities.service';

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomePage implements OnInit
{

	public deck: Array<CardInfo>						= [];
	public appWidth: number;
	public constructor(public utils: Utilities) 
	{ 
		this.deck										= [
														{title: "Portfolio", subHeading: "Our work", message: "Take a look at our amazing work", url: "portfolio", backgroundImage: "./assets/milky-way.png"},
														{title: "Services", subHeading: "What we do", url: "services"},
														{title: "Contact", subHeading: "Contact us", url: "contact"},	
		];
	}

	public ngOnInit() 
	{
		this.appWidth									= window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	}
}
