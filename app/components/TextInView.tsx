import React, {useRef} from 'react';
import {useInView} from 'framer-motion';

interface TextInViewProps {
    children?: React.ReactNode;
    ref?: any;
}

const TextInView: React.FC<TextInViewProps> = ({children}) => {

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    return (
        <TextInView ref={ref}>
      <span
          style={{
              transform: isInView ? "none" : "translateY(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
      >
        {children}
      </span>
        </TextInView>
    );
}

export default TextInView;