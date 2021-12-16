# React



<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Ajout react en 1 Minute</title>
    <link rel="stylesheet" href="css/bootstrap.css">
  </head>
  <body>

    <h2>Tableau React</h2>
    <div id="tableau"></div>
    <p>rentrer des utilisateurs via une saisie </p>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
          <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          </tr>
      </tbody>     
    </table> 
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
    <script src="tableau.js"></script><!-- Load our React component. -->

  </body>
</html>
e('div',null,
 ,

                e('td',null,'kevin'),
                e('td',null,'barret')),
              e('tr',null,
                e('th',{scope: 'row'},1),
                e('td',null,'kevin'),
                e('td',null,'barret'))   
            ));