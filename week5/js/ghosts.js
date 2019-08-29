var i = 0;
while (i < 5) {
    var ghost = {}; // első féle módszer

    ghost.actorID = 'actor' + i;
    ghost.turnStart = 1;
    ghost.type = (i + 1);
    ghost.startDelay = i * 2000;
    Ghosts.push(ghost);

    /*	Ghost[i]={};                    második féle módszer
    	Ghost[i].actorID = 'actor' +i;
    
    	Ghost[i]={                          harmadik féle módszer
        actorID : 'actor' + i,
        turnStart : 1
      };*/

    i++;
}