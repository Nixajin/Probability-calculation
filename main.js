// 艦娘データ
const fleet = {
    Ise: {
	name: '伊勢改', flack: 45, rflack: 92, luck: 30, rluck: 79 
         },
    Ise2: {
        name: '伊勢改二', flack: 48, rflack: 85, luck: 40, rluck: 92
          },
    Hyuga: {
	name: '日向改',	flack: 45, rflack: 92, luck: 30, rluck: 79
           },
    Hyuga2: {
        name: '日向改二', flack: 46, rflack: 84, luck: 40, rluck: 93,
            },
    Huso: {
        name: '扶桑改', flack: 40, rflack: 89, luck: 10, rluck: 59,
          },
    Huso2: {
        name: '扶桑改二', flack: 44, rflack: 88, luck: 13, rluck: 69,
           },
    Yamashiro: {
        name: '山城改', flack: 40, rflack: 89, luck: 10, rluck: 59,
               },
    Yamashiro2: {
        name: '山城改二', flack: 43, rflack: 87, luck: 14, rluck: 70,
                },
    Akagi: {
        name: '赤城', flack: 32, rflack: 69, luck: 12, rluck: 49,
           },
    Akagi1: {
        name: '赤城改', flack: 41, rflack: 79, luck: 12, rluck: 60,
            },
    Akagi2: {
        name: '赤城改二', flack: 40, rflack: 85, luck: 20, rluck: 77,
            },
    Akagi3: {
        name: '赤城改二戊', flack: 40, rflack: 84, luck: 20, rluck: 77,
            },
    Kaga: {
        name: '加賀', flack: 28, rflack: 69, luck: 10, rluck: 49,
          },
    Kaga1: {
        name: '加賀改', flack: 30, rflack: 79, luck: 12, rluck: 60,
           },
    Kaga2: {
        name: '加賀改二', flack: 36, rflack: 84, luck: 18, rluck: 74,
           },
    Kaga3: {
        name: '加賀改二戊', flack: 36, rflack: 84, luck: 18, rluck: 74,
           },
    Kaga4: {
        name: '加賀改二護', flack: 40, rflack: 84, luck: 18, rluck: 74,
           },
    Soryu: {
	name: '蒼龍', flack: 26, rflack: 69, luck: 10, rluck: 49,
           },
    Soryu2: {
	name: '蒼龍改', flack: 30, rflack: 79, luck: 12, rluck: 59,
            },
    Soryu3: {
	name: '蒼龍改二', flack: 34, rflack: 84, luck: 15, rluck: 60,
            },
    Hiryu: {
	name: '飛龍', flack: 26, rflack: 69, luck: 35, rluck: 89,
           },
    Hiryu2: {
	name: '飛龍改',	flack: 30, rflack: 79, luck: 40, rluck: 89,
            },
    Hiryu3: {
	name: '飛龍改二', flack: 33, rflack: 82, luck: 50, rluck: 93,
            },
    Syokaku: {
	name: '翔鶴', flack: 29, rflack: 69, luck: 10, rluck: 49,
	    },
    Syokaku2: {
	name: '翔鶴改', flack: 40, rflack: 79, luck: 12, rluck: 89,
              },
    Syokaku3: {
	name: '翔鶴改二', flack: 48, rflack: 88, luck: 20, rluck: 97,
	      },
    Syokaku4: {
	name: '翔鶴改二甲', flack: 48, rflack: 88, luck: 20, rluck: 97,
	      },
    Zuikaku: {
	name: '瑞鶴', flack: 29, rflack: 69, luck: 40, rluck: 89,
	     },
    Zuikaku2: {
	name: '瑞鶴改', flack: 40, rflack: 79, luck: 42, rluck: 89,
	      },
    Zuikaku3: {
	name: '瑞鶴改二', flack: 54, rflack: 90, luck: 50, rluck: 99,
	      },
    Zuikaku4: {
	name: '瑞鶴改二甲', flack: 54, rflack: 90, luck: 50, rluck: 99,
	      },

}

let inputShip = undefined;

$('#name,#f,#f2').on('input click click', function () {
    // 入力された艦娘情報の取得
    getShipInfo();

    if (inputShip === undefined) {
        return;
    }

    // 対空に値セット
    setAir();

    setLuck();

    console.log($('#name').val());
    console.log($('#flack').val());
    console.log($('#luck').val());

});

// 入力された艦娘名からデータ取得判断
function getShipInfo() {
    const name = $('#name').val();
    for (const ship in fleet) {
        if (fleet[ship].name === name) {
            inputShip = fleet[ship];
            return;
        }
    }
    inputShip = undefined;
}

function setAir() {
    $('#flack').val(inputShip.flack);
    if ($('#f').prop('checked')) {
        $('#flack').val(inputShip.rflack);
	$('#flack').attr('readonly',true);
    }
    else{
	$('#flack').attr('readonly',false);
    }
}

function setLuck() {
   $('#luck').val(inputShip.luck);
   if ($('#f2').prop('checked')) {
	$('#luck').val(inputShip.rluck);
	$('#luck').attr('readonly',true);
   }
   else{
       $('#luck').attr('readonly',false);
   }
}
