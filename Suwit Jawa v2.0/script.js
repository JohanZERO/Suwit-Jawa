function getPCom(){
	const com = Math.random();
	if(com < 0.34) return 'gajah';
	if(com < 0.67) return 'orang';
	return 'semut';
}

function getHasil(comp, p){
    if( p == comp )  return'SERI!';
    if( p == 'gajah' ) return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    if( p == 'orang' ) return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
    if( p == 'semut' ) return ( comp == 'orang' ) ? 'KALAH' : 'MENANG!';
}

function putar() {
	const iCom = document.querySelector('.img-komputer');
	const gambar = ['gajah','semut','orang'];
	let i = 0;
	const start = new Date().getTime();
	setInterval(function() {
		if(new Date().getTime() - start > 1000 ) {
			clearInterval;
			return;
		}
		iCom.setAttribute('src', 'img/' + gambar[i++] + '.png');
		if(i == gambar.length) i = 0;
	}, 100)
}

// Menulis satu-satu kurang efektif

// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click',function() {
// 	const pCom = getPCom();
// 	const pPlayer = pGajah.className;
// 	const hasil = getHasil(pCom, pPlayer);
// 	const pComputer = document.querySelector('.img-komputer');
// 	pComputer.setAttribute('src','img/' + pCom + '.png');
// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;
// });

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click',function() {
// 	const pCom = getPCom();
// 	const pPlayer = pOrang.className;
// 	const hasil = getHasil(pCom, pPlayer);
// 	const pComputer = document.querySelector('.img-komputer');
// 	pComputer.setAttribute('src','img/' + pCom + '.png');
// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;
// });

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click',function() {
// 	const pCom = getPCom();
// 	const pPlayer = pSemut.className;
// 	const hasil = getHasil(pCom, pPlayer);
// 	const pComputer = document.querySelector('.img-komputer');
// 	pComputer.setAttribute('src','img/' + pCom + '.png');
// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;
// });



// Menulis dengan looping lebih efektif
const pilihan = document.querySelectorAll('li img')
pilihan.forEach(function(p) {
	p.addEventListener('click', function() {
		const pCom = getPCom();
		const pPlayer = p.className;
		const hasil = getHasil(pCom, pPlayer);
		putar();

		setTimeout(function(){
			const pComputer = document.querySelector('.img-komputer');
			pComputer.setAttribute('src','img/' + pCom + '.png');
			const info = document.querySelector('.info');
			info.innerHTML = hasil;
		},1000);
	});
});