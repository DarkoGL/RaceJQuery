$(document).ready(function () {
  //Creamos un array vacío para añadir los coches
  var roster = [];
  //Aquí, creamos la que será la "linea" de meta
  var goal = $("#playground").width() - 120;

  //Creamos la función que asignará los coches al array anterior
  $("#players").click(function () {
    let cars = $("#players").val();
    roster = new Array(parseInt(cars));
    $("#playground").empty();

    for (let i = 1; i <= roster.length; i++) {
      let playersRoster = `<div id='play${i}'><img id='car${i}' class='player' src='assets/img/car${i}.png' /></div>`;
      $("#playground").append(playersRoster);
    }
  });

  //Creamos la función que moverá los coches mediante el método Animate, aplicándoles márgenes a la izquierda de forma aleatoria.
  //Está función, se ejecuta al pulsar sobre el botón "Start", este. quedará oculto al pulsarlo y se mostrará el boton "Reset".
  //Además, al iniciar la carrera, se reproducirá un sonido. :D
  $("#start").click(function () {
    let positions = 1;
    $(".chiquito")[0].play();

    for (let i = 1; i <= roster.length; i++) {
      $("#car" + i).animate(
        { marginLeft: goal },
        Math.random() * 10000,
        function () {
          //Aquí, vamos añadiendo los coches a la tabla de posiciones según vayan cruzando la meta.
          if ($("#car" + i).css("marginLeft") > "1500px") {
            $("#row" + i).append(
              `<td class='positions'>Posición ${positions++}</td>`       
            );
          }
        }
      );
    }

    $(this).hide();
    $("#reset").show();
  });


//Esta función, se ejecuta al pulsar sobre el botón "Reset".
//Reproducirá un sonido al ejecutarse y devolverá a los coches a su estado inicial, además, vaciará la tabla de posiciones.
//Por último, este botón queda oculto y vuelve a mostrarse el botón "Start".

  $("#reset").click(function () {
    $(".chiquito2")[0].play();
    for (let i = 1; i <= roster.length; i++) {
      $("#car" + i).stop();
      $("#car" + i).css("marginLeft", "185px");
      $("#row" + i).empty();
    }

    $(this).hide();
    $("#start").show();
  });
});
