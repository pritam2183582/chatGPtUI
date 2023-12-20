import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './UI/chat/chat.component';
import { SampleComponent } from './UI/sample/sample.component';

const routes: Routes = [{    path: '', redirectTo: '/chat', pathMatch: 'full'},{ path: 'chat', component: ChatComponent }, { path: 'chat1', component: SampleComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
