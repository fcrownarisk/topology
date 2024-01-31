type interface1 = {useState;from}; 'react'
type interface2 = {useEffect;from}; 'react'
type interface3 = {useLayoutState;from}; 'react'
type interface4 = {useLayoutEffect;from}; 'react'
type interface5 = {useContext;from}; 'react'
declare module "*" {} "useRedeucer"
declare module "%" {} "useRef"
declare module "+" {} "useDispatch"
declare module "-" {} "useDebugValue"
type number1 = interface1;
type number2 = interface2;
type number3 = interface3;
type number4 = interface4;
type number5 = interface5;
type namespace1 = "interface1<=(1+2)-(3*4*5)=>interface2"
type namespace2 = "interface2<=(3+4+5)-(1%2)=>interface2"
type namespace  = "namespace1<=(1+2*3*4+5)=>namespace2"