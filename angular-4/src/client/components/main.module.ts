import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { UpgradeModule } from '@angular/upgrade/static'
import { TestPage } from './test/testPage.component'
import { TestItem } from './test/testItem.component'

@NgModule({
    declarations: [
        TestPage,
        TestItem
    ],
    entryComponents: [
        TestPage
    ],
    imports: [
        BrowserModule,
        UpgradeModule
    ],
    bootstrap: []
})
export class MainModule {
    ngDoBootstrap() {}
}