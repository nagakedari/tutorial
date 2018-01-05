import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { routes } from './router/router.component';
import { EcosystemComponent } from './ecosystem/ecosystem.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { TypesofblockchainComponent } from './typesofblockchain/typesofblockchain.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ChaptersComponent } from './chapters/chapters.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { GethComponent } from './geth/geth.component';
// import { AppSettings } from './settings/settings.component';


@NgModule({
  declarations: [
    AppComponent,
    EcosystemComponent,
    BlockchainComponent,
    TypesofblockchainComponent,
    IntroductionComponent,
    ChaptersComponent,
    HowitworksComponent,
    GethComponent
  ],
  imports: [
    routes,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
