import { Component } from '@angular/core';

@Component ({
    selector: 'app-fechaActual',
    template: `
        <p>Buenos Aires, {{ hoy | date: 'd/M/y H:m'}} </p>
        <app-copyright></app-copyright>
    `,
    styleUrls: ['./fechaActual.component.css']
})

export class FechaActualComponent {
    hoy = new Date();
}
