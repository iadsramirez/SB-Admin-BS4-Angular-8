import { Component, Input, OnInit } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { AccionPersonalService } from '../servicio/accion-personal.service';
import { Empleado } from '../modelo/Empleado';
import { PlanillaService } from '../servicio/planilla.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormEmpleadoModel } from '../modelo/formEmpleadoModel';
import { EncabezadoEmp } from './modelo/EncabezadoEmp';
import { AccionPersonaSaveRequest } from './modelo/AccionPersonaSaveRequest';
import { TipoAccion } from './modelo/TtipoAccion';
import { TipoAccionPK } from './modelo/TipoAccionPK';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-accion-no-afecta-planilla',
    templateUrl: './accion-no-afecta-planilla.component.html',
    styleUrls: ['./accion-personal.component.css']
})
export class AccionNoAfectaPlanillaComponent implements OnInit {
    p: number = 1;

    @Input() mostrar: boolean;

    tipoAccion: TipoAccion;
    fechaSolicitud: NgbDateStruct;
    empleado: Empleado = new Empleado();
    listadoEmpleado: Array<any>;
    formEmpleado: FormGroup;
    formAccionNoAfecta: FormGroup;
    depenciaEmpleado: EncabezadoEmp = new EncabezadoEmp();
    listaNoAfectaPlanilla: Array<any>;
    listaMotivos: Array<any>;
    fechaInicial: NgbDateStruct;
    fechaFinal: NgbDateStruct;
    horas: number;
    minutos: number;
    archivo: string;
    minDate = undefined;

    constructor(private fb: FormBuilder,
        public planillaService: PlanillaService,
        private accionService: AccionPersonalService,
        private router: Router,
        private calendar: NgbCalendar
    ) {

    }

    ngOnInit(): void {
        this.planillaService.logueado = true;
        this.llenadoEmpleadoInicial();
        this.createForm();
        this.accionService.obtenerNoAfectaTipoAccion(3, 'rrhh').subscribe(tipo => this.listaNoAfectaPlanilla = tipo);
        this.creaFormAccionNoAfecta();
        this.accionService.motivos(3).subscribe(mov => this.listaMotivos = mov);

    }



    public regresar(): void {
        this.router.navigate(['/accion-personal-crear']);
    }



    llenadoEmpleadoInicial() {
        const objeto = {
            empresa: 3,
            estado:true,
        };

        this.planillaService.obtenerEmpleados(objeto).subscribe((data) => {
            this.listadoEmpleado = data;
        });
    }


    createForm() {
        this.formEmpleado = this.fb.group({
            codEmp: [''],
            nombre: [''],
            numDui: ['']
        });
    }

    creaFormAccionNoAfecta() {
        this.formAccionNoAfecta = this.fb.group({
            tipoAccion: ['', [Validators.required]],
            motivo: [''],
            dias: [''],
            detalle: [''],
            observacion: [''],
        });
    }




    Buscar() {
        this.p = 1;
        let formEmpleado = new FormEmpleadoModel();

        formEmpleado.empresa = 3;
        formEmpleado.estado=true;

        if (this.formEmpleado.get('codEmp').value) {
            formEmpleado.codEmp = Number(this.formEmpleado.get('codEmp').value);
        }

        if (this.formEmpleado.get('nombre').value) {
            formEmpleado.nombre = String(this.formEmpleado.get('nombre').value);
        }

        if (this.formEmpleado.get('numDui').value) {
            formEmpleado.numDui = String(this.formEmpleado.get('numDui').value);
        }

        this.listadoEmpleado = [];

        this.planillaService.obtenerEmpleados(formEmpleado).subscribe((data) => {
            this.listadoEmpleado = data;
        });
    }

    limpiar() {
        this.formEmpleado.reset();
        const objeto = {
            empresa: 3,
            estado:true
        };

        this.listadoEmpleado = [];

        this.planillaService.obtenerEmpleados(objeto).subscribe((data) => {
            this.listadoEmpleado = data;
        });
    }







    obtenerEmpleado(cia: number, codigo: number) {
        this.planillaService.obtenerEmpleado(cia, codigo).subscribe((data) => {
            /* console.log('################################');
             console.log('------>EL EMPLEADO ASIG' + JSON.stringify(data));
             console.log('-------------------------------------------');*/
            this.asignarEmpleado(data);
        });


        this.planillaService.obtenerDepenciaEmpleado(cia, codigo).subscribe((valores) => {
            this.asignarDependenciaEmpleado(valores);
        });
    }

    public asignarEmpleado(valor: Empleado): void {
        this.empleado = valor;
    }

    public asignarDependenciaEmpleado(data: any): void {
        this.depenciaEmpleado = data;
    }


    validarNumero(e) {
        var charCode = (e.which) ? e.which : e.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }

    public asignarHora(valor: number): void {
        this.horas = valor;
    }

    public asignarMinutos(valor: number): void {
        this.minutos = valor;
    }

    public guardarNoAfectaPlanilla(): void {
        let objetoNoAfectaPlanilla: AccionPersonaSaveRequest = new AccionPersonaSaveRequest();

        objetoNoAfectaPlanilla.empleado = new Empleado();
        objetoNoAfectaPlanilla.empleado = this.empleado;
        objetoNoAfectaPlanilla.tipoAccion = this.tipoAccion;

        if (this.formAccionNoAfecta.get('dias').value) {
            objetoNoAfectaPlanilla.dias = Number(this.formAccionNoAfecta.get('dias').value);
        }

        objetoNoAfectaPlanilla.horas = this.horas;
        objetoNoAfectaPlanilla.minutos = this.minutos;
        if (this.formAccionNoAfecta.get('detalle').value) {
            objetoNoAfectaPlanilla.noCertificacion = this.formAccionNoAfecta.get('detalle').value;
        }

        if (this.formAccionNoAfecta.get('observacion').value) {
            objetoNoAfectaPlanilla.observacion = this.formAccionNoAfecta.get('observacion').value;
        }



        if (this.fechaInicial) {
            objetoNoAfectaPlanilla.fechaInicial = this.fechaInicial.day + '/' + this.fechaInicial.month + '/' + this.fechaInicial.year;
        }

        if (this.fechaFinal) {
            objetoNoAfectaPlanilla.fechaFinal = this.fechaFinal.day + '/' + this.fechaFinal.month + '/' + this.fechaFinal.year;
        }


        if (this.depenciaEmpleado.puesto) {
            objetoNoAfectaPlanilla.puesto = this.depenciaEmpleado.puesto;
        }


        if (this.archivo) {
            objetoNoAfectaPlanilla.archivo = this.archivo;
        }



        console.log('JSON TO API' +
            JSON.stringify(objetoNoAfectaPlanilla)
        );



        this.accionService.guardarAccionNoAfectaPlanilla(objetoNoAfectaPlanilla).subscribe(
            accion => {
                console.log('REPUESTA DEL GUARDADO DE LA ACCION DE PERSONAL' + JSON.stringify(accion));
                this.limpiarFormulario();
                Swal.fire({
                    title: accion.mensaje,
                    text: " ",
                    icon: 'success',
                }).then(function () {

                });
                ;
            }
        );
    }


    limpiarFormulario(): void {
        this.formAccionNoAfecta.reset();
        this.fechaFinal = null;
        this.fechaInicial = null;
        this.empleado = null;
        this.depenciaEmpleado = null;
        this.fechaSolicitud = null;
        this.minutos = null;
        this.horas = null;
    }

    public asignarTipoAccion(event): void {
        this.tipoAccion = new TipoAccion();
        this.tipoAccion.tipoAccionPK = new TipoAccionPK();
        this.tipoAccion.tipoAccionPK.codTipoaccion = event;
        this.tipoAccion.tipoAccionPK.codCia = 3;
        //console.log(JSON.stringify(event));

    }



    handleUpload(event) {
        Swal.fire('Archivo Cargado con exito');
        let baseArch: string;
        if (event.target.value) {
            const file = event.target.files[0];
            const type = file.type;
            this.changeFile(file).then((base64: string): any => {
                baseArch = base64;
                let dataArray = baseArch.split(',');
                // console.log(dataArray[1]);
                this.obtenerBase64(baseArch);
            });
        } else alert('Nothing')

    }



    changeFile(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    obtenerBase64(data: any) {
        this.archivo = data;
        console.log('BASE 64 DE ARCHIVO' + data);
    }



    restaDias(f1, f2): number {
        var aFecha1 = f1.split('/');
        var aFecha2 = f2.split('/');
        var fFecha1 = Date.UTC(aFecha1[2], aFecha1[1] - 1, aFecha1[0]);
        var fFecha2 = Date.UTC(aFecha2[2], aFecha2[1] - 1, aFecha2[0]);
        var dif = fFecha2 - fFecha1;
        var dias = Math.floor(dif / (1000 * 60 * 60 * 24));
        return dias;
    }


    deshabilitarDiasCalendario(){

    }


}
