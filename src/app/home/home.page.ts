import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  resultado = "0";
  primeiroElemento = "";
  segundoElemento = "";
  operadorSelecionado = false;
  operando = "";
  resultadoAnterior = "";

  constructor() {}

  digito(valor: string) {
    if (this.resultadoAnterior !== "") {
      if (this.operadorSelecionado) {
        this.primeiroElemento = this.resultado;
        this.segundoElemento = this.segundoElemento + valor;
        this.resultado += valor;
      } else {
        this.resultado = valor;
        this.primeiroElemento = "";
        this.segundoElemento = "";
        this.operadorSelecionado = false;
        this.operando = "";
        this.resultadoAnterior = "";
      }
    } else if (!this.operadorSelecionado) {
      this.resultado = this.resultado === "0" ? valor : this.resultado + valor;
      this.primeiroElemento = this.resultado;

    } else {
      this.segundoElemento += valor;
      this.resultado += valor;
    }
    
  }

  operador(operadorCalculadora: string) {
    if (!this.operadorSelecionado) {
      this.operadorSelecionado = true;
      this.operando = operadorCalculadora;
      this.primeiroElemento = this.resultado;
      this.resultado += operadorCalculadora;
    } else {
      console.log("Um operador já foi selecionado");
    }
  }

  calcular() {
      const primeiroNumero = parseFloat(this.primeiroElemento);
      const segundoNumero = parseFloat(this.segundoElemento);

      switch (this.operando) {
        case "+":
          this.resultado = (primeiroNumero + segundoNumero).toString();
          this.resultadoAnterior = this.resultado;
          break;
          case "-":
            this.resultado = (primeiroNumero - segundoNumero).toString();
          this.resultadoAnterior = this.resultado;
          break;
          case "÷":
            this.resultado = (primeiroNumero / segundoNumero).toString();
          this.resultadoAnterior = this.resultado;
          break;
          case "x":
            this.resultado = (primeiroNumero * segundoNumero).toString();
          this.resultadoAnterior = this.resultado;
          break;
          case "²":
            this.resultado = Math.pow(primeiroNumero, 2).toString();
          this.resultadoAnterior = this.resultado;
          break;
          case "√":
            this.resultado = this.raizQuadrada(primeiroNumero).toString();
          this.resultadoAnterior = this.resultado;
          break;
          case "%":
            this.resultado = ((primeiroNumero * segundoNumero) / 100).toString();
          this.resultadoAnterior = this.resultado;
          break;
          case "log":
            this.resultado = Math.log10(primeiroNumero).toString();
            this.resultadoAnterior = this.resultado;
          break;
          case ",":
            


        }
        this.operadorSelecionado = false;
        this.segundoElemento = "";
  }

  apagarUltimoDigito() {
    if (this.resultadoAnterior !== "") {
      this.resultado = this.resultadoAnterior;
      this.resultadoAnterior = "";
      this.operadorSelecionado = false;
      this.segundoElemento = "";
    } else {
      this.resultado = this.resultado.slice(0, -1);
      
      if (this.operadorSelecionado) {
        this.segundoElemento = this.resultado.slice(this.primeiroElemento.length);
      } else {
        this.primeiroElemento = this.resultado;
      }
    }
  }

  redefinir() {
    this.resultado = "0";
    this.primeiroElemento = "";
    this.segundoElemento = "";
    this.operando = "";
    this.operadorSelecionado = false;
    this.resultadoAnterior ="";
  }

  raizQuadrada(numero: number): string {
    return Math.sqrt(numero).toString();
  }
  
}
