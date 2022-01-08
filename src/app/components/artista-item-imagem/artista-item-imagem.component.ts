import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-artista-item-imagem',
  templateUrl: './artista-item-imagem.component.html',
  styleUrls: ['./artista-item-imagem.component.scss']
})
export class ArtistaItemImagemComponent implements OnInit {

  @Input()
  imagemSrc = '';

  @Output()
  click = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.click.emit();
  }

}
