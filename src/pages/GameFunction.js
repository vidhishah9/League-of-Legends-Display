var api_key = 'RGAPI-4ee21e41-a241-4226-8ba6-331124947f97'
var gameID
var PUUIDData
var matchID 
var matchData
var participantsarray = []
var participantsdataarray = []
var indexofuser
export var CS
export var vision = []
export var kills = [];
export var deaths = [];
export var assists = [];
export var UserChampionName = []
export var AllyChampionNameArrayTotal = []
export var EnemeyChampionNameArrayTotal = []
export var dayResult;
export var matchData = {};
export var matchDataArray = []

export function start(gameID) {

  

function getPUUID() {
  const start = performance.now();
//getting PUUID of a player
  fetch('https://cors-anywhere.herokuapp.com/https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/' + gameID + '/NA1?api_key='+ api_key)
  .then(res=> res.json())
  .then(data=> {PUUIDData = data})
  .then(data=> {const end = performance.now();
    const responseTime = end - start;
  })
}
getPUUID() 

function getmatchID() {
  fetch('https://cors-anywhere.herokuapp.com/https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/'+PUUIDData.puuid+'/ids?start=0&count=5&api_key=' + api_key)
  .then(res=> res.json())
  .then(data=> {matchID = String(data)})
  .then(data=> {console.log(typeof matchID)})

}
setTimeout(getmatchID, 2000)

function getMatches() {
  const myArray = matchID.split(",");
  console.log(myArray)
  for (let i = 0; i < myArray.length; i++) { //for each match
    fetch('https://cors-anywhere.herokuapp.com/https://americas.api.riotgames.com/lol/match/v5/matches/'+myArray[i]+'?api_key='+api_key)
    .then(res=> res.json())
    .then(data=> {matchData = data})
    .then(data=> {console.log(matchData)})
    .then(data=> {getChampion(matchData) })
  }
  

}

setTimeout(getMatches, 3000)

function getChampion(matchData) {
  AllyChampionNameArrayTotal= []
  EnemeyChampionNameArrayTotal = []
  kills = []
  deaths = []
  assists = []
  participantsarray = matchData.metadata.participants
  indexofuser = participantsarray.indexOf(PUUIDData.puuid)
  participantsdataarray = matchData.info.participants


  kills.push(matchData.info.participants[indexofuser].kills)
  deaths.push(matchData.info.participants[indexofuser].deaths)
  assists.push(matchData.info.participants[indexofuser].assists)

  console.log(kills)
  var startally = 0
  var maxally 
  var startenemy = 0
  var maxenemy 

  if (indexofuser < 5) {
    startally = 0
    maxally = 5
    startenemy = 5
    maxenemy = 10
  }
  else {
    startally = 5
    maxally = 10
    startenemy = 0
    maxenemy = 5
  }
  while (startally < maxally) {
    AllyChampionNameArrayTotal.push(participantsdataarray[startally].championName + " ")
    startally = startally + 1
  }
  while (startenemy < maxenemy) {
    EnemeyChampionNameArrayTotal.push(participantsdataarray[startenemy].championName + " ")
    startenemy = startenemy + 1
  };

  console.log(AllyChampionNameArrayTotal)
  console.log(EnemeyChampionNameArrayTotal)


  matchData = {
    AllyChampions: AllyChampionNameArrayTotal,
    EnemyChampions: EnemeyChampionNameArrayTotal,
    Kills: kills,
    Deaths: deaths,
    Assists: assists
  }
  matchDataArray.push(matchData) 
  console.log(matchDataArray)

}


}

