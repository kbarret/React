const e = React.createElement;

class Hello extends React.Component {
  render() {
    return e('div', null, `Bonjour `);
  }
}
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = false ;
  }

  render() {
    if (this.state === true) {
      return 'You liked this.';
    }
    return e('button',{ onClick: () => this.state = true },'Like');
  }
}
const like = new Button;
class Tableau extends React.Component {
  render() {
    return e('div',null,
            e('table',{className: 'table'}, 
              e('thead',null,
                e('tr',null,
                  e('th',{scope: 'col'},'id'),
                  e('th',{scope: 'col'},'firstname'),
                  e('th',{scope: 'col'},'lastname')
                  )
                ),
            e('tbody',null,
              e('tr',null,
                e('th',{scope: 'row'},'1'),
                e('td',null,'kevin'),
                e('td',null,'barret'),
                e('td',null,
                  e('button',{className: 'btn btn-primary'},'like')
                  )
                ),
              e('tr',null,
                e('th',{scope: 'row'},'2'),
                e('td',null,'Hugo'),
                e('td',null,'react'),
                e('td',null,
                  like.render())
                )
              )   
            )
          );
        
   }
}

ReactDOM.render(
  e(Tableau, null),
  document.getElementById('root')
);
