import React from 'react';
import renderer from 'react-test-renderer';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
/* End of npm packages */
/* Jest & Enzyme dependencies */
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
/* Routing duplicate components into Unit-testing folder to test individually */
import MacroRecycleItems from './MacroRecycleItems.test.js'
import MacroRecycle from './MacroRecycle'

configure({ adapter: new Adapter() });

describe('<MacroRecycleItems />', () => {
    let wrapper;

    beforeEach(()=> {
        wrapper = shallow(<MacroRecycle />);
    });
    /* Use .toBeInstanceOf(Class) to check that an object is an instance of a class. This matcher uses instanceof underneath. */
    it('Plastic Pollution: <MacroRecycleItems />:Object is an instance of this class; Matches user instance', () => {
        wrapper = shallow(<MacroRecycle />);
        expect(()=> wrapper.toBeInstanceOf(MacroRecycle));
    });
    /* Checks that a variable is not undefined, or checks function and returns true */
    it('Plastic Pollution: <MacroRecycleItems />:Rendered correct defined variables and functions', () => {
        wrapper = shallow(<MacroRecycle />);
        expect(wrapper.find(MacroRecycle)).toBeDefined();
    });
   
    /* If we rendered an object to screen, return true*/
    it('Plastic Pollution: <MacroRecycleItems />:Rendered object correctly to screen!', () => {
        wrapper = shallow(<MacroRecycle />);
        expect(wrapper.find(MacroRecycle)).toBeTruthy();
    });
    /* Checks if javascript object matches a subset of properties of an object, return true if true*/
    it('Plastic Pollution: <MacroRecycleItems />:Rendered object matches subset properties!', () => {
        wrapper = shallow(<MacroRecycle />);
        expect(wrapper.find(MacroRecycle)).toMatchObject(MacroRecycleItems);
    });
    /* Checking if links are navigating correctly through github, return true */
    it('Checking Github Live Links: Rendered correctly', () => {
        const tree = renderer
            .create(<Nav.Link href="/https://cse115b-plasticpollution.github.io/plasticpollution/#/">Landing Page</Nav.Link>,
            <Nav.Link href="/https://cse115b-plasticpollution.github.io/plasticpollution/#/Activist">Activism Live Link</Nav.Link>,
            <Nav.Link href="/https://cse115b-plasticpollution.github.io/plasticpollution/#/Macro">Macro Live Link</Nav.Link>,
            <Nav.Link href="/https://cse115b-plasticpollution.github.io/plasticpollution/#/MacroRecycle">Macro Recyle Live Link</Nav.Link>,
            <Nav.Link href="/https://cse115b-plasticpollution.github.io/plasticpollution/#/Micro">Micro Live Link</Nav.Link>,
            <Nav.Link href="/https://cse115b-plasticpollution.github.io/plasticpollution/#/Nano">Nano Live Link</Nav.Link>,
            <Nav.Link href="/https://cse115b-plasticpollution.github.io/plasticpollution/#/MacroReuse">Macro Reuse Live Link</Nav.Link>,
            <Nav.Link href="/https://cse115b-plasticpollution.github.io/plasticpollution/#/Macro2">Macro 2 Live Link</Nav.Link>,
            <Nav.Link href="/https://cse115b-plasticpollution.github.io/plasticpollution/#/about">About Live Link</Nav.Link>,
            <Nav.Link href="/https://cse115b-plasticpollution.github.io/plasticpollution/#/faq">FAQ Live Link</Nav.Link>,
            <Nav.Link href="/https://cse115b-plasticpollution.github.io/plasticpollution/#/Contact">Contact Live Link</Nav.Link>,
            <Nav.Link href="/https://cse115b-plasticpollution.github.io/plasticpollution/#/Activist">Activism Live Link</Nav.Link>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    /* Checking if links are navigating correctly local host, return true */
    it('Checking Local Server Links: Rendered correctly', () => {
        const tree = renderer
            .create(
            <Nav.Link href="/plasticpollution/#/">Landing Page</Nav.Link>, 
            <Nav.Link href="/plasticpollution/#/Activist">Landing Page</Nav.Link>,
            <Nav.Link href="/plasticpollution/#/faq">FAQ</Nav.Link>,
            <Nav.Link href="/plasticpollution/#/Contact">Contact</Nav.Link>,
            <Nav.Link href="/plasticpollution/#/FoodWeb"></Nav.Link>,
            <Nav.Link href="/plasticpollution/#/FishMarket"></Nav.Link>,
            <Nav.Link href="/plasticpollution/#/popOverNano"></Nav.Link>,
            <NavDropdown.Item href="/plasticpollution/#/Macro">Macro</NavDropdown.Item>,
            <NavDropdown.Item href="/plasticpollution/#/Micro">Micro</NavDropdown.Item>,
            <NavDropdown.Item href="/plasticpollution/#/Nano">Nano</NavDropdown.Item>,
            <NavDropdown.Item href="/plasticpollution/#/Ocean3D">Ocean 3D</NavDropdown.Item>,
            <NavDropdown.Item href="/plasticpollution/#/nanoFood3D">Nano FisherMan 3D</NavDropdown.Item>,
            <NavDropdown.Item href="/plasticpollution/#/nanoDinner3D">Nano 3D Resturant</NavDropdown.Item>
            ).toJSON();
        expect(tree).toMatchSnapshot();

        /* Only activiated if checking for properties. MacroRecycle does not pass properties to any child components*/
        // it('Plastic Pollution: <MacroRecycleItems /> must render length of object if not authenticated!', () => {
        //     wrapper.setProps({somePropertyFoo:true});
        //     expect(wrapper.find(MacroRecycle).toHaveLength(1));
        // });

    });
});