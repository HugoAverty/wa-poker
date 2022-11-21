/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');

    WA.room.onEnterLayer('zoneForest').subscribe(() => {
        WA.room.showLayer("Forest/overlayForest");

        WA.room.hideLayer("Forest/AboveForest3");
        WA.room.hideLayer("Forest/AboveForest2");
        WA.room.hideLayer("Forest/AboveForest1");
    })

    WA.room.onLeaveLayer('zoneForest').subscribe(() => {
        WA.room.hideLayer("Forest/overlayForest");

        WA.room.showLayer("Forest/AboveForest3");
        WA.room.showLayer("Forest/AboveForest2");
        WA.room.showLayer("Forest/AboveForest1");
    })

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

export {};
