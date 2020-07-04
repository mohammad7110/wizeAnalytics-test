import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedLibModule } from './shared-lib/shared-lib.module';


@NgModule({
    declarations: [

    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        SharedLibModule],
    exports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        SharedLibModule

    ],
    providers: [
    ],
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        // Forcing the whole app to use the returned providers from the AppModule only.
        return {
            ngModule: SharedModule,
            providers: [
                /* All of your services here. It will hold the services needed by `itself`. */
            ],
        };
    }
}
