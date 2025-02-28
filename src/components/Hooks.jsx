import { useEffect, useState, useRef, useCallback } from 'react';


export const useContainerDimensions = myRef => {
    const getDimensions = () => ({
      width: myRef.current.offsetWidth,
      height: myRef.current.offsetHeight
    })
  
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  
    useEffect(() => {
      const handleResize = () => {
        setDimensions(getDimensions())
      }
  
      if (myRef.current) {
        setDimensions(getDimensions())
      }
  
      window.addEventListener("resize", handleResize)
  
      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }, [myRef])
  
    return dimensions;
  };

  export const useScrollValues = ref => {
    const getValues = () => ({
      scrollWidth: ref.current.scrollWidth, 
      scrollLeft: ref.current.scrollLeft, 
      clientWidth: ref.current.clientWidth
    })

    const [values, setValues] = useState({ scrollWidth: 0, scrollLeft: 0, clientWidth: 0})

    useEffect(() => {
      const handleResize = () => {
        setValues(getValues())
      }

      if (ref.current) {
        setValues(getValues())
      }

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      }
    }, [ref])

    return values;
  }

  export const useLongPress = (
    onLongPress,
    onClick,
    { shouldPreventDefault = true, delay = 300 } = {}
  ) => {
    const [longPressTriggered, setLongPressTriggered] = useState(false);
    const timeout = useRef();
    const target = useRef();
  
    const start = useCallback(
      event => {
        if (shouldPreventDefault && event.target) {
          event.target.addEventListener("touchend", preventDefault, {
            passive: false
          });
          target.current = event.target;
        }
        timeout.current = setTimeout(() => {
          onLongPress(event);
          setLongPressTriggered(true);
        }, delay);
      },
      [onLongPress, delay, shouldPreventDefault]
    );
  
    const clear = useCallback(
      (event, shouldTriggerClick = true) => {
        timeout.current && clearTimeout(timeout.current);
        shouldTriggerClick && !longPressTriggered && onClick();
        setLongPressTriggered(false);
        if (shouldPreventDefault && target.current) {
          target.current.removeEventListener("touchend", preventDefault);
        }
      },
      [shouldPreventDefault, onClick, longPressTriggered]
    );
  
    return {
      onMouseDown: e => start(e),
      onTouchStart: e => start(e),
      onMouseUp: e => clear(e),
      onMouseLeave: e => clear(e, false),
      onTouchEnd: e => clear(e)
    };
  };
  
  const isTouchEvent = event => {
    return "touches" in event;
  };
  
  const preventDefault = event => {
    if (!isTouchEvent(event)) return;
  
    if (event.touches.length < 2 && event.preventDefault) {
      event.preventDefault();
    }
  };