import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MemberComponent } from './member/member.component';
import { NoteComponent } from './note/note.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './note/sidebar/sidebar.component';
import { ContentComponent } from './note/content/content.component';

@NgModule({
  declarations: [AppComponent, MemberComponent, NoteComponent, HomeComponent, SidebarComponent, ContentComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
