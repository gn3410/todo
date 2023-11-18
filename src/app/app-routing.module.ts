import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './member/member.component';
import { NoteComponent } from './note/note.component';
import { HomeComponent } from './home/home.component';

//在這邊可以定義路由(跳轉頁面用)
const routes: Routes = [
  { path: '', component: HomeComponent }, //網頁進入點
  { path: 'Home', component: HomeComponent },
  { path: 'Member', component: MemberComponent },
  { path: 'Note', component: NoteComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true,
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
