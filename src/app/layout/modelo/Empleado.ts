import { empleadosPK } from "./EmpleadosPK";
import { Ocupaciones } from "./Ocupaciones";
import { OcupacionesPK } from "./OcupacionesPK";

export class Empleado{
numNit:string;
estadoCivil:string;
sexo:number;
nombres:string;
apellidos:string;
empleadosPK:empleadosPK;

actividadLimitada: string;
actualizadoPor: string;
alergiaMedicina: string;
anio: number;
anioServicioPep: string;
antipag: number;
apCasada: string;
aportacionPolitica: number;
articulado: string;
asociadoPep: string;
aspiracionEmpresa: string;
autoEvaluacion: number;
avisarA: string;
bebidasAlcholicas: string;
bonificacion: number;
calle: string;
cantSostener: string;
cantidadCigarros: string;
cargoPep: string;
casa: string;
cedula: string;
celContacto: string;
celular: string;
chequeDep:string;
codAfp: number;
codAldea:number;
codArea: number;
codBanco: string;
codClasificacion:number;
codContratacion: number;
codDepar: number;
codDepartamentoDomic: number;
codDepartamentoNacim:number ;
codDepto: number;
codEmpAnterior:string;
codEmpEmpresa: string;
codEstudio: string;
codGerencia: number;
codJurisdiccion: number;
codModulo: string;
codMuni: number;
codMunicipioDomic: number;
codMunicipioNacim:number ;
codObjeto: string;
codPais: number;
codPaisDomic: number;
codPaisNacimiento:number;
codPaisNacionalidad: number;
codProfesion: number;
codRol: number;
codSeccion: number;
codSubArea: string;
codSubSubArea: number;
codSucursal: number;
codTipoEmpleado: number;
codTipoPla: number;
comSobra: string;
comSprod: string;
comision: string;
companiaSeguro: string;
computacion: string;
concurso: string;
condicionSalud: string;
conocidoEmpresa: string;
conocidoPor:string;
controlEntrada:string;
correo: string;
correoPersonal: string;
ctaAhorroPro: string;
ctaAhorroPro2: string;
ctaBancaria: string;
deConfianza: number;
departamento:string;
deporte: string;
direccion: string;
discapacidad: string;
docente: string;
domicilio: string;
dui: string;
emailEnviado: boolean;
empleadoSeleccion: number;
fecIngreso:string;
codPuesto:number;
ocupaciones:Ocupaciones;
fechaNac:string;
salarioBase:number;
nombreMadre:string;
nombrePadre:string;
ocupacionMadre:string;
trabajoMadre:string;
ocupacionPadre:string;
trabajoPadre:string;
fechaRealPlanilla:string;
archivoFoto:any;
pesionado:string;
fecSalida:string;
status:string;
telefonos:string;
etnia:any;
expedicionDui:string;
muniExpDui:string;
numDui:string;
fechaDui:string;
numPasaporte:string;
numIgss:string;
nombreIsss:string;
numIrtra:string;
nombreRenta:string;
nombreAfp:string;
licencia:string;
transporteUSA:string;
habilidadesEspeciales:string;
tipoVehiculo:string;
codEtnia:number;
tipoSangre:string;

constructor(){


}


}
