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
import { PrivatenetworkComponent } from './privatenetwork/privatenetwork.component';
import { MiningprivatenetworkComponent } from './miningprivatenetwork/miningprivatenetwork.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SmartcontractComponent } from './smartcontract/smartcontract.component';
import { SolidityComponent } from './solidity/solidity.component';
import { VariabletypesComponent } from './variabletypes/variabletypes.component';
import { GlobalobjectComponent } from './globalobject/globalobject.component';
import { InheritanceComponent } from './inheritance/inheritance.component';
import { ContractwalletComponent } from './contractwallet/contractwallet.component';
import { SolidityeventsComponent } from './solidityevents/solidityevents.component';
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
    GethComponent,
    PrivatenetworkComponent,
    MiningprivatenetworkComponent,
    NavigationComponent,
    SmartcontractComponent,
    SolidityComponent,
    VariabletypesComponent,
    GlobalobjectComponent,
    InheritanceComponent,
    ContractwalletComponent,
    SolidityeventsComponent
  ],
  imports: [
    routes,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
