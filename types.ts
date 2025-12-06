import * as THREE from 'three';

export enum TreeMorphState {
  SCATTERED = 'SCATTERED',
  TREE_SHAPE = 'TREE_SHAPE'
}

export interface ParticleData {
  id: number;
  scatterPosition: THREE.Vector3;
  treePosition: THREE.Vector3;
  scatterRotation: THREE.Euler;
  treeRotation: THREE.Euler;
  color: THREE.Color;
  scale: number;
  type: 'NEEDLE' | 'ORNAMENT';
}

export interface TreeConfig {
  count: number;
  radius: number;
  height: number;
  scatterRadius: number;
}