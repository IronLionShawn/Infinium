import { Component, Input, OnInit } from '@angular/core';

import { Utilities } from '../../services/utilities/utilities.service';

import { CardInfo } from '../../interfaces/card-info/card-info.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit 
{
	@Input() cardInfo: CardInfo;
	@Input() height: string;
	@Input() width: string;

	public constructor(public utils: Utilities) 
	{ 
		
	}

	public ngOnInit() 
	{

	}
}
