
import React,{Component} from 'react';


import InnerHeader from './InnerHeader';
import Footer from './footer';

class innerPageLayout extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
<React.Fragment>
<InnerHeader />
<div>{this.props.children}</div>
<Footer />
</React.Fragment>
        )
    }
}

export default innerPageLayout;

