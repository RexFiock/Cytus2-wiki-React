import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import CharaInfoMarkdown from '../../components/CharaInfoMarkdown/CharaInfoMarkdown';

class Update extends Component {

	render(){

		return (
			<div className="background">
				<div id="top"></div>
				<br/><br/><br/><br/>
		        <div class="content-box">
		            <br/><br/>
		            <div class="row">
		                <div class="col-md-12 col-sm-12">
		                    <div class="content">
		                        <font class="font-title">游戏版本更新 （当前wiki版本为 2.7）</font><br/>
		                        <hr/>
		                        <div class="font-subtitle" >
                       				<CharaInfoMarkdown url={"./CharaInfoMarkdown/Update.md"}/>
		                        </div>
		                    </div>
		                </div>
		            </div>
		            <br/><br/><br/>
		        </div>
		   </div>
		);
	}
}

export default Update;