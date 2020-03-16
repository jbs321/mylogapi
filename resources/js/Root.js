import React from 'react'
import {connect} from "react-redux";
import CustomizedProgressBars from './src/components/CustomizedProgressBars';
import MenuVert from './src/components/menu-vert';


class Root extends React.Component {
    renderSpinner(isLoading) {
        if(isLoading === true) {
            return <CustomizedProgressBars/>;
        }

        return null;
    }

    render() {
        return <div>
            <MenuVert/>
            {this.renderSpinner(this.props.general.isLoading)}
            <div className={"margin-bottom-15"}></div>
            {this.props.children}
        </div>
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Root)
