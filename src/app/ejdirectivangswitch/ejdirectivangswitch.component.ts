import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangswitch',
  templateUrl: './ejdirectivangswitch.component.html',
  styleUrls: ['./ejdirectivangswitch.component.css']
})
export class EjdirectivangswitchComponent implements OnInit {

  musicos: any[] = [
    { nombre: 'Fran Healy', banda: 'Travis' },
    { nombre: 'Gary Lightbody', banda: 'Snow Patrol' },
    { nombre: 'Tom Rice Oaxley', banda: 'Keane' }
  ]

  constructor() { }

  ngOnInit() {
  }

}
