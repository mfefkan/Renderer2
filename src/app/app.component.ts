import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <h1 #h>App Component</h1>
  `,
})
export class AppComponent {
  @ViewChild("h",{static:true}) _h:ElementRef;

  constructor(private renderer : Renderer2) {}
  ngOnInit() {
    this.renderer.setStyle(this._h.nativeElement,"color","red")
  }

}

//Renderer2 sınıfı crossplatform çalışma konusunda işimizi garantiye almamızı sağlayan bir sınıftır. 