import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommissionRoutingModule } from './commission-routing.module';
import { EnDisplayCommComponent } from './components/en-display-comm/en-display-comm.component';
import { EnDisplayTosComponent } from './components/en-display-tos/en-display-tos.component';
import { EnHowToCommComponent } from './components/en-how-to-comm/en-how-to-comm.component';
import { DisplayCommComponent } from './components/fr-display-comm/display-comm.component';
import { DisplayTOSComponent } from './components/fr-display-tos/display-tos.component';
import { HowToCommComponent } from './components/fr-how-to-comm/how-to-comm.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { TierCommViewComponent } from "./components/tier-comm-view/tier-comm-view.component";
import { ReviewsComponent } from "./components/reviews/reviews.component";
import { PriceformComponent } from "./components/priceform/priceform.component";
import { ReviewsingleComponent } from "./components/reviewsingle/reviewsingle.component";


@NgModule({
  declarations: [
    EnDisplayCommComponent,
    EnDisplayTosComponent,
    EnHowToCommComponent,
    DisplayCommComponent,
    DisplayTOSComponent,
    HowToCommComponent,
    MainPageComponent,
    TierCommViewComponent,
    ReviewsComponent,
    PriceformComponent,
    ReviewsingleComponent
  ],
  imports: [
    CommonModule,
    CommissionRoutingModule
]
})
export class CommissionModule { }
