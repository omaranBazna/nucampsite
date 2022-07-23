import {PROMOTIONS} form '../../app/shared/PROMOTIONS';

export const selectFeuturedPromotion=()=>{
    return PROMOTIONS.find(pro=>pro.featured)
}