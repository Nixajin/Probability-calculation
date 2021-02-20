// 艦娘データ
const fleet = {
    Ise: {
	name: '伊勢改',
	flack: 45,
	rflack: 92,
	luck:30,
	rluck:79 
    },
    Ise2: {
        name: '伊勢改二',
        flack: 48,
        rflack: 85,
	luck: 40,
	rluck: 92
    },
    Hyuga: {
	name: '日向改',
	flack: 45,
	rflack: 92,
	luck: 30,
	rluck: 79
    },
    Hyuga2: {
        name: '日向改二',
        flack: 46,
	rflack: 84,
	luck: 40,
	rluck: 93,
    },
    
}

let inputShip = undefined;

$('#name,#f').on('input click', function () {
    // 入力された艦娘情報の取得
    getShipInfo();

    if (inputShip === undefined) {
        return;
    }

    // 対空に値セット
    setAir();

    setLuck();

    console.log($('#name').val());

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
    }
}

function setLuck() {
   $('#luck').val(inputShip.luck);
   if ($('#f').prop('checked')) {
	$('#luck').val(inputShip.rluck);
   }
}
