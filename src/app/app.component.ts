import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {  } from 'express';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  viewAtivo:number = Views.SobreMim;

  Views = Views;
  title = 'Portfolios';

  ScrollListener(event:Event){
    let el = event.target as HTMLElement;
    let sectionHeight = el.clientHeight - 50;
    if(el.scrollTop > sectionHeight*2)
      this.viewAtivo = Views.Portfolios;
    else if(el.scrollTop > sectionHeight)
      this.viewAtivo = Views.Experiencia
    else this.viewAtivo = Views.SobreMim
  }

  ScrollTo(id:string){
    let el = document.getElementById(id);
    if(el){
      el.scrollIntoView({behavior: 'smooth'});
    }
  }
}

export  enum Views{
  SobreMim, Experiencia, Portfolios
}
