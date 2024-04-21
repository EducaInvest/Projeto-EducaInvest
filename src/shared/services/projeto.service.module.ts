import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ProjetoService } from './projeto.service';


@NgModule({ 
    imports: [],
    exports: [],
    declarations: [],
    providers: [ProjetoService,HttpClient],
})
export class ProjetoServiceModule { }
