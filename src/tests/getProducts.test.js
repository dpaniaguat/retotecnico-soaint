import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { Productos } from '../components/widgets/Productos'

configure({ adapter: new Adapter() });

test('test lista productos component <Productos/>', () => {
    const wrapper = shallow(<Productos viewHeaderCounter={true} />);
    expect(wrapper).toMatchSnapshot();
})



