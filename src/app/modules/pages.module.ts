import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialmoduleModule } from './materialmodule.module';

import { routes } from '../components/router/router.component';
import { EcosystemComponent } from '../components/ecosystem/ecosystem.component';
import { BlockchainComponent } from '../components/blockchain/blockchain.component';
import { TypesofblockchainComponent } from '../components/typesofblockchain/typesofblockchain.component';
import { IntroductionComponent } from '../components/introduction/introduction.component';
import { ChaptersComponent } from '../components/chapters/chapters.component';
import { HowitworksComponent } from '../components/howitworks/howitworks.component';
import { GethComponent } from '../components/geth/geth.component';
import { PrivatenetworkComponent } from '../components/privatenetwork/privatenetwork.component';
import { MiningprivatenetworkComponent } from '../components/miningprivatenetwork/miningprivatenetwork.component';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { SmartcontractComponent } from '../components/smartcontract/smartcontract.component';
import { SolidityComponent } from '../components/solidity/solidity.component';
import { VariabletypesComponent } from '../components/variabletypes/variabletypes.component';
import { GlobalobjectComponent } from '../components/globalobject/globalobject.component';
import { InheritanceComponent } from '../components/inheritance/inheritance.component';
import { ContractwalletComponent } from '../components/contractwallet/contractwallet.component';
import { SolidityeventsComponent } from '../components/solidityevents/solidityevents.component';

@NgModule({
  imports: [
    CommonModule,
    routes,
    MaterialmoduleModule,
  ],
  declarations: [
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
    SolidityeventsComponent],
  exports: [
    MaterialmoduleModule,
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
  ]
})
export class PagesModule { }
