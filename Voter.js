class Voter{
    constructor(){

    }
    getCount(){
        var voterCountRef = database.ref('voterCount');
        voterCountRef.on("value" , function(data){
            voterCount = data.val();

        })
    }
    updateCount(voterCount){
        database.ref('/').update({
            voterCount: voterCount
        });

    }
    update(voterName){
        var voterIndex = "Voter " + voterCount;
        database.ref(voterIndex).set({
            voterName: voterName  
        });
    }
    updateId(voterEmail){
        var voterIndex = "Voter " + voterCount;
        database.ref(voterIndex).set({
            voterEmail: voterEmail  
        });
    }
    updateAns(voterAnswer){
        var voterIndex = "Voter " + voterCount;
        database.ref(voterIndex).set({
            Q1: voterAnswer ,
            Q2: voterAnswer ,
            Q3: voterAnswer 
        });
    }
}