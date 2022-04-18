import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should be able to add', () => {
    const runningTotal = container.find("#running-total");
    const button4 = container.find("#number4");
    const buttonAdd = container.find("#operator_add");
    const button1 = container.find("#number1");
    const buttonEquals = container.find("#operator-equals");
    button4.simulate('click');
    buttonAdd.simulate('click');
    button1.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('5');
  })

  it('should be able to subtract', () => {
    const runningTotal = container.find("#running-total");
    const button7 = container.find("#number7");
    const buttonSubtract = container.find("#operator-subtract");
    const button4 = container.find("#number4");
    const buttonEquals = container.find("#operator-equals");
    button7.simulate('click');
    buttonSubtract.simulate('click');
    button4.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should be able to multiply', () => {
    const runningTotal = container.find("#running-total");
    const button3 = container.find("#number3");
    const buttonMultiply = container.find("#operator-multiply");
    const button5 = container.find("#number5");
    const buttonEquals = container.find("#operator-equals");
    button3.simulate('click');
    buttonMultiply.simulate('click');
    button5.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('15');
  })

  it('should be able to divide', () => {
    const runningTotal = container.find("#running-total");
    const button2 = container.find("#number2");
    const button1 = container.find("#number1");
    const button0 = container.find("#number0");
    const buttonDivide = container.find("#operator-divide");
    const buttonEquals = container.find("#operator-equals");
    button1.simulate('click');
    button0.simulate('click');
    buttonDivide.simulate('click');
    button2.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('5');
  })

  it('should be able to concatenate multiple number button clicks', () => {
    const runningTotal = container.find("#running-total");
    const button3 = container.find("#number3");
    button3.simulate('click');
    button3.simulate('click');
    button3.simulate('click');
    expect(runningTotal.text()).toEqual('333');
  })

  it('should be able to chain multiple operations together', () => {
    const runningTotal = container.find("#running-total");
    const button2 = container.find("#number2");
    const button3 = container.find("#number3");
    const buttonAdd = container.find("#operator_add");
    const buttonSubtract = container.find("#operator-subtract");
    const buttonMultiply = container.find("#operator-multiply");
    const buttonEquals = container.find("#operator-equals");
    button2.simulate('click');
    buttonAdd.simulate('click');
    button2.simulate('click');
    buttonMultiply.simulate('click');
    button3.simulate('click');
    buttonSubtract.simulate('click');
    button3.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('9');
  })

  it('should be able to clear running total without affecting calculation', () => {
    const runningTotal = container.find("#running-total");
    const button2 = container.find("#number2");
    const button3 = container.find("#number3");
    const buttonAdd = container.find("#operator_add");
    const buttonClear = container.find("#clear");
    const buttonEquals = container.find("#operator-equals");
    button3.simulate('click');
    buttonAdd.simulate('click');
    button2.simulate('click');
    buttonClear.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })
})

