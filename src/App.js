 
import './App.css';
import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';

function App() {
 // utility functions
function shallowEquals(arr1, arr2) {
  if (!arr1 || !arr2 || arr1.length !== arr2.length) return false;
  let equals = true;
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) equals = false;
  }
  return equals;
}

function arrayDiff(arr1, arr2){
  return arr1.map((a, i)=>{ 
    return a - arr2[i]
  })
}

// display a single cell
function GridCell(props) {
	  
  const classes = `grid-cell 
	${props.x} ${props.y}
	${props.food2Cell ? 'grid-cell--food2' : ''}
	${props.food3Cell ? 'grid-cell--food2' : ''}
	${props.food4Cell ? 'grid-cell--food2' : ''}
	${props.food5Cell ? 'grid-cell--food2' : ''}
	${props.food6Cell ? 'grid-cell--food2' : ''}
	${props.food7Cell ? 'grid-cell--food2' : ''}
	${props.food8Cell ? 'grid-cell--food2' : ''}
	${props.food9Cell ? 'grid-cell--food2' : ''}
	${props.foodCell ? "grid-cell--food" : ""} 
	${props.snakeCell ? "grid-cell--snake" : ""}
	${props.x == 13 && props.y == 13 && props.isWin ? 'corner' : ""}
	${props.x == 14 && props.y == 14 && props.isWin ? `cornerStatic ${props.firstAnimate ?  '' : 'active'}` : ""}
	${props.x == 15 && props.y == 14 && props.isWin ? 'corner3' : ""}
	${props.x == 14 && props.y == 13 && props.isWin ? 'corner3' : ""}
	${props.x == 32 && props.y == 13 && props.isWin ? 'corner' : ""}
	${props.x == 31 && props.y == 14 && props.isWin ? 'corner2' : ""}
	${props.x == 30 && props.y == 14 && props.isWin ? 'corner3' : ""}
	${props.x == 31 && props.y == 15 && props.isWin ? 'corner3' : ""}
	${props.x == 14 && props.y == 13 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 15 && props.y == 13 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 16 && props.y == 13 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 17 && props.y == 13 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 18 && props.y == 13 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 19 && props.y == 13 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 20 && props.y == 13 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 21 && props.y == 13 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 22 && props.y == 13 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 23 && props.y == 13 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 24 && props.y == 13 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 25 && props.y == 13 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 26 && props.y == 13 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 27 && props.y == 13 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 28 && props.y == 13 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 29 && props.y == 13 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 30 && props.y == 13 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 31 && props.y == 13 && props.isWin ? `cornerStatic ${props.firstAnimate ?  '' : 'active'} ` : ""}
 
	${props.x == 32 && props.y == 14 && props.isWin ? `cornerStatic ${props.firstAnimate ?  '' : 'active'} ` : ""}
	${props.x == 32 && props.y == 15 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 32 && props.y == 16 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 32 && props.y == 17 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 32 && props.y == 18 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 32 && props.y == 19 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 32 && props.y == 20 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 32 && props.y == 21 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 32 && props.y == 22 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 32 && props.y == 23 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 32 && props.y == 24 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 32 && props.y == 25 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 32 && props.y == 26 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 32 && props.y == 27 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 32 && props.y == 28 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 32 && props.y == 29 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 32 && props.y == 30 && props.isWin ? `cornerStatic ${props.firstAnimate ?  '' : 'active'} ` : ""}
	${props.x == 32 && props.y == 31 && props.isWin ? 'corner' : ""}
	${props.x == 31 && props.y == 30 && props.isWin ? 'corner2' : ""}
	${props.x == 30 && props.y == 30 && props.isWin ? 'corner3' : ""}
	${props.x == 31 && props.y == 31 && props.isWin ? 'corner3' : ""}
	${props.x == 31 && props.y == 31 && props.isWin ? `cornerStatic ${props.firstAnimate ?  '' : 'active'}` : ""}
	${props.x == 30 && props.y == 31 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 29 && props.y == 31 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 28 && props.y == 31 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 27 && props.y == 31 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 26 && props.y == 31 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 25 && props.y == 31 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 24 && props.y == 31 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 23 && props.y == 31 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 22 && props.y == 31 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 21 && props.y == 31 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 20 && props.y == 31 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 19 && props.y == 31 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 18 && props.y == 31 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 17 && props.y == 31 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 16 && props.y == 31 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 15 && props.y == 31 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 14 && props.y == 31 && props.isWin ? `cornerStatic ${props.firstAnimate ?  '' : 'active'} ` : ""}
	${props.x == 13 && props.y == 31 && props.isWin ? 'corner' : ""}
	${props.x == 14 && props.y == 30 && props.isWin ? 'corner2' : ""}
	${props.x == 15 && props.y == 29 && props.isWin ? 'corner3' : ""}
	${props.x == 14 && props.y == 30 && props.isWin ? 'corner3' : ""}
	${props.x == 13 && props.y == 30 && props.isWin ? `cornerStatic ${props.firstAnimate ?  '' : 'active'} ` : ""}
	${props.x == 13 && props.y == 29 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 13 && props.y == 28 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 13 && props.y == 27 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 13 && props.y == 26 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 13 && props.y == 25 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 13 && props.y == 24 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 13 && props.y == 23 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 13 && props.y == 22 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 13 && props.y == 21 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 13 && props.y == 20 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 13 && props.y == 19 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 13 && props.y == 18 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 13 && props.y == 17 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 13 && props.y == 16 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 13 && props.y == 15 && props.isWin ? 'cornerStatic active' : ""}
	${props.x == 13 && props.y == 14 && props.isWin ? `cornerStatic ${props.firstAnimate ?  '' : 'active'} ` : ""}
 

`;
  return (
    <div
      className={classes}
      style={{ height: props.size + "px", width: props.size + "px" }}
      />
  );
}

// the main view
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      snake: [],
      food: [],
		food2: [],
		food3: [],
		food4: [],
		food5: [],
		food6: [],
		food7: [],
		food8: [],
		food9: [],
		isWin: false,
		firstAnimate: false,
      // 0 = not started, 1 = in progress, 2= finished
      status: 0,
      // using keycodes to indicate direction
      direction: 39
    };

    this.moveFood = this.moveFood.bind(this);
    this.checkIfAteFood = this.checkIfAteFood.bind(this);
	 this.snakeWinGo = this.snakeWinGo.bind(this);
    this.startGame = this.startGame.bind(this);
    this.endGame = this.endGame.bind(this);
    this.moveSnake = this.moveSnake.bind(this);
	 this.mostSnake = this.mostSnake.bind(this)
    this.doesntOverlap = this.doesntOverlap.bind(this);
    this.setDirection = this.setDirection.bind(this);
    this.removeTimers = this.removeTimers.bind(this);
  }
  // randomly place snake food
  moveFood() {
    if (this.moveFoodTimeout) clearTimeout(this.moveFoodTimeout)
	

	 if(this.state.snake.length === 28) {
		const x = 22
		const y = 41
	  
		
		return this.setState({ food: [x, y], food2: [x, y - 1], food3: [x - 1, y - 1],
		  food4: [x + 1, y - 1], food5: [x - 1, y], food6: [x + 1, y],
		  food7: [x + 1, y + 1], food8: [x, y + 1], food9: [x-1, y + 1]
		})
		
		 
	 }


	 if(this.state.snake.length === 29) {
		const x = 22
		const y = 22
	  
		
		return this.setState({ food: [x, y], food2: [x, y - 1], food3: [x - 1, y - 1],
		  food4: [x + 1, y - 1], food5: [x - 1, y], food6: [x + 1, y],
		  food7: [x + 1, y + 1], food8: [x, y + 1], food9: [x-1, y + 1]
		})
		
		 
	 }
	
 
		const randomPosition = () => {
			let positon = parseInt(Math.random() * (this.numCells ))
			if(positon !== 0 && positon !== 43 && positon !== 44) return positon 
			randomPosition()
		}  
	
	

    const x = randomPosition() || 2
    const y = randomPosition() || 2
	
    
	 this.setState({ food: [x, y], food2: [x, y - 1], food3: [x - 1, y - 1],
		food4: [x + 1, y - 1], food5: [x - 1, y], food6: [x + 1, y],
		food7: [x + 1, y + 1], food8: [x, y + 1], food9: [x-1, y + 1]
	 });
   //  this.moveFoodTimeout = setTimeout(this.moveFood, 5000)
  }
  mostSnake() {
	let newSnake = this.state.snake
	let newSnakeSegment;
	const lastSegment = newSnake[newSnake.length - 1];

	// where should we position the new snake segment?
	// here are some potential positions, we can choose the best looking one
	let lastPositionOptions = [[-1, 0], [0, -1], [1, 0], [0, 1]];
	
	// the snake is moving along the y-axis, so try that instead
	if ( newSnake.length > 1 ) {
	  lastPositionOptions[0] = arrayDiff(lastSegment, newSnake[newSnake.length - 2]);
	}

	for (var i = 0; i < lastPositionOptions.length; i++) {
	  newSnakeSegment = [
		 lastSegment[0] + lastPositionOptions[i][0],
		 lastSegment[1] + lastPositionOptions[i][1]
	  ];
	  if (this.isValid(newSnakeSegment)) {
		 break;
	  }
	}
	console.log(12312)
	this.setState({
	  snake: newSnake.concat([newSnakeSegment]),  
	});
  }

  snakeWinGo()  {	
	 
	if(this.state.snake.length >= 30) {
		setTimeout(() => {
			this.setState({firstAnimate: true})
		}, 5000)
		this.setState({isWin: true, food: [], food2: [], food3: [],
			food4: [], food5: [], food6: [],
			food7: [], food8: [], food9: []
		 })
		 setTimeout(() => {
			this.setState({snake: []})
		 }, 7000)
		// let i = 0
		// while ( i < 5 && this.state.snake.length < 50) {
			 
		// 	this.mostSnake()	
		// 	i++	
		// }
		
	}
	if(this.state.snake.length >= 30 && this.state.snake[0][0] == 21 && this.state.snake[0][1] == 13) {
		this.setState({ direction: 39 });
		this.setState({ direction: 37 });
		 
	 	} 
	if(this.state.snake.length >= 30 && this.state.snake[0][0] == 23 && this.state.snake[0][1] == 13) {
		this.setState({ direction: 39 });
		this.setState({ direction: 37 });
	 
		 
	} 
	if(this.state.snake.length >= 30 && this.state.snake[0][0] == 22 && this.state.snake[0][1] == 13) {
		 
		this.setState({ direction: 37 });
		 
		 
	}
	if(this.state.snake.length >= 30 && this.state.snake[0][0] == 13 && this.state.snake[0][1] == 13) {
	 	this.setState({ direction: 40})
		 
	}
	if(this.state.snake.length >= 30 && this.state.snake[0][0] == 13 && this.state.snake[0][1] == 31) {
		console.log(`snake need right: ${this.state.snake[0]}`)
		this.setState({ direction: 39})
	 
	}
	if(this.state.snake.length >= 30 && this.state.snake[0][0] == 31 && this.state.snake[0][1] == 31) {
		console.log(`snake need up: ${this.state.snake[0]}`)
		this.setState({ direction: 38})
		// let i = 0
		// while (i < 4 && this.state.snake.length < 72) {
		// 	 this.mostSnake()	
				
		// } 
	}
	if(this.state.snake.length >= 30 && this.state.snake[0][0] == 31 && this.state.snake[0][1] == 13) {
		console.log(`snake need left: ${this.state.snake[0]}`)
		this.setState({ direction: 37})
		// let i = 0
		// while (i < 10 && this.state.snake.length < 72) {
		// 	 this.mostSnake()	
				
		// }
		 
	}
  }


  setDirection({ keyCode }) {
	  
    // if it's the same direction or simply reversing, ignore
    let changeDirection = true;
    [[38, 40], [37, 39]].forEach(dir => {
      if (dir.indexOf(this.state.direction) > -1 && dir.indexOf(keyCode) > -1) {
        changeDirection = false;
      }
    });

    if (changeDirection && !this.state.isWin) this.setState({ direction: keyCode });
  }

  moveSnake() {
 
    const newSnake = [];
	
	  
    // set in the new "head" of the snake
    switch (this.state.direction) {
        // down
      case 40:
        newSnake[0] = [this.state.snake[0][0], this.state.snake[0][1] + 1];
        break;
        // up
      case 38:
        newSnake[0] = [this.state.snake[0][0], this.state.snake[0][1] - 1];
        break;
        // right
      case 39:
        newSnake[0] = [this.state.snake[0][0] + 1, this.state.snake[0][1]];
        break;
        // left
      case 37:
        newSnake[0] = [this.state.snake[0][0] - 1, this.state.snake[0][1]];
        break;
                                }
    // now shift each "body" segment to the previous segment's position
    [].push.apply(
      newSnake,
      this.state.snake.slice(1).map((s, i) => {
        // since we're starting from the second item in the list,
        // just use the index, which will refer to the previous item
        // in the original list
        return this.state.snake[i];
      })
    );
	 
	this.setState({ snake: newSnake });

    this.checkIfAteFood(newSnake);
    if (!this.isValid(newSnake[0]) || !this.doesntOverlap(newSnake)) {
      // end the game
      this.endGame()
    } 
	this.snakeWinGo()
	  
	      
  }
 eatFood(newSnake) {
	 // snake gets longer
	 let newSnakeSegment;
	 const lastSegment = newSnake[newSnake.length - 1];

	 // where should we position the new snake segment?
	 // here are some potential positions, we can choose the best looking one
	 let lastPositionOptions = [[-1, 0], [0, -1], [1, 0], [0, 1]];
	 
	 // the snake is moving along the y-axis, so try that instead
	 if ( newSnake.length > 1 ) {
		lastPositionOptions[0] = arrayDiff(lastSegment, newSnake[newSnake.length - 2]);
	 }

	 for (var i = 0; i < lastPositionOptions.length; i++) {
		newSnakeSegment = [
		  lastSegment[0] + lastPositionOptions[i][0],
		  lastSegment[1] + lastPositionOptions[i][1]
		];
		if (this.isValid(newSnakeSegment)) {
		  break;
		}
	 }

	 this.setState({
		snake: newSnake.concat([newSnakeSegment]),
		food: []
	 });
	 if(this.state.snake.length > 30) return 
  this.moveFood();
  }
  checkIfAteFood(newSnake) {
		if (shallowEquals(newSnake[0], this.state.food2)) this.eatFood(newSnake)
		else if (shallowEquals(newSnake[0], this.state.food3)) this.eatFood(newSnake)
		else if (shallowEquals(newSnake[0], this.state.food4)) this.eatFood(newSnake)
		else if (shallowEquals(newSnake[0], this.state.food5)) this.eatFood(newSnake)
		else if (shallowEquals(newSnake[0], this.state.food6)) this.eatFood(newSnake)
		else if (shallowEquals(newSnake[0], this.state.food7)) this.eatFood(newSnake)
		else if (shallowEquals(newSnake[0], this.state.food8)) this.eatFood(newSnake)
		else if (shallowEquals(newSnake[0], this.state.food9)) this.eatFood(newSnake)



      
  }
 
  
  // is the cell's position inside the grid?
  isValid(cell) {
    return (
      cell[0] > -1 &&
      cell[1] > -1 &&
      cell[0] < this.numCells &&
      cell[1] < this.numCells
    );
  }

  doesntOverlap(snake) {
    return (
      snake.slice(1).filter(c => {
        return shallowEquals(snake[0], c);
      }).length === 0
    );
  }

  startGame() {
    this.removeTimers();
    this.moveSnakeInterval = setInterval(this.moveSnake, 130);
    this.moveFood();

    this.setState({
      status: 1,
      snake: [[5, 5]],
      food: [10, 10,],
		food2: [10, 9],
		food3: [9, 9],
		food4: [11, 9],
		food5: [9, 10],
		food6: [11, 10],
		food7: [11, 11],
		food8: [10, 11],
		food9: [9, 11]
    });
    //need to focus so keydown listener will work!
    this.el.focus();
  }
  
  endGame(){
    this.removeTimers();
    this.setState({
      status : 2
    })
  }

  removeTimers() {
    if (this.moveSnakeInterval) clearInterval(this.moveSnakeInterval);
    if (this.moveFoodTimeout) clearTimeout(this.moveFoodTimeout)
  }

  componentWillUnmount() {
    this.removeTimers();
  }

  render() {
		console.log(this.state.snake.length)
    // each cell should be approximately 15px wide, so calculate how many we need
    this.numCells = Math.floor(this.props.size / 15);
    const cellSize = this.props.size / this.numCells;
    const cellIndexes = Array.from(Array(this.numCells).keys());
    const cells = cellIndexes.map(y => {
      return cellIndexes.map(x => {
        const foodCell = this.state.food[0] === x && this.state.food[1] === y;
		  const food2Cell = this.state.food2[0] === x && this.state.food2[1] === y ;
		  const food3Cell = this.state.food3[0] === x  && this.state.food3[1] === y ;
		  const food4Cell = this.state.food4[0] === x  && this.state.food4[1] === y ;
		  const food5Cell = this.state.food5[0] === x  && this.state.food5[1] === y ;
		  const food6Cell = this.state.food6[0] === x  && this.state.food6[1] === y ;
		  const food7Cell = this.state.food7[0] === x  && this.state.food7[1] === y ;
		  const food8Cell = this.state.food8[0] === x  && this.state.food8[1] === y ;
		  const food9Cell = this.state.food9[0] === x  && this.state.food9[1] === y ;
		  let snakeCell = this.state.snake.filter(c => c[0] === x && c[1] === y);
        snakeCell = snakeCell.length && snakeCell[0];

        return (
          <GridCell
			 	x={x}
				y={y}
				isWin={this.state.isWin}
			 	food2Cell={food2Cell}
				food3Cell={food3Cell}
				food4Cell={food4Cell}
				food5Cell={food5Cell}
				food6Cell={food6Cell}
				food7Cell={food7Cell}
				food8Cell={food8Cell}
				food9Cell={food9Cell}
            foodCell={foodCell}
            snakeCell={snakeCell}
            size={cellSize}
            key={x + " " + y}
				firstAnimate={this.state.firstAnimate}
            />
        );
      });
    });

    let overlay;
    if (this.state.status === 0) {
      overlay = (
        <div className="snake-app__overlay">
          <button onClick={this.startGame}>Начать игру!</button>
        </div>
      );
    } else if (this.state.status === 2) {
      overlay = (
        <div className="snake-app__overlay">
          <div className="mb-1"><b>Вы проиграли!</b></div>
          <div className="mb-1">Ваш счет: {this.state.snake.length} </div>
          <div className="mb-1">Нужно брать 30 для выигрыша</div>
          <button onClick={this.startGame}>Новая игра</button>
        </div>
      );
    }
    return (
      <div
        className="snake-app"
        onKeyDown={this.setDirection}
        style={{
          width: this.props.size + "px",
            height: this.props.size + "px"
        }}
        ref={el => (this.el = el)}
        tabIndex={-1}
        >
        {overlay}
        <div
          className="grid"
          style={{
            width: this.props.size + "px",
              height: this.props.size + "px"
          }}
          >
          {cells}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App size={670} />, document.getElementById("root"));
}

export default App;
