import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoImage]'
})
export class NoImageDirective {

  constructor(private elementImg: ElementRef) { }
  @HostListener("error")
  onError() {
    this.elementImg.nativeElement.src = "https://img.freepik.com/fotos-premium/paisaje-montana-globo-aerostatico-al-amanecer-generado-ia_986584-10032.jpg";
  }

}
