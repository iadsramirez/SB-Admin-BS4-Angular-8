import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccionPersonalComponent } from './accion-personal/accion-personal.component';
import { PreparacionAcademicaComponent } from './expediente-empleado/preparacion-academica/preparacion-academica.component';
import { DependientesComponent } from './expediente-empleado/dependientes/dependientes.component';
import { BeneficiarioComponent } from './expediente-empleado/beneficiario/beneficiario.component';
import { DatosAfiliacionComponent } from './expediente-empleado/datos-afiliacion/datos-afiliacion.component';
import { ExpedienteDigitalComponent } from './expediente-empleado/expediente-digital/expediente-digital.component';
import { ExperienciaLaboralComponent } from './expediente-empleado/experiencia-laboral/experiencia-laboral.component';
import { GeneralesComponent } from './expediente-empleado/generales/generales.component';
import { PruebasComponent } from './expediente-empleado/pruebas/pruebas.component';
import { PuestosEntrevistasComponent } from './expediente-empleado/puestos-entrevistas/puestos-entrevistas.component';
import { ReferenciasComponent } from './expediente-empleado/referencias/referencias.component';
import { LayoutComponent } from './layout.component';
import { CapacitacionesComponent } from './expediente-empleado/capacitaciones/capacitaciones.component';
import { EmergenciasComponent } from './expediente-empleado/emergencias/emergencias.component';
import { CargarHXComponent } from './cargar-hx/cargar-hx.component';
import { DocumentosComponent } from './expediente-empleado/documentos/documentos.component';
import { DatosEconomicosComponent } from './expediente-empleado/datos-economicos/datos-economicos.component';
import { EquipoOficinaComponent } from './expediente-empleado/equipo-oficina/equipo-oficina.component';
import { EquipoTrabajoComponent } from './expediente-empleado/equipo-trabajo/equipo-trabajo.component';
import { IdiomasComponent } from './expediente-empleado/idiomas/idiomas.component';
import { MotivacionProyeccionComponent } from './expediente-empleado/motivacion-proyeccion/motivacion-proyeccion.component';
import { ObservacionesComponent } from './expediente-empleado/observaciones/observaciones.component';
import { DeduccionesComponent } from './deduccion/deducciones.component';
import { from } from 'rxjs';
import { CargaManualComponent } from './carga-manual/carga-manual.component';
import { AccionCrearComponent } from './accion-personal/accion-crear.component';
import { AccionNoAfectaPlanillaComponent } from './accion-personal/accion-no-afecta-planilla.component';
import { LoginComponent } from '../login/login.component';
import { CandidatoComponent } from './candidato/form-candidato/candidato-form.component';
import { ContratacionDirectaComponent } from './contratacion-directa/contratacion-directa.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'prefix' },
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
            },
            { path: 'login', component: LoginComponent },
            { path: 'planilla', loadChildren: () => import('./planilla/planilla.module').then((m) => m.PlanillaModule) },
            { path: 'expediente', loadChildren: () => import('./expediente-empleado/expediente.module').then((m) => m.ExpedienteModule) },
            { path: 'accion-personal', component: AccionPersonalComponent },
            { path: 'candidato', component: CandidatoComponent },
            { path: 'contratacion', component: ContratacionDirectaComponent },
            { path: 'accion-personal-crear', component: AccionCrearComponent },
            { path: 'accion-no-afecta-planilla', component: AccionNoAfectaPlanillaComponent },
            { path: 'preparacion-academica', component: PreparacionAcademicaComponent },
            { path: 'capacitaciones', component: CapacitacionesComponent },
            { path: 'emergencias', component: EmergenciasComponent },
            { path: 'cargarHX', component: CargarHXComponent },
            { path: 'carga-manual', component: CargaManualComponent },
            { path: 'deduccion-carga', component: DeduccionesComponent },
            { path: 'formPlanilla', loadChildren: () => import('./formPlanilla/form-module-planilla/form-module-planilla.module').then((m) => m.FormModulePlanillaModule) },
            { path: 'charts', loadChildren: () => import('./charts/charts.module').then((m) => m.ChartsModule) },
            { path: 'tables', loadChildren: () => import('./tables/tables.module').then((m) => m.TablesModule) },
            { path: 'forms', loadChildren: () => import('./form/form.module').then((m) => m.FormModule) },

            { path: 'documentos', component: DocumentosComponent },
            { path: 'datos-economicos', component: DatosEconomicosComponent },
            { path: 'equipo-oficina', component: EquipoOficinaComponent },
            { path: 'equipo-trabajo', component: EquipoTrabajoComponent },
            { path: 'idiomas', component: IdiomasComponent },
            { path: 'motivaciones', component: MotivacionProyeccionComponent },
            { path: 'observaciones', component: ObservacionesComponent },

            { path: 'dependientes', component: DependientesComponent },
            { path: 'beneficiario', component: BeneficiarioComponent },
            { path: 'datos-afiliacion', component: DatosAfiliacionComponent },
            { path: 'expediente-digital', component: ExpedienteDigitalComponent },
            { path: 'experiencia-laboral', component: ExperienciaLaboralComponent },
            { path: 'generales', component: GeneralesComponent },
            { path: 'pruebas', component: PruebasComponent },
            { path: 'puestos-entrevistas', component: PuestosEntrevistasComponent },
            { path: 'referencias', component: ReferenciasComponent },

            {
                path: 'bs-element',
                loadChildren: () => import('./bs-element/bs-element.module').then((m) => m.BsElementModule)
            },
            { path: 'grid', loadChildren: () => import('./grid/grid.module').then((m) => m.GridModule) },
            {
                path: 'components',
                loadChildren: () => import('./bs-component/bs-component.module').then((m) => m.BsComponentModule)
            },
            {
                path: 'blank-page',
                loadChildren: () => import('./blank-page/blank-page.module').then((m) => m.BlankPageModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
