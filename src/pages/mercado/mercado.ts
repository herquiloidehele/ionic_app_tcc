import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MercadoProvider} from "../../providers/mercado/mercado";
import {RegistarMercadosPage} from "../modulo-cadastrador/cadastros/registar-mercados/registar-mercados";
import {MercadoDetailsPage} from "../mercado-details/mercado-details";



@IonicPage()
@Component({
  selector: 'page-mercados',
  templateUrl: 'mercado.html',
})
export class MercadoPage {

  protected mercados: any[];
  protected showSearch: boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams, private mercadoProvider: MercadoProvider) {
  }


  ionViewDidLoad(){
    this.getAll();
  }

  getAll(){
    this.mercadoProvider.getAll().subscribe(
      (resultado) => {
        this.mercados = resultado['mercados'];
        console.log(resultado);
      },
      (erros) => {
        console.log(erros);
      },
      () =>{
        console.log('Busca de Mercados Terminada');
      }
    )
  }


  showMercado(mercado){
    this.navCtrl.push(MercadoDetailsPage, {mercado: mercado});
  }


  protected onInput(event){
    return this.mercados;
  }

  protected onBlur(){
    this.changeShowSearch();
  }

  protected onCancel(){
    console.log('cancelado');
    this.changeShowSearch();
  }

  protected changeShowSearch(){
    this.showSearch = !this.showSearch;
  }



}
