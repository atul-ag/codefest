!function(){function e(){$(".notice").addClass("hide"),$(".overlay").fadeIn("1000"),$(".message").addClass("show")}function a(){for(i=0;i<c.length;i++){var e=c[i];for(j=0;j<e.length;j++)e[j]=Math.random()}}function o(){for(i=0;i<c[0].length;i++)0==d&&r(i);for(i=0;i<c[0].length;i++)0==hasWonColumn&&t(i);if(l(),s(),1==d||1==hasWonColumn||1==hasWonDiagonal1||1==hasWonDiagonal2){console.log("SOMEBODY WONNN !!!");var a=$(".marked-x").length,o=$(".marked-o").length;winnerFound=!0,a>=o&&$(".overlay .theMessage").text("Well done Player X, You've won the game!"),e()}else console.log("Still a drawww")}function n(){currentPlayer=1==currentPlayer?2:1}function r(e){for(d=!0,j=0;j<c[e].length;j++)console.log(c[e][j]),c[e][j]!=c[e][0]&&(d=!1)}function t(e){for(hasWonColumn=!0,j=0;j<c[e].length;j++)console.log(c[j][e]),c[j][e]!=c[0][e]&&(hasWonColumn=!1)}function l(){for(hasWonDiagonal1=!0,i=0;i<boardDimesion;i++)console.log(c[i][i]),c[i][i]!=c[0][0]&&(hasWonDiagonal1=!1)}function s(){hasWonDiagonal2=!0;var e=boardDimesion-1;for(i=0;i<boardDimesion;i++)console.log(c[i][e-i]),c[i][e-i]!=c[0][e-0]&&(hasWonDiagonal2=!1)}var d=!1;hasWonColumn=!1,hasWonDiagonal1=!1,hasWonDiagonal2=!1,winnerFound=!1,boardDimesion=3,currentPlayer=1,currentMoves=1,movesBeforeWin=2*boardDimesion-1,totalMoves=boardDimesion*boardDimesion;var c=[[0,0,0],[0,0,0],[0,0,0]];a(),$(".box").click(function(a){var r=$(this);if(r.attr("data-select"))return nm=1==currentPlayer?"O":"X",void $(".notice").html("Player "+nm+"'s turn - <strong>Already marked</strong>");1==currentPlayer?r.addClass("marked-o").attr({"data-select":"selected","data-marked":"o"}):r.addClass("marked-x").attr({"data-select":"selected","data-marked":"x"});var t=r.data("row"),l=r.data("column");c[t][l]=currentPlayer,nm=1==currentPlayer?"O":"X",$("#log").append("<br>Player"+nm+" | Row:"+(t+1)+", Col:"+(l+1)),currentMoves>=movesBeforeWin&&o(),currentMoves>=totalMoves&&0==winnerFound&&($(".overlay .theMessage").text("It's a draw!"),e()),1==currentPlayer?$(".notice").text("Player X's turn"):$(".notice").text("Player O's turn"),n(),currentMoves++}),$(".lets-play").click(function(e){e.preventDefault(),$(".start-message").addClass("hide"),$(".start-overlay").fadeOut("1000")}),$(".message").on("click",".play-again",function(e){e.preventDefault(),location.reload()})}();