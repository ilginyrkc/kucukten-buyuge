function siralaKucuktenBuyuge(dizi) {
    return dizi.sort((a, b) => a - b);
}
const sayilar = [34, 7, 23, 32, 5, 62];
const siraliSayilar = siralaKucuktenBuyuge(sayilar);
console.log("Sıralı dizi:", siraliSayilar);
