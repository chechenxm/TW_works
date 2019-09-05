//获取全部的商品
function loadAllItems() {
    return [{
            barcode: 'ITEM000000',
            name: '可口可乐',
            unit: '瓶',
            price: 3.00
        },
        {
            barcode: 'ITEM000001',
            name: '雪碧',
            unit: '瓶',
            price: 3.00
        },
        {
            barcode: 'ITEM000002',
            name: '苹果',
            unit: '斤',
            price: 5.50
        },
        {
            barcode: 'ITEM000003',
            name: '荔枝',
            unit: '斤',
            price: 15.00
        },
        {
            barcode: 'ITEM000004',
            name: '电池',
            unit: '个',
            price: 2.00
        },
        {
            barcode: 'ITEM000005',
            name: '方便面',
            unit: '袋',
            price: 4.50
        }
    ];
}


//获取促销信息
function loadPromotions() {
    return [{
        type: 'BUY_TWO_GET_ONE_FREE',
        barcodes: [
            'ITEM000000',
            'ITEM000001',
            'ITEM000005'
        ]
    }];
}


//将形如ITEM000003-2的输入格式转换为单个商品数组
function changeBarcode(str) {
    let strArr = [];
    let len = str.charAt(str.length - 1);
    len = Number(len);
    for (var i = 0; i < len; i++) {
        strArr.push(str.substr(0, str.length - 2));
    }
    return strArr;
}


//将输入的商品条码转变成单个元素数组，去掉“-”后面的数字。
function inputGoodsListArr(arr) {
    let resultArr = [];
    arr.forEach(function(item, index, array) {
        if (item.substr(item.length - 2, 1) === "-") {
            changeBarcode(item);
            changeBarcode(item).forEach(function(item, index, array) {
                resultArr.push(item);
            });
        }
        resultArr.push(item);
    });
    return resultArr;
}


//根据条形码返回相应包含商品对象的数组
function outputGoodsList(arr) {
    let outputGoodsList = [];
    inputGoodsListArr(arr).forEach(function(item, index, array) {
        for (var i = 0; i < loadAllItems().length; i++) {
            if (item === loadAllItems()[i].barcode) {
                outputGoodsList.push(loadAllItems()[i]);
            }
        }
    });
    return outputGoodsList;
}


//将商品归类形成对象数组
function classifyGoodsList(arr) {
    let resultArr = [];
    let lastResultArr = [];
    let nameArr = [];
    let promotion = loadPromotions()[0].barcodes;
    let temp = arr[0].name;
    nameArr.push(temp);
    arr.forEach(function(item, index, array) {
        if (temp != item.name) {
            temp = item.name;
            nameArr.push(temp);
        }
    });
    for (var i = 0; i < nameArr.length; i++) {
        let filterName = arr.filter(function(item, index, array) {
            return (item.name === nameArr[i]);
        });
        resultArr.push({
            barcode: filterName[0].barcode,
            name: filterName[0].name,
            count: filterName.length,
            unit: filterName[0].unit,
            price: filterName[0].price,
            subtotal: filterName[0].price * filterName.length
        });
    }
// 处理优惠的商品
    resultArr.forEach(function(item, index, array) {
        for (var i = 0; i < promotion.length; i++) {
            if (item.barcode === promotion[i]) {
                item.subtotal -= item.price;
            }
        }
    });
    return resultArr;
}

//列出优惠商品形成对象数组
function promotionGoodList(arr) {
    let resultArr = [];
    let promotion = loadPromotions()[0].barcodes;
    for (var i = 0; i < promotion.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if ((promotion[i] === arr[j].barcode) && (arr[j].count >= 2)) {
                resultArr.push({
                    name: arr[j].name,
                    count: 1,
                    unit: arr[j].unit,
                    price: arr[j].price
                });
            }
        }
    }
    return resultArr;
}


//列出总计，节省形成对象数组
function calculateAmount(arr) {
    let resultArr = [];
    let subtotalArr = [];
    let promotionTotalArr = [];
    arr.forEach(function(item, index, array) {
        subtotalArr.push(item.subtotal);
    });
    let total = subtotalArr.reduce(function(prev, cur, index, array) {
        return prev + cur;
    });
    promotionGoodList(arr).forEach(function(item, index, array) {
        promotionTotalArr.push(item.price);
    });
    let promotionTotal = promotionTotalArr.reduce(function(prev, cur, index, array) {
        return prev + cur;
    });
    resultArr.push({
        total: total,
        promotionTotal: promotionTotal
    });
    return resultArr;
}

//强制保留两位小数的方法，单价，小计，总计，节省的数据输出需要,输出类型为字符串
function toDecimal2(num) {
    let floatNum = parseFloat(num);
    if (isNaN(floatNum)) {
        return false;
    }
    floatNum = Math.round(num * 100) / 100;
    let str = floatNum.toString();
    let resultStr = str.indexOf('.');
    if (resultStr < 0) {
        resultStr = str.length;
        str += '.';
    }
    while (str.length <= resultStr + 2) {
        str += '0';
    }
    return str;
}

// 对象变成变成标准字符串的方法
function objToStr(obj) {
    let str = JSON.stringify(obj);
    str = str.substring(1, str.length - 1);
    str = str.replace(/\"/g, "");
    str = str.replace(/\:/g,"：");
    str = str.replace(/\,/g,"，")
    return str + "\n";
}

// 输出购物清单字符串
function classifyGoodsStr(arr) {
    let outputArr = outputGoodsList(arr);
    let classifyArr = classifyGoodsList(outputArr);
    let classifyStr = [];
    classifyArr.forEach(function(item, indx, array) {
        classifyStr.push({
            名称: item.name,
            数量: item.count + item.unit,
            单价: toDecimal2(item.price) + "(元)",
            小计: toDecimal2(item.subtotal) + "(元)"
        });
    });
    let classifyStrResult = classifyStr.map(function(item, index, array) {
        return objToStr(item);
    });
    return classifyStrResult.join("");
}

//输出赠送商品字符串
function promotionGoodsStr(arr) {
    let outputArr = outputGoodsList(arr);
    let classifyArr = classifyGoodsList(outputArr);
    let promotionArr = promotionGoodList(classifyArr);
    let promotionStr = [];
    promotionArr.forEach(function(item, index, array) {
        promotionStr.push({
            名称: item.name,
            数量: item.count + item.unit,
        })
    });
    let promotionStrResult = promotionStr.map(function(item, index, array) {
        return objToStr(item);
    });
    return promotionStrResult.join("");
}

// 输出统计字符串
function calculateAmountStr(arr) {
    let outputArr = outputGoodsList(arr);
    let classifyArr = classifyGoodsList(outputArr);
    let promotionArr = promotionGoodList(classifyArr);
    let calculateArr = calculateAmount(classifyArr);
    let calculateStr = [];
    calculateArr.forEach(function(item, index, array) {
        calculateStr.push({
            总计: toDecimal2(item.total) + "(元)"
        });
        calculateStr.push({
            节省: toDecimal2(item.promotionTotal) + "(元)"
        })
    });
    let calculateStrResult = calculateStr.map(function(item, index, array) {
        return objToStr(item);
    });
    return calculateStrResult.join("");

}


// 总输出
module.exports = function printInventory(arr) {
    let str = 
        '***<没钱赚商店>购物清单***\n' +
            classifyGoodsStr(arr) +
            '----------------------\n' +
            '挥泪赠送商品：\n' +
            promotionGoodsStr(arr) +
            '----------------------\n' +
            calculateAmountStr(arr) +
            '**********************';
    console.log(str);
    return str;
}
