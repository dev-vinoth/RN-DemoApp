import React, { Component } from 'react';
import Drawer from 'react-native-drawer';

//import SideMenu from './SideMenu';
import SideMenu from '../containers/sidemenu';

import {Actions, DefaultRenderer} from 'react-native-router-flux';

export default class NavigationDrawer extends Component {
    render(){
        const state = this.props.navigationState;
        const children = state.children;
        return (
            <Drawer
                ref="navigation"
                open={state.open}
                onOpen={()=>Actions.refresh({key:state.key, open: true})}
                onClose={()=>Actions.refresh({key:state.key, open: false})}
                type="overlay"
                content={<SideMenu />}
                tapToClose={true}
                openDrawerOffset={0.2}
                panOpenMask={0.2}
                panCloseMask={0.2}
                negotiatePan={true}
                acceptPan={true}
                styles={{
                  drawer: {shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3, elevation: 16},
                  main: {paddingLeft: 3}
                }}
                tweenHandler={(ratio) => ({
                 main: { opacity:Math.max(0.54,1-ratio) }
            })}>
                <DefaultRenderer navigationState={children[children.length - 1]} onNavigate={this.props.onNavigate} />
            </Drawer>
        );
    }
}
