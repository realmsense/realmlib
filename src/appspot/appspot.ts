import { AccountListType, StaticDataType } from ".";

export namespace Appspot {

    export enum Host {
        Production = "https://www.realmofthemadgod.com",    // https://realmofthemadgod.appspot.com
        Testing    = "https://rotmgtesting.appspot.com",
        Testing2   = "https://realmtesting2.appspot.com",
        Testing3   = "https://rotmgtesting3.appspot.com",
        Testing4   = "https://rotmgtesting4.appspot.com",
        Testing5   = "https://rotmgtesting5.appspot.com"
    }

    export type Path = {

        "/account/getOwnedPetSkins": {
            accessToken: string;
        },

        "/account/list": {
            type: AccountListType;
            accessToken: string;
        },

        "/account/listPowerUpStats": {
            accessToken: string;
        },

        "/account/servers": {
            accessToken: string
        } | {
            guid    : string;
            password: string;
        },

        "/account/verify": {
            guid: string;
            password: string;
            clientToken: string;
        },

        "/account/verifyAccessTokenClient": {
            clientToken: string,
            accessToken: string
        }

        "/app/getLanguageStrings": {
            languageType: "en"
        },

        "/app/init": {
            key: string;
            platform: string;
        },


        "/app/publicStaticData": {
            dataType: StaticDataType;
            version: number;
            accessToken: string;
        },

        "/char/list": {
            do_login: boolean,
            accessToken: string
        },

        "/dailyLogin/fetchCalendar": {
            accessToken: string;
        },

        "/dungeonEvents/getClientEvents": {
            accessToken: string;
        },

        "/friends/getRequests": {
            targetName: string;
            accessToken: string;
        },

        "/serverStatus/getServerStatus": {
            accessToken: string;
        },

        "/shop/deals": {
            language: "en";
            version: number;
            accessToken: string;
        },

        "/supportCampaign/status": {
            accessToken: string;
        },

        "/unityNews/getNews": {
            accessToken: string
        },
    }
}