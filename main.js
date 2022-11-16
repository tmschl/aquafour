// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};


// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactotry(numberOrg, arrayBases) {
  return {
    _speciesNum : numberOrg,
    _dna        : arrayBases,
    get dna () {
      return this._dna;
    },
    mutate () {
      //console.log(this.dna, 'in the method');
      let newBase = returnRandBase();
      while (this._dna[0] === newBase) {
        newBase = returnRandBase();
      }
      this._dna[0] = newBase;
      
      return this._dna;
    },

    compareDNA (pAueqorObj) {
      let sameCount = 0; 
      // console.log(pAueqorObj._dna.length, this._dna.length);

      for (let i = 0; i < pAueqorObj.dna.length; i++) {
        if (pAueqorObj.dna[i] === this._dna[i]){
          console.log('same');
          sameCount++;
        } else {
          console.log('different');
        }
      }

      console.log(`specimen #1 and specimen #2 have ${(sameCount / 4) * 100}% DNA in common`)
    }, 

    willLikelySurvive (pAueqorObj) {
      let numberCsGs = 0;

      for (let i = 0; i < pAueqorObj.dna.length; i++) {
        if (pAueqorObj.dna[i] === 'C' || pAueqorObj.dna[i] === 'G') {
          numberCsGs++;
        }
      }
      console.log(`this mfer has a ${(numberCsGs / pAueqorObj.dna.length) * 100}% chance of survival`)
      if ((numberCsGs / pAueqorObj.dna.length) * 100 > 60) {
        console.log('mfer lived')
      }
    }
  }
}

let tim = pAequorFactotry(4, ['C', 'T', 'C', 'G']);
let tim2 = pAequorFactotry(4, ['T', 'C', 'C', 'C']);

tim.compareDNA(tim2);

tim2.willLikelySurvive(tim);

let pAeuqor1 = mockUpStrand();
console.log(pAeuqor1)

