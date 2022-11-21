/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');

    WA.room.onEnterLayer('zoneCastle').subscribe(() => {
        WA.room.showLayer("Castle/overlayCastle");

        WA.room.hideLayer("Castle/AboveCastle3");
        WA.room.hideLayer("Castle/AboveCastle2");
        WA.room.hideLayer("Castle/AboveCastle1");
    })

    WA.room.onLeaveLayer('zoneCastle').subscribe(() => {
        WA.room.hideLayer("Castle/overlayCastle");

        WA.room.showLayer("Castle/AboveCastle3");
        WA.room.showLayer("Castle/AboveCastle2");
        WA.room.showLayer("Castle/AboveCastle1");
    })

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

export {};
