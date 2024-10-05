self.addEventListener("install", (e) => {
    console.log("[INSTALLED SERVICE WORKER]");
});
let version = `1.5`;
const cacheName = 'Teardrop' + version;
let update = false;
caches.keys().then((keys)=>{
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        if (key != cacheName) {
            update = true;
            //console.log('UPDATE DETECTED');
            caches.delete(key);
        };
    };
});
caches.keys().then((keys)=>{
    //console.log(keys);
});
let path = "/play/";
let websitePath = "/";
const appShellFiles = [
    path+"index.html",
    path+"manifest.json",
    path+"bfdi/bfdi.js",
    path+"ease.js",
    path+"pixi.js",
    path+"pizzicato.js",
    path+"text.js",
    path+"Sprites/Load.png",
    //path+"Sprites/bg1024x1024.png",
];
function loadSpriteSheet(pathName, name, flashPath) {
    //console.log('./Sprites/' + pathName + '.json')
    appShellFiles.push(path+'Sprites/' + pathName + '.json')
    appShellFiles.push(path+'Sprites/' + pathName + '.png')
};
console.warn = function(){};
let itemsNeeded = 0;
function loadGroupSpriteSheet(pathNames, names, flashPath) { // only used for backgrounds for now..
    let order = {};
    for (let i = 0; i < pathNames.length; i++) {
        order[i] = [];
        itemsNeeded++;
        //console.log('./Sprites/' + pathNames[i] + '.json')
        appShellFiles.push(path+'Sprites/' + pathNames[i] + '.json')
    };
};
function loadImageSequence(pathName, count, flashPath) { // only used for backgrounds for now..
    let order = {};
    for (let i = 0; i < count; i++) {
        order[i] = 0;
        itemsNeeded++;
        let count2 = (i + 10001).toString().slice(1);
        if (count == 1) count2 = '';
        //console.log('./Sprites/' + pathNames[i] + '.json')
        appShellFiles.push(path+'Sprites/' + pathName + count2 + '.png')
    };
};
function loadFont(pathName) {
    appShellFiles.push(path+'Fonts/' + pathName + '.fnt')
    appShellFiles.push(path+'Fonts/' + pathName + '.png')
};
//let intromation = 
function loadAnimation(pathName, animationName) {
    appShellFiles.push(path+'Animations/' + pathName + '.json')
};
function loadAudio(pathName, audioName) {
    //return;
    //itemsNeeded++;
    
    appShellFiles.push(path+'Audio/' + pathName + '.mp3')
    //audio[audioName].play = function(){};
    //audio[audioName].sourceNode = {};
    /*PIXI.Assets.load('./Audio/' + pathName + '.mp3').then((e) => {
        //console.log(e)
        audio[audioName] = e;
        loader("AUDIO", pathName);
    })*/
};
function loadLevel(pathName, event) {
    //itemsNeeded++;
    appShellFiles.push(path+'Levels/' + pathName + '.json');
};
let fontLanguage = "";
let qualityPath = "";
loadFont("MenuShag" + fontLanguage);
loadFont("arial");
loadFont("ShagBlueNumber");
loadFont("ShagBlack" + fontLanguage);
loadFont("IndieFlower");
loadAnimation("Teardrop", "Teardrop");
loadAnimation("oil/Teardrop.TeardropBody", "oilTeardropBody");
loadAnimation("oil/TeardropTired.TeardropBody", "oilTeardropTiredBody");
loadAnimation("healthLose", "healthLose");
loadAnimation("loading", "loading");
loadAnimation('bfb', 'bfb');
loadAnimation("TeardropTired", "TeardropTired");
loadAnimation("tearDropWatch", "tearDropWatch");
loadAnimation("tearDropLevelUp", "tearDropLevelUp");
loadAnimation("faceMinigame", "faceMinigame");
loadAnimation("oddDroplets", "oddDroplets");
loadAnimation("tearDropTennis", "tearDropTennis");

loadAnimation("GTTTATINT", "GTTTATINT");
loadAnimation("GTTTATINTLOSE", "GTTTATINTLOSE");

loadAnimation("Box", "Box");
loadAnimation("SkewMatrix", "SkewMatrix");
/*loadAnimation("ShrubIntro", "ShrubIntro");
loadAnimation("Characters/Leafy", "Leafy");
loadAnimation("Characters/Coiny", "Coiny");
loadAnimation("Characters/Pin", "Pin");
loadAnimation("Characters/Spongy", "Spongy");
loadAnimation("Characters/Rocky", "Rocky");
loadAnimation("Characters/Ice Cube", "Ice Cube");*/
loadSpriteSheet(qualityPath + "GameThumbnails", "GameThumbnails", "Sprites/GameThumbnails");
loadSpriteSheet("tennisBall", "tennisBall", "Sprites/tennisBall");
loadSpriteSheet("BGLayer", "BGLayer", "BGLayer");
//loadSpriteSheet("Rooms", "Rooms", "Sprites/Rooms");
//loadSpriteSheet("2Rooms", "2Rooms", "Sprites/Rooms");
loadImageSequence(qualityPath + "Rooms/Rooms", 21, "Sprites/Rooms");
loadImageSequence("Logo", 1, "Logo");
loadSpriteSheet(qualityPath + "Food", "Food", "Sprites/Food");
loadSpriteSheet("Empty", "Empty", "Sprites/Empty");
loadAudio("wave", "wave", 1);
loadAudio("yeah", "yeah");
//loadAudio("15countdown", "countdown");
//loadAudio("clouddancer", "clouddancer");
//loadAudio("faceMatchScores", "faceMatchScores");
loadAudio("brittlerille", "brittlerille");
//loadAudio("Pamgaea", "Pamgaea");
loadAudio("LevelUp", "levelup");
loadAudio("Achievement", "achievement");
loadAudio("switchoff", "switchoff", 1);
loadAudio("switchon", "switchon", 1);
loadAudio("purchase", "purchase", 1);
loadAudio("fail", "fail", 1);
loadAudio("coinlarge", "coinlarge", 1);
loadAudio("coinmedium", "coinmedium", 1);
loadAudio("coinsmall", "coinsmall", 1);
//loadAudio("Radio Martini", "radiomartini");
//loadAudio("Shiny Tech", "shinytech");
loadAudio("consume", "consume", 1);
loadAudio("slap1", "slap1", 1);
loadAudio("slap2", "slap2", 1);
loadAudio("slap3", "slap3", 1);
loadAudio("slap4", "slap4", 1);
loadAudio("collect", "collect", 1);
//loadSpriteSheet("Bodies", "Bodies", "Sprites/Bodies");
// load oldies (these are 2010 bfdi assets, not 2008);
loadSpriteSheet("Oldies/Bodies/1", "Bodies", "oldiesCostume/Bodies");
loadSpriteSheet("Oldies/Mouths", "Mouth", "oldiesCostume/Mouth");
loadSpriteSheet("Oldies/Limbs", "Limbs", "oldiesCostume/Limbs");
loadSpriteSheet("Oldies/Eyes", "Eyes", "oldiesCostume/Eyes");

loadSpriteSheet(qualityPath + "Bodies/1", "Bodies", "Sprites/Bodies");
loadSpriteSheet(qualityPath + "Outline/BodiesOUTLINE12", "BodiesOUTLINE12", "Sprites/BodiesOUTLINE12");
loadSpriteSheet(qualityPath + "Bodies/BodiesCostume_1", "BodiesCostume_1", "Sprites/BodiesCostume_1");
/*loadSpriteSheet("Bodies/BodiesCostume1", "BodiesCostume1", "Sprites/BodiesCostume1");
loadSpriteSheet("Bodies/BodiesCostume1Tennis", "BodiesCostume1Tennis", "Sprites/BodiesCostume1Tennis");
/*loadSpriteSheet("Bodies/BodiesCostume2", "BodiesCostume2", "Sprites/BodiesCostume2");
loadSpriteSheet("Bodies/BodiesCostume4", "BodiesCostume4", "Sprites/BodiesCostume4");
loadSpriteSheet("Bodies/BodiesCostume5", "BodiesCostume5", "Sprites/BodiesCostume5");
loadSpriteSheet("Bodies/BodiesCostume6", "BodiesCostume6", "Sprites/BodiesCostume6");
loadSpriteSheet("Bodies/BodiesCostume7", "BodiesCostume7", "Sprites/BodiesCostume7");
loadSpriteSheet("Bodies/BodiesCostume9", "BodiesCostume9", "Sprites/BodiesCostume9");*/
loadSpriteSheet("MouthsCostume10", "MouthsCostume10", "Sprites/MouthsCostume10");
loadSpriteSheet("MouthsCostume21", "MouthsCostume21", "Sprites/MouthsCostume21");
loadSpriteSheet("MouthsCostume25", "MouthsCostume25", "Sprites/MouthsCostume25");
loadSpriteSheet("EyesCostume25", "EyesCostume25", "Sprites/EyesCostume25");
loadSpriteSheet("LimbsCostume17", "LimbsCostume17", "Sprites/LimbsCostume17");
loadSpriteSheet("LimbsCostume21", "LimbsCostume21", "Sprites/LimbsCostume21");
/*loadSpriteSheet("Bodies/BodiesCostume10", "BodiesCostume10", "Sprites/BodiesCostume10");
loadSpriteSheet("Bodies/BodiesCostume11", "BodiesCostume11", "Sprites/BodiesCostume11");
loadSpriteSheet("Bodies/BodiesCostume12", "BodiesCostume12", "Sprites/BodiesCostume12");
loadSpriteSheet("Bodies/BodiesCostume13", "BodiesCostume13", "Sprites/BodiesCostume13");
loadSpriteSheet("Bodies/BodiesCostume14", "BodiesCostume14", "Sprites/BodiesCostume14");
loadSpriteSheet("Bodies/BodiesCostume15", "BodiesCostume15", "Sprites/BodiesCostume15");
loadSpriteSheet("Bodies/BodiesCostume16", "BodiesCostume16", "Sprites/BodiesCostume16");
loadSpriteSheet("Bodies/BodiesCostume17", "BodiesCostume17", "Sprites/BodiesCostume17");
loadSpriteSheet("Bodies/BodiesCostume18", "BodiesCostume18", "Sprites/BodiesCostume18");
loadSpriteSheet("Bodies/BodiesCostume19", "BodiesCostume19", "Sprites/BodiesCostume19");
loadSpriteSheet("Bodies/BodiesCostume18mini", "BodiesCostume18mini", "Sprites/BodiesCostume18mini");
loadSpriteSheet("Bodies/BodiesCostume19mini", "BodiesCostume19mini", "Sprites/BodiesCostume19mini");
loadSpriteSheet("Bodies/BodiesCostume20", "BodiesCostume20", "Sprites/BodiesCostume20");*/
loadSpriteSheet("Bodies/BodiesCostume21", "BodiesCostume21", "Sprites/BodiesCostume21");
loadSpriteSheet(qualityPath + "Mouths", "Mouth", "Sprites/Mouth");
//loadSpriteSheet("BG_toobigbasic", "BG_toobigbasic", "_bg_stuff/BG_toobigbasic");
loadSpriteSheet(qualityPath + "Limbs", "Limbs", "Sprites/Limbs");
loadSpriteSheet(qualityPath + "Outline/LimbsOUTLINE12", "LimbsOUTLINE12", "Sprites/LimbsOUTLINE12");
loadSpriteSheet("LimbsCostume1", "LimbsCostume1", "Sprites/LimbsCostume1");
//loadSpriteSheet("contestantIcons", "contestantIcons", "contestantIcons");
loadSpriteSheet(qualityPath + "Eyes", "Eyes", "Sprites/Eyes");
loadSpriteSheet(qualityPath + "Outline/EyesOUTLINE12", "EyesOUTLINE12", "Sprites/EyesOUTLINE12");
loadSpriteSheet("EyesCostume21", "EyesCostume21", "Sprites/EyesCostume21");
loadSpriteSheet("CakeSlicePlane", "CakeSlicePlane", "Sprites/CakeSlicePlane");
loadSpriteSheet("Clouds", "Clouds", "Sprites/Clouds");
loadSpriteSheet(qualityPath + "Poses", "Poses", "Sprites/Poses");
//loadSpriteSheet("Flame", "FireyFlame", "FireyFlame");
loadSpriteSheet("Blur", "Blur", "Sprites/Blur");
loadSpriteSheet("Box", "Box", "Sprites/Box");
loadSpriteSheet(qualityPath + "GameUI", "GameUI", "Sprites/GameUI");
//loadSpriteSheet("shp", "shp", "shp");
//loadSpriteSheet("UI", "UI", "UI");
//loadSpriteSheet("Background", "Background", "Background");
loadSpriteSheet("Placeholders", "Placeholders", "Sprites/Placeholders");
//loadSpriteSheet("Grass", "Grass", "Backgrounds/Grass");
loadSpriteSheet("Starfield", "Starfield", "Backgrounds/Starfield");
//loadSpriteSheet("Objects", "Objects", "Sprites/Objects");
loadSpriteSheet("RepeatingUI", "RepeatingUI", "Sprites/RepeatingUI");
loadSpriteSheet(qualityPath + "inputNineSlice", "inputNineSlice", "inputNineSlice");

//console.log(appShellFiles)
self.addEventListener("install", (e) => {
    e.waitUntil(
        (async () => {
            const cache = await caches.open(cacheName);
            console.log("[SERVICE WORKER]: Installing myTeardrop");
            //console.log(appShellFiles)
            //await cache.addAll(appShellFiles);
        })(),
    );
});
self.addEventListener("fetch", (e) => {
    e.respondWith(
        (async ()=>{
            const r = await caches.match(e.request);
            //console.log(`[SERVICE WORKER]: Fetching resource ` + e.request.url);
            if (r) {
                return r;
            };
            const response = await fetch(e.request);
            const cache = await caches.open(cacheName);
            //console.log(`[SERVICE WORKER] Caching new resource: ` + e.request.url);
            cache.put(e.request, response.clone());
            return response;
        })(),
    );
});
/*self.addEventListener("activate", (e) => {
    e.waitUntil(
        caches.keys().then((keyList)=>{
            console.log(keyList);
            return Promise.all(
                keyList.map((key)=>{
                    if (key === cacheName) {
                        return;
                    }
                    return caches.delete(key);
                })
            )
        })
    )
});*/