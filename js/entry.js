import React from "react"
import {render} from "react-dom"

class MyClass extends React.Component{

	render(){
		return(
			<div>
				<h2> Ado wada bn </h2>
			</div>

			)
	}
	
}


render(
	<MyClass/>
	, 
	document.getElementById("root")
	)