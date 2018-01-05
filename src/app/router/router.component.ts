import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../app.component';
import { IntroductionComponent } from '../introduction/introduction.component';
import { EcosystemComponent } from '../ecosystem/ecosystem.component';
import { BlockchainComponent } from '../blockchain/blockchain.component';
import { HowitworksComponent } from '../howitworks/howitworks.component';
import { GethComponent } from '../geth/geth.component';
import { TypesofblockchainComponent } from '../typesofblockchain/typesofblockchain.component';


export const router : Routes = [
  {path: '', redirectTo: 'intro', pathMatch: 'full' },
  {path: 'intro', component: IntroductionComponent },
  {path: 'eco', component: EcosystemComponent },
  {path: 'blockchain', component: BlockchainComponent },
  {path: 'howitworks', component: HowitworksComponent },
  {path: 'geth', component: GethComponent }
];

export const routes : ModuleWithProviders  = RouterModule.forRoot (router);