import React,{Component} from 'react';


import Header from './header';
import Footer from './footer';

class HomeLayout extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
<React.Fragment>
<Header />
<div>{this.props.children}</div>
<Footer />
</React.Fragment>
        )
    }
}

export default HomeLayout;

{/* <template>
    <div class="">  
       
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
       
    </div>
</template>

<script>

    import Header from "./Header.vue";
    import Footer from "./footer.vue";
   
    

    export default {
        components: {
          
            Header,
            Footer,
            
            
        },
    };
</script>

 */}