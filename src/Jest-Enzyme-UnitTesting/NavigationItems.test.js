import React from 'react';
import renderer from 'react-test-renderer';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
/* End of npm packages */
/* Jest & Enzyme dependcies */
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
/* Routing duplicate components into Unit-testing foloder to test individually */
import NavigationItems from './NavigationItems.test.js'
import Navigation from './Navigation'

configure({ adapter: new Adapter() });
/* Checks length of object, must be greater then 0*/
it('Plastic Pollution: <NavigationItems /> must render length of object if not authenticated!', () => {
    const wrapper = shallow(<Navigation />);
    expect(wrapper.find(Navigation)).toHaveLength(Navigation.length);

});
/* If we rendered an object to screen, return true*/
describe('<NavigationItems />', () => {
    it('Plastic Pollution: <NavigationItems /> must render elements if not authenticated!', () => {
        const wrapper = shallow(<Navigation />);
        expect(wrapper.find(Navigation)).toBeTruthy();
   
    });
/* Checks if javascript object matches a subset of properties of an object*/
    it('Plastic Pollution: <NavigationItems /> must render object if not authenticated!', () => {
        const wrapper = shallow(<Navigation />);
        expect(wrapper.find(Navigation)).toMatchObject(NavigationItems);
       
    });
/* Checking if links are navigating correctly through github */
    it('Github Live Links render correctly', () => {
        const tree = renderer
            .create(<Nav.Link href= "/https://cse115b-plasticpollution.github.io/plasticpollution/#/">Landing Page</Nav.Link>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    /* Checking if links are navigating correctly locally */
    it('Local Links render correctly', () => {
        const tree = renderer
            .create(<Nav.Link href="/plasticpollution/#/">Landing Page</Nav.Link>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

});