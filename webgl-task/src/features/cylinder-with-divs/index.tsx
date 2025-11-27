import { Canvas } from '@react-three/fiber';
import { type FC, type RefObject, useRef } from 'react';

import Cylinder from '../../shared/components/cylinder';
import Divs from '../../shared/components/divs';
import { useCylinderWithDivsAnimation } from '../../shared/hooks/animations';

import styles from './styles.module.css';

import type { Mesh } from 'three';

export interface ICylinderCanvasContainerProps {
    divsRef: RefObject<HTMLDivElement>
}

const CylinderContainer: FC<ICylinderCanvasContainerProps> = ({ divsRef }) => {
    const cylinderRef = useRef<Mesh>(null!);

    useCylinderWithDivsAnimation(cylinderRef, divsRef);

    return (
        <Cylinder ref={cylinderRef} />
    );
};

const CylinderWithDivsContainer = () => {
    const divsRef = useRef<HTMLDivElement>(null!);

    return (
        <div className={styles.container}>
            <Canvas>
                <CylinderContainer divsRef={divsRef} />
            </Canvas>

            <Divs ref={divsRef} />
        </div>
    );
};

export default CylinderWithDivsContainer;