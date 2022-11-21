/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');


// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');

    WA.room.onEnterLayer('zoneDesert').subscribe(() => {
        WA.room.showLayer("Desert/overlayDesert");

        WA.room.hideLayer("Desert/AboveDesert3");
        WA.room.hideLayer("Desert/AboveDesert2");
        WA.room.hideLayer("Desert/AboveDesert1");
    })

    WA.room.onLeaveLayer('zoneDesert').subscribe(() => {
        WA.room.hideLayer("Desert/overlayDesert");

        WA.room.showLayer("Desert/AboveDesert3");
        WA.room.showLayer("Desert/AboveDesert2");
        WA.room.showLayer("Desert/AboveDesert1");
    })

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

export {};
