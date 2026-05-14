const agaclar = [
    {
        ad: "Mazı (Thuja)",
        bilgi: "Piramit Mazı veya Sütun Mazı olarakta bilinir. Yaklaşık 4-5 metre uzunluğa sahiptir. 12 ile 18 yaş arasındadır. Diğer çam türleri gibi iğne yapraklı değildir daha çok pul yapraklıdır. Rüzgara,soğuğa ve şehir kirliliğine karşı çok dirençlidir. ",
        resim: "images/agac2.jpg"
    },
];

function getId() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get("id")) || 1;
}

function agaciGoster(id) {
    const agac = agaclar[id - 1];
    document.getElementById("agacAdi").innerText = agac.ad;
    document.getElementById("agacBilgi").innerText = agac.bilgi;
    document.getElementById("agacResim").src = agac.resim;
}

function sonrakiAgac() {
    let id = getId();
    id++;
    if (id > agaclar.length) id = 1;
    window.location.search = "?id=" + id;
}

agaciGoster(getId());