import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardd',
  templateUrl: './cardd.component.html',
  styleUrls: ['./cardd.component.css']
})
export class CarddComponent implements OnInit {
	@Input()
	gameCover: string=""

	@Input()
	gameLabel:string=""

	@Input()
	gameType:string="Digital PS4"

	@Input()
	gamePrice:string="R$ 399,90"

  constructor() { }

  ngOnInit(): void {
  }

}
