import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  constructor(
    private parametrizador: ActivatedRoute,
    private navegador:Router
    ) {
      
    //http://localhost:4200/portfolio/{1}
    this.parametrizador.params.subscribe(
      res => (console.log(res))
    )

   /* //http://localhost:4200/portfolio/{1}?{name=natan&token-123}
    this.parametrizador.queryParams.subscribe(
      res => (console.log(res))
    )*/

    this.parametrizador.firstChild.queryParams.subscribe(
      res => (console.log(res))
    )
  }

  ngOnInit() {
    /*//força a ir a uma página
    setInterval(()=>{
      this.navegador.navigate(['/'])
    },5000)*/
  }
}
