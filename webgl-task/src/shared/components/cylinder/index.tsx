import { forwardRef } from 'react';
import { type Mesh } from 'three';

// export interface ICylinderProps {}

const Cylinder = forwardRef<Mesh/*, ICylinderProps*/>((props, ref) => {
    return (
        <mesh ref={ref} visible rotation={[ 0, 0, Math.PI / 2 ]}>
            <cylinderGeometry args={[ 2, 2, 4, 32, 16, false ]} />
            <meshBasicMaterial wireframe />
        </mesh>
    );
});

export default Cylinder;