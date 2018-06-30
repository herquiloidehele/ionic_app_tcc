import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import { MyApp } from './app.component';


import { TabsPage } from '../pages/modulo-cadastrador/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
import {ProdutoresPage} from "../pages/modulo-cadastrador/produtores/produtores";
import {MercadosPage} from "../pages/modulo-cadastrador/mercados/mercados";
import {ProdutosPage} from "../pages/modulo-cadastrador/produtos/produtos";
import {CategoriaProdutosComponent} from "../components/categoria-produtos/categoria-produtos";
import {MercadosComponent} from "../components/mercados/mercados";
import {ProdutoresComponent} from "../components/produtores/produtores";
import {RevendedoresPage} from "../pages/modulo-cadastrador/revendedores/revendedores"
import {RegistarRevendedoresPage, RegistarUnidadesMedidasPage, RegistarCategoriasPage, RegistarProdutosPage, RegistarProdutoresPage, RegistarMercadosPage} from "../pages/modulo-cadastrador/cadastros/Cadastros";
import {RevendedoresComponent} from "../components/revendedores/revendedores";
import {Camera} from "@ionic-native/camera";
import {NativeGeocoder} from "@ionic-native/native-geocoder";
import { AutenticacaoProvider } from '../providers/providers';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { CategoriasProvider } from '../providers/categorias/categorias';
import {ProdutoresProvider} from "../providers/produtores/produtores";
import { RevendedorProvider } from '../providers/revendedor/revendedor';
import { MercadoProvider } from '../providers/mercado/mercado';
import {Geolocation} from "@ionic-native/geolocation";
import {GoogleMaps} from "@ionic-native/google-maps";
import {DisponibilizarProdutosPage} from "../pages/modulo-produtor/disponibilizar-produtos/disponibilizar-produtos";
import {ProdutosrequsitadosPage} from "../pages/modulo-produtor/produtosrequsitados/produtosrequsitados";
import {ProdutosDisponibilizadosPage} from "../pages/modulo-produtor/produtos-disponibilizados/produtos-disponibilizados";
import {RootProdutorPage} from "../pages/modulo-produtor/root-produtor/root-produtor";
import { ProcurasProvider } from '../providers/procuras/procuras';
import { ProduzProvider } from '../providers/produz/produz';
import { ProdutosProvider } from '../providers/produtos/produtos';
import {RegistarMeusProdutosPage} from "../pages/modulo-produtor/registar-meus-produtos/registar-meus-produtos";
import { UnidadeMedidaProvider } from '../providers/unidade-medida/unidade-medida';
import { OfertasProvider } from '../providers/ofertas/ofertas';
import { GerarCoresProvider } from '../providers/gerar-cores/gerar-cores';
import {RegistarProdutosDisponibilizadosPage} from "../pages/modulo-produtor/registar-produtos-disponibilizados/registar-produtos-disponibilizados";
import { UrlapiProvider } from '../providers/urlapi/urlapi';
import {DisponibilidadePage} from "../pages/modulo-produtor/disponibilidade/disponibilidade";
import { VariaveisGlobaisProvider } from '../providers/variaveis-globais/variaveis-globais';
import {MostrarParcementoPage} from "../pages/mostrar-parcemento/mostrar-parcemento";
import { ConversorProvider } from '../providers/conversor/conversor';
import {PerfilPage} from "../pages/perfil/perfil";
import { MenuProvider } from '../providers/menu/menu';


@NgModule({
  declarations: [
    MyApp,
    ProdutoresPage,
    MercadosPage,
    ProdutosPage,
    TabsPage,
    LoginPage,
    RegistarMercadosPage,
    RegistarProdutoresPage,
    RegistarProdutosPage,
    CategoriaProdutosComponent,
    MercadosComponent,
    ProdutoresComponent,
    RevendedoresComponent,
    RegistarCategoriasPage,
    RegistarUnidadesMedidasPage,
    RegistarRevendedoresPage,
    RevendedoresPage,
    DisponibilizarProdutosPage,
    ProdutosrequsitadosPage,
    ProdutosDisponibilizadosPage,
    RegistarMeusProdutosPage,
    RegistarProdutosDisponibilizadosPage,
      RootProdutorPage,
    DisponibilidadePage,
    MostrarParcementoPage,
    PerfilPage
  ],
  imports: [
    BrowserModule,
      HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProdutoresPage,
    MercadosPage,
    ProdutosPage,
    TabsPage,
    LoginPage,
    RegistarMercadosPage,
    RegistarProdutoresPage,
    RegistarProdutosPage,
    RegistarCategoriasPage,
    RegistarUnidadesMedidasPage,
    RegistarRevendedoresPage,
    RevendedoresPage,
    DisponibilizarProdutosPage,
    ProdutosrequsitadosPage,
    ProdutosDisponibilizadosPage,
    RegistarMeusProdutosPage,
    RegistarProdutosDisponibilizadosPage,
      RootProdutorPage,
    DisponibilidadePage,
    MostrarParcementoPage,
    PerfilPage

  ],
  providers: [
    ConversorProvider,
    ProdutoresProvider,
    RevendedorProvider,
    MercadoProvider,
    Geolocation,
    GoogleMaps,
    ProcurasProvider,
    ProdutosProvider,
    ProduzProvider,
    GerarCoresProvider,
    OfertasProvider,
    UnidadeMedidaProvider,
    StatusBar,
    SplashScreen,
    Camera,
    NativeGeocoder,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AutenticacaoProvider,
    HttpClient,
    CategoriasProvider,
    ProcurasProvider,
    ProduzProvider,
    ProdutosProvider,
    ProdutosProvider,
    OfertasProvider,
    GerarCoresProvider,
    UrlapiProvider,
    VariaveisGlobaisProvider,
    MenuProvider,
  ]

})
export class AppModule {}
