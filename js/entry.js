import React from "react"
import {render} from "react-dom"

import SomeComponent from "./testComponent.js"

class MainContainer extends React.Component{

	render(){
		return(
			<div>
				<h2>My React Application</h2>
				<SomeComponent/>
			</div>

			)
	}

}


render(
	<MainContainer/>
	,
	document.getElementById("root")
	)
