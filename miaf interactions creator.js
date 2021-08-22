"use strict";

const axios = require("axios");
let apiUrl = "https://discord.com/api/v8";
let olustur = (this && this.olustur) || function (thisArg, _arguments, P, generator) {
    function secim(value) {
         return value instanceof P ? value : new P(function (evet) { evet(value); }); 
        }
    return new (P || (P = Promise))(function (evet, hayir) {
        function yeri(value) { 
            try { 
                mevcutAdim(generator.next(value)); 
            } catch (e) { 
                hayir(e); } 
            }
        function hataa(value) { 
            try { 
                mevcutAdim(generator["throw"](value)); 
            } catch (e) { 
                hayir(e); } 
            }
        function mevcutAdim(result) {
             result.done ? evet(result.value) : secim(result.value).then(yeri, hataa);
             }
        mevcutAdim((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

let miaf_Yapici = (this && this.miaf_Yapici) || function (thisArg, komutGovdesi) {
    var miafObject = { 
        miafTag: 0, 
        textGonder: function() { 
            if (key3[0] & 1) throw key3[1]; return key3[1]; 
        }, 
        tryVeCatchArray: [], 
        problemler: [] 
    }
    let key1, key2, key3, key4;
    return key4 = { 
        next: yapilandir(0),
        "throw": yapilandir(1), 
        "return": yapilandir(2) 
    }, 
    typeof Symbol === "function" && (key4[Symbol.iterator] = function() { 
        return this; 
    }), key4;
    function yapilandir(deger) { 
        return function (digeri) { 
            return olusturucuAdim([deger, digeri]); 
        }; 
    }
    function olusturucuAdim(komutlar) {
        if (key1) throw new TypeError("Generator/oluşturucu çalışıyor!");
        while (miafObject) 
        try {
            if (key1 = 1, key2 && (key3 = komutlar[0] & 2 ? key2["return"] : komutlar[0] ? key2["throw"] || ((key3 = key2["return"]) && key3.call(key2), 0) : key2.next) && !(key3 = key3.call(key2, komutlar[1])).done) return key3;
            if (key2 = 0, key3) komutlar = [komutlar[0] & 2, key3.value];
            switch (komutlar[0]) {
                case 0: case 1: key3 = komutlar; break;
                case 4: miafObject.miafTag++; return { value: komutlar[1], done: false };
                case 5: miafObject.miafTag++; key2 = komutlar[1]; komutlar = [0]; continue;
                case 7: komutlar = miafObject.problemler.pop(); miafObject.tryVeCatchArray.pop(); continue;
                default:
                    if (!(key3 = miafObject.tryVeCatchArray, key3 = key3.length > 0 && key3[key3.length - 1]) && (komutlar[0] === 6 || komutlar[0] === 2)) { 
                        miafObject = 0; continue; 
                    }
                    if (komutlar[0] === 3 && (!key3 || (komutlar[1] > key3[0] && komutlar[1] < key3[3]))) { 
                        miafObject.miafTag = komutlar[1]; break; 
                    }
                    if (komutlar[0] === 6 && miafObject.miafTag < key3[1]) { 
                        miafObject.miafTag = key3[1]; key3 = komutlar; break; 
                    }
                    if (key3 && miafObject.miafTag < key3[2]) { 
                        miafObject.miafTag = key3[2]; miafObject.problemler.push(komutlar); break; 
                    }
                    if (key3[2]) miafObject.problemler.pop();
                    miafObject.tryVeCatchArray.pop(); continue;
            }
            komutlar = komutGovdesi.call(thisArg, miafObject);
        } catch (e) { 
            komutlar = [6, e]; key2 = 0; 
        } finally { 
            key1 = key3 = 0; 
        }
        if (komutlar[0] & 5) throw komutlar[1]; return { 
            value: komutlar[0] ? komutlar[1] : void 0, done: true 
        };
    }
};

Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractionsClient = void 0;

const InteractionsClient = /** @class */ (function () {
    function InteractionsClient(token, clientID) {
        if (!token) {
            throw new Error("Tokenin yok kankss :/");
        }
        if (!clientID) {
            throw new Error("Client ID girmelisin kanks :/");
        }
        this.token = token;
        this.clientID = clientID;
    }
    InteractionsClient.prototype.komutCek = function (komutAyarlari) {
        return olustur(this, void 0, Promise, function () {
            let url, res;
            return miaf_Yapici(this, function (anahtarDegeri) {
                switch (anahtarDegeri.miafTag) {
                    case 0:
                        if (typeof komutAyarlari !== "object")
                            throw new Error("Ayarlar OBJE (object/nesne) türünde olmalı." + typeof komutAyarlari);
                        if (komutAyarlari.commandID && typeof komutAyarlari.commandID !== "string")
                            throw new Error("Komut ID'si bulundu ama değeri string değil! " +
                                typeof komutAyarlari.commandID);
                        if (komutAyarlari.guildID && typeof komutAyarlari.guildID !== "string")
                            throw new Error("Sunucu ID'si bulundu ancak değeri string değil!: " + typeof komutAyarlari.guildID);
                        url = komutAyarlari.guildID
                            ? apiUrl + "/applications/" + this.clientID + "/guilds/" + komutAyarlari.guildID + "/commands"
                            : apiUrl + "/applications/" + this.clientID + "/commands";
                        if (komutAyarlari.commandID)
                            url += "/" + komutAyarlari.commandID;
                        return [4 /*yield*/, 
                            axios.default.get(url, {
                                headers: { 
                                    Authorization: "Bot " + this.token 
                                },
                            }
                            )
                        ];
                    case 1:
                        res = anahtarDegeri.textGonder();
                        return [2 /*return*/, res.data];
                }
            });
        });
    };
    InteractionsClient.prototype.komutOlustur = function (komutAyarlari, guildID) {
        return olustur(this, void 0, Promise, function () {
            let url, res;
            return miaf_Yapici(this, function (yap) {
                switch (yap.miafTag) {
                    case 0:
                        if (typeof komutAyarlari !== "object")
                            throw new Error("Komut ayarları obje (object) olmalı!: " + typeof komutAyarlari);
                        if (!komutAyarlari.name || !komutAyarlari.description)
                            throw new Error("komutAyarlari kısmındaki name ve description kısımlarını boş bırakma!!");
                        url = guildID
                            ? apiUrl + "/applications/" + this.clientID + "/guilds/" + guildID + "/commands"
                            : apiUrl + "/applications/" + this.clientID + "/commands";
                        return [4 /*yield*/,
                             axios.default.post(url, komutAyarlari, {
                                headers: { 
                                    Authorization: "Bot " + this.token
                                 },
                            }
                            )
                        ];
                    case 1:
                        res = yap.textGonder();
                        return [2 /*return*/, res.data];
                }
            });
        });
    };
    InteractionsClient.prototype.komutSil = function (commandID, guildID) {
        return olustur(this, void 0, Promise, function () {
            let url, res;
            return miaf_Yapici(this, function (yap) {
                switch (yap.miafTag) {
                    case 0:
                        if (typeof commandID !== "string")
                            throw new Error("Komut ID'si string değeri olmalı Bulunan değer: " + typeof commandID);
                        url = guildID
                            ? apiUrl + "/applications/" + this.clientID + "/guilds/" + guildID + "/commands/" + commandID
                            : apiUrl + "/applications/" + this.clientID + "/commands/" + commandID;
                        return [4 /*yield*/, 
                            axios.default.delete(url, {

                                headers: { Authorization: "Bot " + this.token 
                            },
                            }
                            )
                        ];
                    case 1:
                        res = yap.textGonder();
                        return [2 /*return*/, res.data];
                }
            });
        });
    };
    InteractionsClient.prototype.komutYetkileri = function (guildID, commandID) {
        return olustur(this, void 0, Promise, function () {
            let url, res;
            return miaf_Yapici(this, function (yap) {
                switch (yap.miafTag) {
                    case 0:
                        if (typeof guildID !== "string")
                            throw new Error("Guild ID' string değeri olmalı. Bulunan değer: " + typeof guildID);
                        if (commandID && typeof commandID !== "string")
                            throw new Error("Komut ID'si string olmalı. Bulunan Değer: " + typeof commandID);
                        url = commandID
                            ? apiUrl + "/applications/" + this.clientID + "/guilds/" + guildID + "/commands/" + commandID + "/permissions"
                            : apiUrl + "/applications/" + this.clientID + "/guilds/" + guildID + "/commands/permissions";
                        return [4 /*yield*/, 
                            axios.default.get(url, {

                                headers: { Authorization: "Bot " + this.token 
                            },
                            })
                        ];
                    case 1:
                        res = yap.textGonder();
                        return [2 /*return*/, res.data];
                }
            });
        });
    };
    InteractionsClient.prototype.komutYetkileriGuncelle = function (permissions, guildID, commandID) {
        return olustur(this, void 0, Promise, function () {
            let url, res;
            return miaf_Yapici(this, function (yap) {
                switch (yap.miafTag) {
                    case 0:
                        if (!Array.isArray(permissions))
                            throw new Error("Permissions yani yetkiler array değeri olamlı. Bulunan değer: " + typeof permissions);
                        if (typeof guildID !== "string")
                            throw new Error("Guild ID string değeri olamlı. bulunan değer: " + typeof guildID);
                        if (typeof commandID !== "string")
                            throw new Error("Komut ID'si string değeri olmalı. bulunan değer: " + typeof commandID);
                        url = apiUrl + "/applications/" + this.clientID + "/guilds/" + guildID + "/commands/" + commandID + "/permissions";
                        return [4 /*yield*/, axios.default.put(url, { 
                            permissions: permissions }, {

                                headers: { Authorization: "Bot " + this.token
                             },
                            })
                        ];
                    case 1:
                        res = yap.textGonder();
                        return [2 /*return*/, res.data];
                }
            });
        });
    };
    return InteractionsClient;
}());
exports.InteractionsClient = InteractionsClient;
