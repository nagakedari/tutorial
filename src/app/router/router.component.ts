import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../app.component';
import { IntroductionComponent } from '../introduction/introduction.component';
import { EcosystemComponent } from '../ecosystem/ecosystem.component';
import { BlockchainComponent } from '../blockchain/blockchain.component';
import { HowitworksComponent } from '../howitworks/howitworks.component';
import { GethComponent } from '../geth/geth.component';
import { TypesofblockchainComponent } from '../typesofblockchain/typesofblockchain.component';
import { PrivatenetworkComponent } from '../privatenetwork/privatenetwork.component';
import { MiningprivatenetworkComponent } from '../miningprivatenetwork/miningprivatenetwork.component';
import { SmartcontractComponent } from '../smartcontract/smartcontract.component';
import { SolidityComponent } from '../solidity/solidity.component';
import { VariabletypesComponent } from '../variabletypes/variabletypes.component';
import { GlobalobjectComponent } from '../globalobject/globalobject.component';
import { InheritanceComponent } from '../inheritance/inheritance.component';
import { ContractwalletComponent } from '../contractwallet/contractwallet.component';
import { SolidityeventsComponent } from '../solidityevents/solidityevents.component';

export const router : Routes = [
  {path: '', component: IntroductionComponent, pathMatch: 'full' },
  {path: 'intro', component: IntroductionComponent },
  {path: 'eco', component: EcosystemComponent },
  {path: 'blockchain', component: BlockchainComponent },
  {path: 'howitworks', component: HowitworksComponent },
  {path: 'geth', component: GethComponent },
  {path: 'typesofblockchain', component: TypesofblockchainComponent },
  {path: 'privatenetwork', component: PrivatenetworkComponent },
  {path: 'mining', component: MiningprivatenetworkComponent },
  {path: 'smartcontract', component: SmartcontractComponent },
  {path: 'solidity', component: SolidityComponent },
  {path: 'variabletypes', component: VariabletypesComponent},
  {path: 'globalobject', component: GlobalobjectComponent},
  {path: 'inheritance', component: InheritanceComponent},
  {path: 'wallet', component: ContractwalletComponent},
  {path: 'events', component: SolidityeventsComponent}

];

export const routes : ModuleWithProviders  = RouterModule.forRoot (router);