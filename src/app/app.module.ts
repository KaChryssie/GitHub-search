import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ProfileService } from './profile.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpModule } from '@angular/http';

 import { FormsModule } from '@angular/forms';
import { ReposComponent } from './repos/repos.component';
import { StrikethroughDirective } from './appstrike-through.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ReposComponent,
    StrikethroughDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
