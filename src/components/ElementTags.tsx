import React, { Component } from 'react'
import PropTypes from "prop-types";
import * as muiColor from '@mui/material/colors'
import {addSet} from '../actions/index'


export class Cast extends Component<any, any> {
    constructor(props : any) {
        super(props);
        addSet(props.children,2)
    }
    static propTypes = {
        active: PropTypes.bool.isRequired,
        children: PropTypes.node.isRequired,
    };
    elementType: any = "cast"
    render(){
        const { active, children} = this.props;
        return(
            <this.elementType filter-selected={active}

            id={children.trim().replace(
                /[!"#$%&'()\*\+,\./:;<=>\?@\[\\\]^`{\|}~/\s ]+/g,
                "-"
            )+"-cast"}
            >{children}</this.elementType>
        )
    }
}
export class Extras extends Component<any, any> {
    static propTypes = {
        active: PropTypes.bool.isRequired,
        children: PropTypes.node.isRequired,
    };
    elementType: any = "Extras"
    render(){
        const { active, children} = this.props;
        return(
            <this.elementType filter-selected={active}
            id={children.trim().replace(
                /[!"#$%&'()\*\+,\./:;<=>\?@\[\\\]^`{\|}~/\s ]+/g,
                "-"
            )+"-extras"}
            >{children}</this.elementType>
        )
    }
}
export class Vehicles extends Component<any, any> {
    static propTypes = {
        active: PropTypes.bool.isRequired,
        children: PropTypes.node.isRequired,
    };
    elementType: any = "Vehicles"
    render(){
        const { active, children} = this.props;
        return(
            <this.elementType filter-selected={active}
            id={children.trim().replace(
                /[!"#$%&'()\*\+,\./:;<=>\?@\[\\\]^`{\|}~/\s ]+/g,
                "-"
            )+"-vehicles"}
            >{children}</this.elementType>
        )
    }
}
export class Props extends Component<any, any> {
    static propTypes = {
        active: PropTypes.bool.isRequired,
        children: PropTypes.node.isRequired,
    };
    elementType: any = "Props"
    render(){
        const { active, children} = this.props;
        return(
            <this.elementType filter-selected={active}
            id={children.trim().replace(
                /[!"#$%&'()\*\+,\./:;<=>\?@\[\\\]^`{\|}~/\s ]+/g,
                "-"
            )+"-props"}
            >{children}</this.elementType>
        )
    }
}
export class Costumes extends Component<any, any> {
    static propTypes = {
        active: PropTypes.bool.isRequired,
        children: PropTypes.node.isRequired,
    };
    elementType: any = "Costumes"
    render(){
        const { active, children} = this.props;
        return(
            <this.elementType filter-selected={active}
            id={children.trim().replace(
                /[!"#$%&'()\*\+,\./:;<=>\?@\[\\\]^`{\|}~/\s ]+/g,
                "-"
            )+"-costumes"}
            >{children}</this.elementType>
        )
    }
}
export class Makeup extends Component<any, any> {
    static propTypes = {
        active: PropTypes.bool.isRequired,
        children: PropTypes.node.isRequired,
    };
    elementType: any = "Makeup"
    render(){
        const { active, children} = this.props;
        return(
            <this.elementType filter-selected={active}
            id={children.trim().replace(
                /[!"#$%&'()\*\+,\./:;<=>\?@\[\\\]^`{\|}~/\s ]+/g,
                "-"
            )+"-makeup"}
            >{children}</this.elementType>
        )
    }
}
export class Sound extends Component<any, any> {
    static propTypes = {
        active: PropTypes.bool.isRequired,
        children: PropTypes.node.isRequired,
    };
    elementType: any = "Sound"
    render(){
        const { active, children} = this.props;
        return(
            <this.elementType filter-selected={active}
            id={children.trim().replace(
                /[!"#$%&'()\*\+,\./:;<=>\?@\[\\\]^`{\|}~/\s ]+/g,
                "-"
            )+"-sound"}
            >{children}</this.elementType>
        )
    }
}
export class Set extends Component<any, any> {
    static propTypes = {
        active: PropTypes.bool.isRequired,
        children: PropTypes.node.isRequired,
    };
    elementType: any = "Set"
    render(){
        const { active, children} = this.props;
        return(
            <this.elementType filter-selected={active}
            id={children.trim().replace(
                /[!"#$%&'()\*\+,\./:;<=>\?@\[\\\]^`{\|}~/\s ]+/g,
                "-"
            )+"-set"}
            >{children}</this.elementType>
        )
    }
}
export class Storyboard extends Component<any, any> {
    static propTypes = {
        active: PropTypes.bool.isRequired,
        children: PropTypes.node.isRequired,
    };
    elementType: any = "Storyboard"
    render(){
        const { active, children} = this.props;
        return(
            <this.elementType filter-selected={active}
            id={children.trim().replace(
                /[!"#$%&'()\*\+,\./:;<=>\?@\[\\\]^`{\|}~/\s ]+/g,
                "-"
            )+"-storyboard"}
            >{children}</this.elementType>
        )
    }
}
// export const CAST = ({ active, children}: any) => (
//     <span
//     filter-selected={active}
//     className={'CAST'}
//     >
//         {children}
//     </span>
// )