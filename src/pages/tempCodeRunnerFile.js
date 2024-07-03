    let buffer = [];
    let index = 0;
    let AllyChampionNameArrayEachMatch = [];
    let i = 0;
    let j  = 0;
    const enemylength = (EnemeyChampionNameArray.length)/5;

    while (i < enemylength) {
        AllyChampionNameArrayEachMatch = [];
        j = 0;
        while (j < 5) {
            AllyChampionNameArrayEachMatch.push(EnemeyChampionNameArray[index]);
            index+=1;
            j++;
        }
        i = i + 1;
        console.log(AllyChampionNameArrayEachMatch);
    }
      