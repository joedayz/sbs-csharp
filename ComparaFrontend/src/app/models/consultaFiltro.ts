export class ConsultaFiltro {

  codigoProductoFinanciero: number=0;
  tipoMonedaId: number = 0;
  montoMaximoAceptable: number = 0;
  plazoMaximoMes: number = 0;
  ingresoPermitido: number = 0;
  departamentoId: number = 0;
  tipoInstitucionId: number = 0;
  montoMaximoDeposito: number = 0;
  plazoMaximoDia: number = 0;

  public ConsultaFiltro(codigo: number) {
    this.codigoProductoFinanciero = codigo;
  }

  public setFiltroDeposito(codigo: number, idTipoMonda: string, montoMaximoDeposito: string,
                           plazoMaximoDia: string, idDepartamento: string, idTipoInstitucion: string) {
    this.codigoProductoFinanciero = codigo;
    this.tipoMonedaId = Number(idTipoMonda);
    this.montoMaximoDeposito = Number(montoMaximoDeposito);
    this.plazoMaximoDia =  Number(plazoMaximoDia);
    this.departamentoId =  Number(idDepartamento);
    this.tipoInstitucionId =  Number(idTipoInstitucion);
  }

  public setFiltroPrestamo(codigo: number, idTipoMoneda: string, montoMaximoAceptable: string,
                           plazoMaximoMes: string, idDepartamento: string, idTipoInstitucion: string,
                           ingresoPermitido: string) {
    this.codigoProductoFinanciero = codigo;
    this.tipoMonedaId = Number(idTipoMoneda);
    this.montoMaximoAceptable = Number(montoMaximoAceptable);
    this.plazoMaximoMes = Number(plazoMaximoMes);
    this.departamentoId = Number(idDepartamento);
    this.tipoInstitucionId = Number(idTipoInstitucion);
    this.ingresoPermitido = Number(ingresoPermitido);
  }
}
