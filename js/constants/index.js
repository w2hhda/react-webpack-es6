import React from 'react'
import Number from '../template/Number.template'
import BannerTemplate from '../template/BannerTemplate'
import Convenience from '../template/Convenience.template'


/**
 * 获取模板
 * @param category
 * @returns {XML}
 */
export function template(category) {

    if (isNumberTemplate(category.categoryId)) {
        return <Number {...category} key={category.categoryId} />
    } else if (isConvenienceTemplate(category.categoryId)) {
        return <Convenience {...category} key={category.categoryId}/>
    }
    
}

/**
 * 判断模板类型
 * @param categoryId
 * @returns {boolean}
 */
function isNumberTemplate(categoryId) {
    return categoryId === 1;
}

/**
 * banner模板
 * @param categoryId
 * @returns {boolean}
 */
function isBannerTemplate(categoryId) {
    return categoryId === 109;
}

/**
 * 便捷服务
 * @param categoryId
 * @returns {boolean}
 */
function isConvenienceTemplate(categoryId) {
    return categoryId === 2;
}