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

  public setFiltroDeposito(codigo: number, idTipoMonda: number, montoMaximoDeposito: number,
                           plazoMaximoDia: number, idDepartamento: number, idTipoInstitucion: number) {
    this.codigoProductoFinanciero = codigo;
    this.tipoMonedaId = idTipoMonda;
    this.montoMaximoDeposito = montoMaximoDeposito;
    this.plazoMaximoDia = plazoMaximoDia;
    this.departamentoId = idDepartamento;
    this.tipoInstitucionId = idTipoInstitucion;
  }

  public setFiltroPrestamo(codigo: number, idTipoMoneda: number, montoMaximoAceptable: number,
                           plazoMaximoMes: number, idDepartamento: number, idTipoInstitucion: number,
                           ingresoPermitido: number) {
    this.codigoProductoFinanciero = codigo;
    this.tipoMonedaId = idTipoMoneda;
    this.montoMaximoAceptable = montoMaximoAceptable;
    this.plazoMaximoMes = plazoMaximoMes;
    this.departamentoId = idDepartamento;
    this.tipoInstitucionId = idTipoInstitucion;
    this.ingresoPermitido = ingresoPermitido;
  }
}
