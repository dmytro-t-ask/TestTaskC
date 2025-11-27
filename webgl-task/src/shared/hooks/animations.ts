import { useFrame } from '@react-three/fiber';
import { type RefObject, useEffect } from 'react';
import { type Mesh } from 'three';

export const useCylinderWithDivsAnimation = (cylinderRef: RefObject<Mesh>, divsRef: RefObject<HTMLDivElement>) => {
    useEffect(() => {
        const geom = cylinderRef.current.geometry;
        geom.userData.originalPositions = [ ...geom.attributes.position.array ];
    }, [ cylinderRef ]);

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        const geom = cylinderRef.current.geometry;
        const position = geom.attributes.position;
        const orig = geom.userData.originalPositions;

        if (!orig) return;

        const count = position.count;

        /// Divs items count
        const items = divsRef.current?.children;
        const itemsCount = items?.length ?? 0;

        for (let i = 0; i < count; i++) {
            const x = orig[i * 3];
            const y = orig[i * 3 + 1];
            const z = orig[i * 3 + 2];

            const wave = Math.sin(y * 2 + t * 4) * 0.07;
            const scale = 1 + wave;

            position.setX(i, x * scale);
            position.setZ(i, z * scale);

            /// Divs items separation by blocks
            const blockIndex = Math.floor(i / (count / itemsCount));
            const block = items[blockIndex] as HTMLElement;

            if (block) {
                // eslint-disable-next-line react-hooks/immutability
                block.style.height = `${Math.round(80 * scale)}px`;
            }
        }

        position.needsUpdate = true;
    });
};