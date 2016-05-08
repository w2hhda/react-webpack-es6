

/**
 * 判断模板类型
 * @param categoryId
 * @returns {boolean}
 */
export default function isNumberTemplate(categoryId) {
    return categoryId === 1;
}

/**
 * banner模板
 * @param categoryId
 * @returns {boolean}
 */
export default function isBannerTemplate(categoryId) {
    return categoryId === 109;
}

/**
 * 便捷服务
 * @param categoryId
 * @returns {boolean}
 */
export default function isConvenienceTemplate(categoryId) {
    return categoryId === 2;
}