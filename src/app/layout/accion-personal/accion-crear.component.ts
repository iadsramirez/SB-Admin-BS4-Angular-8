import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccionPersonalService } from '../servicio/accion-personal.service';
import { PlanillaService } from '../servicio/planilla.service';

@Component({
    selector: 'app-accion-personal-crear',
    templateUrl: './accion-crear.component.html',
    styleUrls: ['./accion-personal.component.css']
})
export class AccionCrearComponent implements OnInit {
    p: number = 1;
    tipoAccionSeleccion:number;
    listaTipoAccion:Array<any>=[];
    mostrarNOAfectaPlanilla:boolean;


    constructor(private accionService: AccionPersonalService,private router:Router,
        private planillaService:PlanillaService) {}

    ngOnInit(): void {
      this.accionService.obtenerTipoAccion(3,2).subscribe(tipo=>this.listaTipoAccion=tipo);
    }


   public seleccionAccion(event):void{
    console.log('VALOR QUE VIENE'+JSON.stringify(event));

    let bandera : number = event.tipoAccionPK.codTipoaccion;
    this.mostrarNOAfectaPlanilla=false;

    switch (bandera) {
        case 0:
            this.mostrarNOAfectaPlanilla=true;
            this.planillaService.leyenda='No Afecta Planilla';
            this.router.navigate(['/accion-no-afecta-planilla']);
            break;
        case 1:
            console.log("It is a Monday.");
            break;
        case 2:

            this.planillaService.leyenda='Dia Vacacion';
            this.router.navigate(['/accion-no-afecta-planilla']);
            break;
        case 3:
            console.log("It is a Wednesday.");
            break;
        case 4:
            console.log("It is a Thursday.");
            break;
        case 5:
            console.log("It is a Friday.");
            break;
        case 6:
            console.log("It is a Saturday.");
            break;
        default:
            console.log("No such day exists!");
            break;
    }



    }



    regresar():void{
        this.router.navigate(['/accion-personal']);
    }



}
