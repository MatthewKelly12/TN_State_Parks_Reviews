const $ = require("jquery");

stars = (rating) => {
    let oneStar = `
                <span class="fa fa-star checked"></span>`
    let twoStar = `
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>`
    let threeStar = `
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>`
    let fourStar = `
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>`
    let fiveStar = `
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>`
    switch(rating) {
        case 1 : return oneStar
            break;
        case 2 : return twoStar
            break;
        case 3 : return threeStar
            break;
        case 4 : return fourStar
            break;
        case 5 : return fiveStar
            break;
    }
}

module.exports = stars