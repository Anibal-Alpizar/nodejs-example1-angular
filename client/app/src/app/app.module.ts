import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { ShareModule } from './share/share.module';
import { HomeModule } from './home/home.module';
import { UserModule } from './user/user.module';
import { VideojuegoModule } from './videojuego/videojuego.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // browser model y any export lib
    BrowserModule, 
    BrowserAnimationsModule, 

    //app modules
    CoreModule,
    ShareModule,

    // all modules
    HomeModule,
    UserModule,
    VideojuegoModule,

    //  last one module
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
