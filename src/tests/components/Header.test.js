import React from 'react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../../components/Header';

Enzyme.configure({
    adapter: new Adapter()
});

test('test header component', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper).toMatchSnapshot;
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot()
});