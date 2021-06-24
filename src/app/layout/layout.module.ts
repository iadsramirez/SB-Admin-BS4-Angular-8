import { CommonModule } from '@angular/common';
import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { NgbDropdownModule, NgbDateParserFormatter, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { CustomDateParserFormatter } from './date-picker/datepicker-formatter';
import { AccionPersonalComponent } from './accion-personal/accion-personal.component';
import {AccionCrearComponent} from './accion-personal/accion-crear.component';
import { CargarHXComponent } from './cargar-hx/cargar-hx.component';
import {DeduccionesComponent} from './deduccion/deducciones.component'

import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFileUploaderModule } from "angular-file-uploader";
import { NgxPaginationModule } from 'ngx-pagination';
import { CargaManualComponent } from './carga-manual/carga-manual.component';
import { from } from 'rxjs';
import { AccionNoAfectaPlanillaComponent } from './accion-personal/accion-no-afecta-planilla.component';
import { CandidatoComponent } from './candidato/form-candidato/candidato-form.component';
import { ContratacionDirectaComponent } from './contratacion-directa/contratacion-directa.component';
import { ArchivoAfpComponent } from './archivoAFP/archivo-afp/archivo-afp.component';
import { UiSwitchModule } from 'ngx-ui-switch';



@NgModule({
    imports: [NgbModule,UiSwitchModule.forRoot({
        size: 'small',
        color: 'rgb(0, 189, 99)',
        switchColor: '#80FFA2',
        defaultBgColor: '#00ACFF',
        defaultBoColor : '#476EFF',
        checkedLabel: 'on',
        uncheckedLabel: 'off'
      }),
        NgxPaginationModule,
        ReactiveFormsModule,
        AngularFileUploaderModule,
        CommonModule, FormsModule,NgSelectModule,LayoutRoutingModule, TranslateModule, NgbDropdownModule,AutocompleteLibModule],
    declarations: [ContratacionDirectaComponent,AccionCrearComponent,CandidatoComponent,AccionNoAfectaPlanillaComponent,LayoutComponent, CargaManualComponent,SidebarComponent, HeaderComponent, AccionPersonalComponent, CargarHXComponent, DeduccionesComponent, ArchivoAfpComponent],
    providers: [{ provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
        {provide: DEFAULT_CURRENCY_CODE, useValue: 'USD'}]
})
export class LayoutModule {}
