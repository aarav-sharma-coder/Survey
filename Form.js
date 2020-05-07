class Form{
    constructor(){

    }
    display(){
    var title = createElement('h2')
    title.html("COVID-19 SURVEY");
    title.position(110, 0);
    

    var input = createInput("Ans");
    var input1 = createInput("Email");
    var input2 = createInput("Name");
    var input3 = createInput("Ans");
    var input4 = createInput("Ans");
    var button = createButton('Done');

    var question = createElement('h4')
    question.html(" Q1-Do you wear mask in public places? Answer in yes or no. ");
    question.position(20,180);
    var question2 = createElement('h4')
    question2.html(" Q2-Do you wash your hands regularly? Answer in yes or no. ");
    question2.position(20,390);
    var question3 = createElement('h4')
    question3.html(" Q3-Is your locality clean ? Answer in yes or no. ");
    question3.position(20,570);
    
    input.position(75, 275);
    input1.position(130,90);
    input2.position(130,50);
    input3.position(75,480);
    input4.position(75,650);
    button.position(250, 650);

    button.mousePressed(function(){
      input.hide();
      input1.hide();
      input2.hide();
      input3.hide();
      input4.hide();
      button.hide();
      question.hide();
      question3.hide();
      question2.hide(); 
      
      var voterName = input.value();
      var voterEmail = input.value();
      var voterAnswer = input.value();

      
      voterCount+=1;
      voter.update(voterName);
      voter.updateId(voterEmail);
      voter.updateAns(voterAnswer);
      voter.updateCount(voterCount);
      var greeting = createElement('h3');
      greeting.html("Thank You ");
      greeting.position(160, 160);     
    });

  }  
}