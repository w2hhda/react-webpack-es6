/**
 * weight倒序
 * @param arr
 * @returns {*|Array.<T>}
 */
export function reverseByWeight(arr) {
    return reverse({
      arr : arr,
      key : 'weight'
    })
}

/**
 * 通过key来排序，倒序
 * @param opt
 * @returns {*|Array.<T>}
 */
export function reverse(opt) {
    var arr = opt.arr,
        key = opt.key;
    if(key){//数组里面的元素是对象
        arr.sort(function(a, b){
            return b[key] - a[key];
        });
    }else{//普通数组
        return arr.reverse();
    }
}

/**
 * flex 布局order
 * @param order
 * @returns {{order: *}}
 */
export function orderStyle(order) {
    return {
        order : order
    }
}