function format(number,options) {
    let formatted = ""
    console.log(options.numberFormat.type)
    switch (options.numberFormat.type) {
        case "fix":
            formatted = number.toFixed(+options.numberFormat.cutDecimals)
            break;
        case "sci":
            formatted = number.toExponential(+options.numberFormat.cutDecimals)
            break;
        case "norm":
            formatted = String(number)
            break;
    }
    return formatted
}