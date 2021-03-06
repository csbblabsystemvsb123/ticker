export const formatNumber = (input) => {
    if (!input) {
        return;
    }
    let number = input;
    if (!isNaN(input)) {
        if(number.toString().includes('.')) {
            number = number.toFixed(2).toString();
        } else {
            number = number.toString();
        }
    }
    return number.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
