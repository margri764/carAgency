import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-formalities',
  templateUrl: './formalities.component.html',
  styleUrls: ['./formalities.component.css']
})
export class FormalitiesComponent implements OnInit, AfterViewInit {


  @ViewChild('target', { static: false }) target!: ElementRef;
  public element : any;

  constructor() { }

  ngOnInit(): void {
  }

  
  ngAfterViewInit() {



    setTimeout( () => {
      this.element = this.target.nativeElement;
      this.element.scrollIntoView(
        { alignToTop: true,
          behavior: "smooth",
          block: "start",
        });
        }, 0);


  }

}
