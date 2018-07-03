monthOfYear = (month) => {
    switch(month) {
        case 0 : return "January"
            break;
        case 1: return "February"
            break;
        case 2 : return "March"
            break;
        case 3: return "April"
            break;
        case 4 : return "May"
            break;
        case 5: return "June"
            break;
        case 6 : return "July"
            break;
        case 7: return "August"
            break;
        case 8 : return "September"
            break;
        case 9: return "October"
            break;
        case 10 : return "November"
            break;
        case 12: return "December"
            break;
    }
}

module.exports = monthOfYear