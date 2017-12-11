import { platformBrowser } from '@angular/platform-browser'
import { UpgradeModule } from '@angular/upgrade/static'
import { MainModuleNgFactory } from '../../../aot/src/client/components/main.module.ngfactory'

export function hybridBootstrap(){
    platformBrowser().bootstrapModuleFactory(MainModuleNgFactory).then(platformRef => {
        const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule
        upgrade.bootstrap(document.body, ['myApp'], { strictDi: false });
    });
}