import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, AppModule, CoreModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Coin dessin';
}
