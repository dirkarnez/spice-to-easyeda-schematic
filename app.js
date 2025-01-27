export default () => {
    const EDITOR_VERSION = "6.5.48"
    
    return {
        editorVersion: EDITOR_VERSION,
        docType: 5,
        schematics: [
          {
            docType: 1,
            dataStr: {
              head: {
                docType: 1,
                editorVersion: EDITOR_VERSION
                // "newgId": true,
                // "c_para": {
                //   "Prefix Start": "1"
                // },
                // "c_spiceCmd": "null",
                // "x": "0",
                // "y": "0",
                // "portOfADImportHack": "",
                // "importFlag": 0,
                // "transformList": "",
                // "hasIdFlag": true
              },
              canvas: "CA~1000~1000~#FFFFFF~yes~#CCCCCC~5~1000~1000~line~5~pixel~5~0~0",
              shape: [ ],
              BBox: {
                x: 0,
                y: -800,
                width: 1200,
                height: 800
              }
            }
          }
        ]
      }
}
/*
"LIB~430~-525~package`R0603`nameAlias`Value(Ω)`Supplier Part``Supplier``Contributor`LCEDA_Lib`spicePre`R`spiceSymbolName`R_0603_US`Manufacturer Part``~~0~gge191278dca0817c95~398691f1f785460098bbe5ee6590333c~b0248eb51e084227889f2cb84eab79c4~0~~yes~yes~~1586861892~#@$T~N~423.55~-533~0~#000080~Arial~~~~~comment~1k~1~start~gge226~0~#@$T~P~423.55~-542.46~0~#000080~Arial~~~~~comment~R1~1~start~gge235~0~#@$PL~445 -525 442 -520~#A00000~1~0~none~gge241~0#@$PL~437 -530 432 -520~#A00000~1~0~none~gge244~0#@$PL~442 -520 437 -530~#A00000~1~0~none~gge247~0#@$P~show~0~2~450~-525~0~gge250~0^^450~-525^^M 450 -525 h -5~#800^^0~441~-525~0~2~end~~~#800^^0~449~-529~0~2~start~~~#800^^0~448~-525^^0~M 445 -528 L 442 -525 L 445 -522#@$PL~423 -520 418 -530~#A00000~1~0~none~gge271~0#@$PL~432 -520 428 -530~#A00000~1~0~none~gge274~0#@$PL~428 -530 423 -520~#A00000~1~0~none~gge277~0#@$PL~418 -530 415 -525~#A00000~1~0~none~gge280~0#@$P~show~0~1~410~-525~180~gge283~0^^410~-525^^M 410 -525 h 5~#800^^0~419~-525~0~1~start~~~#800^^0~411~-529~0~1~end~~~#800^^0~412~-525^^0~M 415 -522 L 418 -525 L 415 -528",
"F~part_netLabel_VCC~400~-595~0~gge385~~0^^400~-595^^VCC~#000000~388~-607~0~start~1~Times New Roman~9pt~flag_gge25^^PL~400 -605 400 -595~#000000~1~0~transparent~gge397~0^^PL~395 -605 405 -605~#000000~1~0~transparent~gge400~0",
"F~part_netLabel_gnD~485~-465~0~gge421~~0^^485~-465^^GND~#000000~472~-439~0~start~1~Times New Roman~9pt~flag_gge28^^PL~485 -455 485 -465~#000000~1~0~transparent~gge433~0^^PL~476 -455 494 -455~#000000~1~0~transparent~gge436~0^^PL~479 -453 491 -453~#000000~1~0~transparent~gge439~0^^PL~482 -451 488 -451~#000000~1~0~transparent~gge442~0^^PL~484 -449 486 -449~#000000~1~0~transparent~gge445~0",
"W~400 -595 400 -525 410 -525~#008800~1~0~none~gge475~0",
"W~450 -525 485 -525 485 -465~#008800~1~0~none~gge478~0"
*/