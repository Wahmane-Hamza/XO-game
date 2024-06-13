import { render } from "@testing-library/react";
import React from "react";

export default class tik_tak_toe extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {xo:[[null,null,null],
						[null,null,null],
						[null,null,null]],
					win:false,
					turn:"X",
					count:0,
					};
	}

	doit(index,index2)
	{
		if (!this.state.win){
		this.state.xo.map(ele => ele == null ? this.setState({count : 0}): this.setState({count :this.state.count + 1}))

		if (this.state.xo[index][index2] === null)
		{
			const updatedXO = [...this.state.xo];
			updatedXO[index][index2] = this.state.turn;
			this.setState({
				xo: updatedXO,
				turn: this.state.turn === "X" ? "O" : "X",
			});
		}

		for(let i = 0;i<this.state.xo.length;i++)
		{
				if (this.state.xo[i][0] != null && this.state.xo[i][0] == this.state.xo[i][1] && this.state.xo[i][1] == this.state.xo[i][2])
				{
					this.setState({win:true});
				}
				if (this.state.xo[0][i] != null && this.state.xo[0][i] == this.state.xo[1][i] && this.state.xo[1][i] == this.state.xo[2][i])
				{
					this.setState({win:true});
				}
		}
		if (this.state.xo[0][0] != null && this.state.xo[0][0] == this.state.xo[1][1] && this.state.xo[1][1] == this.state.xo[2][2])
		{
			this.setState({win:true});
		}
		if (this.state.xo[0][2] != null && this.state.xo[0][2] == this.state.xo[1][1] && this.state.xo[1][1] == this.state.xo[2][0])
		{
			this.setState({win:true});
		}
	}
}

	PlayAgain()
	{
		this.setState({xo:[[null,null,null],
						[null,null,null],
						[null,null,null]],
						win:false,
						count:0,
						turn:"X"})
	}

	render(){
	return(
		<div className="main">
			{this.state.xo.map((ele,index)=>
				<div className="main2">
					{ele.map((ele2,index2)=>
					<div
						key={index2}
						onClick={()=> this.doit(index,index2)}
						className="main3"
					>
						{this.state.xo[index][index2]=="X"? <h1 style={{color:"blue"}}>{this.state.xo[index][index2]}</h1> : <h1 style={{color:"red"}}>{this.state.xo[index][index2]}</h1>}
					</div>
					)}
				</div>
			)}
			{this.state.win ?  <><p>{this.state.turn == "X"? "O":"X"} win</p> <br/> <button onClick={()=>this.PlayAgain()}>Play Again</button></>: 
			this.state.count == 9 ? <><p>Draw</p> <br/> <button onClick={()=>this.PlayAgain()}>Play Again</button> </> :
			this.state.turn =="X" ? <p style={{color:"blue"}}>{this.state.turn}</p>:
			<p style={{color:"red"}}>{this.state.turn}</p>}
		</div>
	)
	}
}