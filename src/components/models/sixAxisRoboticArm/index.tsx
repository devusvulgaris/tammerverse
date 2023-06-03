import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/models/robot-arm.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[117.5, 15, 0]} rotation={[-Math.PI, 0, 0]}>
        <group position={[0, -135, 0]} rotation={[0, 0, Math.PI]}>
          <group position={[0, -135, 0]} rotation={[0, 0, -Math.PI]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.底座_node_0.geometry}
              material={materials["Paint Matte Black #1"]}
            />
          </group>
          <group position={[0, -135, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.电机_底座_node_0.geometry}
              material={materials["Paint Matte Black #2"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.电机_底座_node_2.geometry}
              material={materials["Paint Matte Black #2"]}
            />
          </group>
          <group position={[0, -106.3, 0]} rotation={[0, 0, -Math.PI / 2]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.步进电机1_node_0.geometry}
              material={materials["步进电机1:color:202:209:238"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.步进电机1_node_2.geometry}
              material={materials["步进电机1:color:128:128:128"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.步进电机1_node_3.geometry}
              material={materials["步进电机1:color:202:209:238"]}
            />
          </group>
          <group position={[0, -37, 0]} rotation={[0, -Math.PI / 2, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.电机1轴承座_node_0.geometry}
              material={materials["Paint Matte Black #4"]}
            />
          </group>
          <group position={[-9.16, -34.5, -21.64]} rotation={[0, -1.17, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.推力球轴承51205_node_0.geometry}
              material={materials["推力球轴承51205:color:192:192:192"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.推力球轴承51205_node_1.geometry}
              material={materials["推力球轴承51205:color:222:231:235"]}
            />
          </group>
          <group position={[0, -14, 0]} rotation={[0, -1.17, Math.PI / 2]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["深沟球轴承61907-2Z_node_0"].geometry}
              material={materials["深沟球轴承61907-2Z:color:192:192:192"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["深沟球轴承61907-2Z_node_1"].geometry}
              material={materials["深沟球轴承61907-2Z:color:170:134:66"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["深沟球轴承61907-2Z_node_2"].geometry}
              material={materials["深沟球轴承61907-2Z:color:222:231:235"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["深沟球轴承61907-2Z_node_3"].geometry}
              material={materials["深沟球轴承61907-2Z:color:255:255:255"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["深沟球轴承61907-2Z_node_4"].geometry}
              material={materials["深沟球轴承61907-2Z:color:128:128:128"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["深沟球轴承61907-2Z_node_5"].geometry}
              material={materials["深沟球轴承61907-2Z:color:158:128:54"]}
            />
          </group>
          <group position={[0, -1.5, 0]} rotation={[Math.PI, -Math.PI / 2, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.电机1法兰_node_0.geometry}
              material={materials["电机1法兰:color:255:255:255"]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.底盘安装板_node_0.geometry}
            material={materials["Paint Matte Black #5"]}
          />
          <group position={[52.5, 52.5, -82]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.驱动臂左夹板_node_0.geometry}
              material={materials["Paint Matte Black #3"]}
            />
          </group>
          <group position={[52.5, 52.5, 70]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.驱动臂右夹板_node_0.geometry}
              material={
                materials[
                  "驱动臂右夹板:default texture:165:158:150 (matte steel.p2m)"
                ]
              }
            />
          </group>
          <group position={[20.78, 6.8, -12]} rotation={[0, 0, -Math.PI / 2]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M5×8_node_0"].geometry}
              material={materials["Titanium Rough #1"]}
            />
          </group>
          <group position={[-27.5, -9.7, 27.5]} rotation={[0, 0, -Math.PI / 2]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M5×30_node_0"].geometry}
              material={materials["内六角圆柱头螺钉M5×30:color:128:128:128"]}
            />
          </group>
          <group
            position={[-27.5, -9.7, -27.5]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M5×30_node_3"].geometry}
              material={materials["内六角圆柱头螺钉M5×30:color:128:128:128"]}
            />
          </group>
          <group position={[27.5, -9.7, -27.5]} rotation={[0, 0, -Math.PI / 2]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M5×30_node_6"].geometry}
              material={materials["内六角圆柱头螺钉M5×30:color:128:128:128"]}
            />
          </group>
          <group position={[27.5, -9.7, 27.5]} rotation={[0, 0, -Math.PI / 2]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M5×30_node_9"].geometry}
              material={materials["内六角圆柱头螺钉M5×30:color:128:128:128"]}
            />
          </group>
          <group position={[-50, 0, 81.2]} rotation={[0, Math.PI / 2, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M6×16_node_0"].geometry}
              material={materials["Titanium Rough #2"]}
            />
          </group>
          <group position={[0, 0, 81.2]} rotation={[0, Math.PI / 2, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M6×16_node_3"].geometry}
              material={materials["Titanium Rough #2"]}
            />
          </group>
          <group position={[50, 0, 81.2]} rotation={[0, Math.PI / 2, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M6×16_node_6"].geometry}
              material={materials["Titanium Rough #2"]}
            />
          </group>
          <group
            position={[-50, 0, -81.2]}
            rotation={[Math.PI / 2, -1.18, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M6×16_node_9"].geometry}
              material={materials["Titanium Rough #2"]}
            />
          </group>
          <group
            position={[0, 0, -81.2]}
            rotation={[Math.PI / 2, -1.18, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M6×16_node_12"].geometry}
              material={materials["Titanium Rough #2"]}
            />
          </group>
          <group
            position={[50, 0, -81.2]}
            rotation={[Math.PI / 2, -1.18, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M6×16_node_15"].geometry}
              material={materials["Titanium Rough #2"]}
            />
          </group>
          <group
            position={[-15.91, -37.7, 15.91]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M5×10_node_0"].geometry}
              material={materials["内六角圆柱头螺钉M5×10:color:128:128:128"]}
            />
          </group>
          <group
            position={[-15.91, -37.7, -15.91]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M5×10_node_3"].geometry}
              material={materials["内六角圆柱头螺钉M5×10:color:128:128:128"]}
            />
          </group>
          <group
            position={[15.91, -37.7, -15.91]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M5×10_node_6"].geometry}
              material={materials["内六角圆柱头螺钉M5×10:color:128:128:128"]}
            />
          </group>
          <group
            position={[15.91, -37.7, 15.91]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M5×10_node_9"].geometry}
              material={materials["内六角圆柱头螺钉M5×10:color:128:128:128"]}
            />
          </group>
          <group
            position={[20.78, 6.8, 12]}
            rotation={[0, -Math.PI / 3, -Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M5×8_node_3"].geometry}
              material={materials["Titanium Rough #1"]}
            />
          </group>
          <group
            position={[0, 6.8, 24]}
            rotation={[-Math.PI, -Math.PI / 3, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M5×8_node_6"].geometry}
              material={materials["Titanium Rough #1"]}
            />
          </group>
          <group
            position={[-20.78, 6.8, 12]}
            rotation={[-Math.PI, 0, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M5×8_node_9"].geometry}
              material={materials["Titanium Rough #1"]}
            />
          </group>
          <group
            position={[-20.78, 6.8, -12]}
            rotation={[Math.PI, Math.PI / 3, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M5×8_node_12"].geometry}
              material={materials["Titanium Rough #1"]}
            />
          </group>
          <group
            position={[0, 6.8, -24]}
            rotation={[0, Math.PI / 3, -Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M5×8_node_15"].geometry}
              material={materials["Titanium Rough #1"]}
            />
          </group>
          <group position={[-50, -149.3, 0]} rotation={[0, 0, Math.PI / 2]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M5×16_node_0"].geometry}
              material={materials["Titanium Rough #1"]}
            />
          </group>
        </group>
        <group position={[-52.5, -315.5, 61.4]} rotation={[0, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.大手臂右侧板_node_0.geometry}
            material={materials["Paint Matte Black #2"]}
          />
        </group>
        <group
          position={[-52.5, -187.5, -19.6]}
          rotation={[-Math.PI, -Math.PI / 2, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.步进电机2_node_0.geometry}
            material={materials["Paint Metallic Black #1 #2 #1"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.步进电机2_node_2.geometry}
            material={materials["Titanium Rough #3"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.步进电机2_node_3.geometry}
            material={materials["Paint Metallic Black #1 #2 #1"]}
          />
        </group>
        <group position={[-2.32, -9.86, 5.94]}>
          <group
            position={[-50.18, -177.64, 89.06]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.大手臂驱动轴承座_node_0.geometry}
              material={materials["Paint Matte Yellow #1"]}
            />
          </group>
          <group
            position={[-50.18, -177.64, 57.46]}
            rotation={[0, -Math.PI / 2, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.大手臂驱动轴_node_0.geometry}
              material={materials["Anodized Aluminum Brushed 90° Black #1"]}
            />
          </group>
          <group
            position={[-50.18, -177.64, 75.46]}
            rotation={[-Math.PI, Math.PI / 2, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["深沟球轴承6204-2Z_node_0"].geometry}
              material={materials["深沟球轴承6204-2Z:color:192:192:192"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["深沟球轴承6204-2Z_node_1"].geometry}
              material={materials["深沟球轴承6204-2Z:color:170:134:66"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["深沟球轴承6204-2Z_node_2"].geometry}
              material={materials["Titanium Rough #2"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["深沟球轴承6204-2Z_node_3"].geometry}
              material={materials["深沟球轴承6204-2Z:color:255:255:255"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["深沟球轴承6204-2Z_node_4"].geometry}
              material={materials["深沟球轴承6204-2Z:color:128:128:128"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["深沟球轴承6204-2Z_node_5"].geometry}
              material={materials["深沟球轴承6204-2Z:color:158:128:54"]}
            />
          </group>
          <group position={[-50.18, -176.97, 82.96]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.轴用弹性挡圈A型20_node_0.geometry}
              material={materials["Titanium Rough #1"]}
            />
          </group>
        </group>
        <group position={[-86.5, -187.5, 94.3]} rotation={[0, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M5×16_node_3"].geometry}
            material={materials["Titanium Rough #1"]}
          />
        </group>
        <group position={[-27.5, -187.5, 56.1]} rotation={[0, -Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M5×8_node_18"].geometry}
            material={materials["Titanium Rough #1"]}
          />
        </group>
        <group position={[-52.5, -315.5, -61.4]} rotation={[0, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.大手臂左侧板_node_0.geometry}
            material={materials["Paint Matte Black #1"]}
          />
        </group>
        <group position={[-52.5, -443.5, 47.1]} rotation={[0, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.电机3右夹板__node_0.geometry}
            material={materials["Paint Matte Black #5"]}
          />
        </group>
        <group position={[-52.5, -443.5, -46.9]} rotation={[0, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.电机3左夹板_node_0.geometry}
            material={materials["Paint Matte Black #3"]}
          />
        </group>
        <group position={[0, 0, 25.17]}>
          <group
            position={[-52.5, -187.5, -120.17]}
            rotation={[Math.PI, Math.PI / 2, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.大手臂驱动轴承座_node_3.geometry}
              material={materials["Paint Matte Yellow #1"]}
            />
          </group>
          <group position={[-52.5, -186.83, -114.07]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.轴用弹性挡圈A型20_node_3.geometry}
              material={materials["Titanium Rough #1"]}
            />
          </group>
          <group
            position={[-52.5, -187.5, -88.57]}
            rotation={[Math.PI, -Math.PI / 2, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.大手臂旋转轴__node_0.geometry}
              material={materials["Metal Rough Black #2"]}
            />
          </group>
          <group
            position={[-52.5, -187.5, -106.57]}
            rotation={[0, Math.PI / 2, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["深沟球轴承6204-2Z_node_8"].geometry}
              material={materials["深沟球轴承6204-2Z:color:192:192:192"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["深沟球轴承6204-2Z_node_9"].geometry}
              material={materials["深沟球轴承6204-2Z:color:170:134:66"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["深沟球轴承6204-2Z_node_10"].geometry}
              material={materials["Titanium Rough #2"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["深沟球轴承6204-2Z_node_11"].geometry}
              material={materials["深沟球轴承6204-2Z:color:255:255:255"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["深沟球轴承6204-2Z_node_12"].geometry}
              material={materials["深沟球轴承6204-2Z:color:128:128:128"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["深沟球轴承6204-2Z_node_13"].geometry}
              material={materials["深沟球轴承6204-2Z:color:158:128:54"]}
            />
          </group>
        </group>
        <group
          position={[-52.5, -443.5, -17.7]}
          rotation={[Math.PI, -Math.PI / 2, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FL57STH41-2804A_node_0"].geometry}
            material={materials["Paint Metallic Black #1 #2 #1"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FL57STH41-2804A_node_2"].geometry}
            material={materials["Titanium Rough #1"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FL57STH41-2804A_node_3"].geometry}
            material={materials["Paint Metallic Black #1 #2 #1"]}
          />
        </group>
        <group position={[-206.18, -312.68, 40.17]} rotation={[0, 0, -0.78]}>
          <group
            position={[201.2, 15.75, -120.57]}
            rotation={[-1.57, -1.57, -1.57]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.大手臂驱动轴承座_node_6.geometry}
              material={materials["Paint Matte Yellow #1"]}
            />
          </group>
          <group position={[201.2, 16.42, -114.47]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.轴用弹性挡圈A型20_node_6.geometry}
              material={materials["Titanium Rough #1"]}
            />
          </group>
          <group
            position={[201.2, 15.75, -88.97]}
            rotation={[-Math.PI / 2, 0.79, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.大手臂旋转轴__node_3.geometry}
              material={materials["Metal Rough Black #2"]}
            />
          </group>
          <group
            position={[201.2, 15.75, -106.97]}
            rotation={[0, Math.PI / 2, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["深沟球轴承6204-2Z_node_16"].geometry}
              material={materials["深沟球轴承6204-2Z:color:192:192:192"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["深沟球轴承6204-2Z_node_17"].geometry}
              material={materials["深沟球轴承6204-2Z:color:170:134:66"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["深沟球轴承6204-2Z_node_18"].geometry}
              material={materials["Titanium Rough #2"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["深沟球轴承6204-2Z_node_19"].geometry}
              material={materials["深沟球轴承6204-2Z:color:255:255:255"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["深沟球轴承6204-2Z_node_20"].geometry}
              material={materials["深沟球轴承6204-2Z:color:128:128:128"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["深沟球轴承6204-2Z_node_21"].geometry}
              material={materials["深沟球轴承6204-2Z:color:158:128:54"]}
            />
          </group>
        </group>
        <group position={[84.72, -324.29, -41.56]} rotation={[0, 0, -0.78]}>
          <group
            position={[-13.1, -181.29, 121.96]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.大手臂驱动轴承座_node_9.geometry}
              material={materials["Paint Matte Yellow #1"]}
            />
          </group>
          <group
            position={[-13.1, -181.29, 90.36]}
            rotation={[-Math.PI / 2, -0.78, -Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.大手臂驱动轴_node_3.geometry}
              material={materials["Anodized Aluminum Brushed 90° Black #1"]}
            />
          </group>
          <group
            position={[-13.1, -181.29, 108.36]}
            rotation={[-Math.PI, Math.PI / 2, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["深沟球轴承6204-2Z_node_24"].geometry}
              material={materials["深沟球轴承6204-2Z:color:192:192:192"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["深沟球轴承6204-2Z_node_25"].geometry}
              material={materials["深沟球轴承6204-2Z:color:170:134:66"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["深沟球轴承6204-2Z_node_26"].geometry}
              material={materials["Titanium Rough #2"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["深沟球轴承6204-2Z_node_27"].geometry}
              material={materials["深沟球轴承6204-2Z:color:255:255:255"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["深沟球轴承6204-2Z_node_28"].geometry}
              material={materials["深沟球轴承6204-2Z:color:128:128:128"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["深沟球轴承6204-2Z_node_29"].geometry}
              material={materials["深沟球轴承6204-2Z:color:158:128:54"]}
            />
          </group>
          <group position={[-13.1, -180.62, 115.86]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.轴用弹性挡圈A型20_node_9.geometry}
              material={materials["Titanium Rough #1"]}
            />
          </group>
        </group>
        <group position={[-224.33, -523.5, 25.1]} rotation={[0, 0, -Math.PI]}>
          <group position={[-143.83, -20, -25]} rotation={[0, Math.PI / 2, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.电机4架固定板A_node_0.geometry}
              material={materials["Paint Matte Black #4"]}
            />
            <group position={[0, 20, 9.5]} rotation={[0, Math.PI / 2, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodes["GB／T276-94深沟球轴承61803-2RZ_node_0"].geometry
                }
                material={
                  materials[
                    "GB／T276-94深沟球轴承61803-2RZ:cast carbon steel:198:193:188"
                  ]
                }
              />
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodes["GB／T276-94深沟球轴承61803-2RZ_node_1"].geometry
                }
                material={
                  materials["GB／T276-94深沟球轴承61803-2RZ:color:170:134:66"]
                }
              />
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodes["GB／T276-94深沟球轴承61803-2RZ_node_2"].geometry
                }
                material={
                  materials["GB／T276-94深沟球轴承61803-2RZ:color:222:231:235"]
                }
              />
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodes["GB／T276-94深沟球轴承61803-2RZ_node_3"].geometry
                }
                material={
                  materials["GB／T276-94深沟球轴承61803-2RZ:color:255:255:255"]
                }
              />
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodes["GB／T276-94深沟球轴承61803-2RZ_node_4"].geometry
                }
                material={
                  materials["GB／T276-94深沟球轴承61803-2RZ:color:128:128:128"]
                }
              />
            </group>
            <group position={[0, 20, 4.5]} rotation={[0, -Math.PI / 2, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodes["GB／T276-94深沟球轴承61803-2RZ_node_7"].geometry
                }
                material={
                  materials[
                    "GB／T276-94深沟球轴承61803-2RZ:cast carbon steel:198:193:188"
                  ]
                }
              />
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodes["GB／T276-94深沟球轴承61803-2RZ_node_8"].geometry
                }
                material={
                  materials["GB／T276-94深沟球轴承61803-2RZ:color:170:134:66"]
                }
              />
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodes["GB／T276-94深沟球轴承61803-2RZ_node_9"].geometry
                }
                material={
                  materials["GB／T276-94深沟球轴承61803-2RZ:color:222:231:235"]
                }
              />
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodes["GB／T276-94深沟球轴承61803-2RZ_node_10"].geometry
                }
                material={
                  materials["GB／T276-94深沟球轴承61803-2RZ:color:255:255:255"]
                }
              />
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodes["GB／T276-94深沟球轴承61803-2RZ_node_11"].geometry
                }
                material={
                  materials["GB／T276-94深沟球轴承61803-2RZ:color:128:128:128"]
                }
              />
            </group>
            <group
              position={[0, 20, -58.3]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["FL57STH41-2804A_node_6"].geometry}
                material={materials["Paint Metallic Black #1 #2 #1"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["FL57STH41-2804A_node_8"].geometry}
                material={materials["Titanium Rough #1"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["FL57STH41-2804A_node_9"].geometry}
                material={materials["Paint Metallic Black #1 #2 #1"]}
              />
            </group>
            <group
              position={[0, 20, 21]}
              rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.电机4架连接轴A_node_0.geometry}
                material={
                  materials["电机4架连接轴A:satin finish aluminum:221:232:255"]
                }
              />
            </group>
            <group position={[0, -25, 14.5]} rotation={[Math.PI / 2, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["E32-C42_光纤传感器固定块_node_0"].geometry}
                material={materials["Anodized Aluminum Brushed 90° Black #1"]}
              />
            </group>
            <group
              position={[0, -8, 14.5]}
              rotation={[Math.PI / 2, 0, Math.PI / 2]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["E32-C42_光纤传感器_node_0"].geometry}
                material={materials["Hard Rough Plastic Black #1"]}
              />
            </group>
            <group
              position={[15.91, 35.91, 11.6]}
              rotation={[Math.PI / 2, 0.39, -Math.PI / 2]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["内六角圆柱头螺钉M5×16_node_6"].geometry}
                material={materials["Titanium Rough #1"]}
              />
            </group>
          </group>
          <group position={[-121.83, 1.5, -25]} rotation={[0, -Math.PI / 2, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.电机5固定夹板A_node_0.geometry}
              material={materials["Anodized Aluminum Brushed 90° Black #2"]}
            />
          </group>
          <group position={[-117.33, 15, -25]} rotation={[1.96, 0, Math.PI]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M3×10_node_0"].geometry}
              material={materials["Titanium Rough #3"]}
            />
          </group>
          <group position={[0, 0, -50]} rotation={[-Math.PI, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.电机5左夹板A_node_0.geometry}
              material={materials["Paint Matte Black #6"]}
            />
          </group>
          <group position={[-95.83, 25, 0]} rotation={[-Math.PI / 2, 0.09, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.电机5夹板定位柱A_node_0.geometry}
              material={materials["Metal Rough White #1"]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.电机5右夹板A_node_0.geometry}
            material={materials["Paint Matte Black #7"]}
          />
          <group position={[7.67, 0, -51.5]} rotation={[0, Math.PI / 2, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.步进电机5A_node_0.geometry}
              material={materials["Titanium Rough #1"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.步进电机5A_node_1.geometry}
              material={materials["Paint Metallic Black #1 #2 #1"]}
            />
          </group>
          <group position={[7.67, 0, 11]} rotation={[0, -Math.PI / 2, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.HTPA30S3M060_A_P8_node_0.geometry}
              material={materials["Metal Rough Black #2"]}
            />
          </group>
          <group position={[128.17, 0, 11]} rotation={[0, -Math.PI / 2, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.HTPA36S3M060_A_P6_node_0.geometry}
              material={materials["Metal Rough Black #1"]}
            />
          </group>
          <group
            position={[69.17, 17.5, 0]}
            rotation={[-Math.PI / 2, -0.38, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.电机5夹板定位柱A_node_3.geometry}
              material={materials["Metal Rough White #1"]}
            />
          </group>
          <group
            position={[-95.83, -25, -50]}
            rotation={[Math.PI / 2, -0.25, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.电机5夹板定位柱A_node_6.geometry}
              material={materials["Metal Rough White #1"]}
            />
          </group>
          <group
            position={[69.17, -17.5, -50]}
            rotation={[Math.PI / 2, -0.17, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.电机5夹板定位柱A_node_9.geometry}
              material={materials["Metal Rough White #1"]}
            />
          </group>
          <group position={[-15.83, 25, 0]} rotation={[-Math.PI / 2, 0.77, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.电机5夹板定位柱A_node_12.geometry}
              material={materials["Metal Rough White #1"]}
            />
          </group>
          <group
            position={[-15.83, -25, -50]}
            rotation={[Math.PI / 2, -0.33, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.电机5夹板定位柱A_node_15.geometry}
              material={materials["Metal Rough White #1"]}
            />
          </group>
          <group position={[128.17, 0, -51]} rotation={[0, -Math.PI / 2, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.housing_BGTNB606ZZA_node_0.geometry}
              material={
                materials[
                  "housing_BGTNB606ZZA:default texture:165:158:150 (matte steel.p2m)"
                ]
              }
            />
            <group position={[-4, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.B606ZZA_node_0.geometry}
                material={materials["Titanium Rough #2"]}
              />
            </group>
          </group>
          <group position={[128.17, -13, -3]} rotation={[0, Math.PI / 2, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角平圆头螺钉M5×10_node_0"].geometry}
              material={materials["Titanium Rough #1"]}
            />
          </group>
          <group position={[128.17, 0, 0.12]} rotation={[Math.PI / 2, 0.35, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.电机5限位套A_node_0.geometry}
              material={
                materials["电机5限位套A:satin finish aluminum:221:232:255"]
              }
            />
          </group>
          <group position={[127.63, 0, 16.5]} rotation={[0, Math.PI / 2, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.同步带2_node_0.geometry}
              material={materials["Cardboard Box #1"]}
            />
          </group>
          <group position={[128.17, 13, -3]} rotation={[0, Math.PI / 2, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角平圆头螺钉M5×10_node_3"].geometry}
              material={materials["Titanium Rough #1"]}
            />
          </group>
          <group
            position={[128.17, 21.06, -25]}
            rotation={[0, -Math.PI / 2, 0]}
          >
            <group
              position={[0, -4.06, 0]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.步进电机6A_node_0.geometry}
                material={materials["Titanium Rough #1"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.步进电机6A_node_1.geometry}
                material={materials["Paint Metallic Black #1 #2 #1"]}
              />
            </group>
            <group
              position={[20.5, -21.06, 0]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.电机6转轴2A_node_0.geometry}
                material={materials["Metal Rough Black #1"]}
              />
            </group>
            <group position={[0, -42.31, 0]} rotation={[0, Math.PI / 2, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.电机6固定架A_node_0.geometry}
                material={materials["Paint Matte Yellow #1"]}
              />
            </group>
            <group position={[0, -85.56, 0]} rotation={[3.14, -1.55, 3.14]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.电机6转接盘A_node_0.geometry}
                material={materials["Paint Matte Yellow #1"]}
              />
            </group>
            <group position={[-20.5, -21.06, 0]} rotation={[0, 0, Math.PI / 2]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.电机6转轴A_node_0.geometry}
                material={materials["Metal Rough Black #1"]}
              />
            </group>
            <group position={[47.6, -21.06, 0]} rotation={[0, -Math.PI / 2, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["GB／T894。1轴用弹性挡圈A型5A_node_0"].geometry}
                material={materials["Titanium Rough #1"]}
              />
            </group>
            <group
              position={[-30.2, -21.06, 0]}
              rotation={[0, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["GB／T894。1轴用弹性挡圈A型6A_node_0"].geometry}
                material={materials["Titanium Rough #1"]}
              />
            </group>
            <group position={[15, -21.06, 8.5]} rotation={[1.96, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["内六角平圆头螺钉M3×4_node_0"].geometry}
                material={
                  materials[
                    "内六角平圆头螺钉M3×4:cast carbon steel:198:193:188"
                  ]
                }
              />
            </group>
            <group
              position={[-20, -64.06, 0]}
              rotation={[-Math.PI, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.传感器安装块_node_0.geometry}
                material={materials["Titanium Rough #1"]}
              />
              <group position={[0, 4, -7]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes["E32-C42_光纤传感器_node_3"].geometry}
                  material={materials["Hard Rough Plastic Black #1"]}
                />
              </group>
              <group position={[4.6, 7, 11.5]} rotation={[1.96, 0, Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes["内六角圆柱头螺钉M2．5×6_node_0"].geometry}
                  material={
                    materials["内六角圆柱头螺钉M2．5×6:color:128:128:128"]
                  }
                />
              </group>
              <group position={[0, -6, 14.6]} rotation={[0, Math.PI / 2, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes["内六角圆柱头螺钉M3×16_node_0"].geometry}
                  material={materials["Titanium Rough #2"]}
                />
              </group>
            </group>
            <group position={[15, -12.56, 0]} rotation={[1.96, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["内六角平圆头螺钉M3×4_node_3"].geometry}
                material={
                  materials[
                    "内六角平圆头螺钉M3×4:cast carbon steel:198:193:188"
                  ]
                }
              />
            </group>
            <group position={[15, -21.06, -8.5]} rotation={[1.96, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["内六角平圆头螺钉M3×4_node_6"].geometry}
                material={
                  materials[
                    "内六角平圆头螺钉M3×4:cast carbon steel:198:193:188"
                  ]
                }
              />
            </group>
            <group position={[15, -29.56, 0]} rotation={[1.96, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["内六角平圆头螺钉M3×4_node_9"].geometry}
                material={
                  materials[
                    "内六角平圆头螺钉M3×4:cast carbon steel:198:193:188"
                  ]
                }
              />
            </group>
            <group position={[-15, -12.56, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["内六角平圆头螺钉M3×4_node_12"].geometry}
                material={
                  materials[
                    "内六角平圆头螺钉M3×4:cast carbon steel:198:193:188"
                  ]
                }
              />
            </group>
            <group position={[-15, -21.06, 8.5]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["内六角平圆头螺钉M3×4_node_15"].geometry}
                material={
                  materials[
                    "内六角平圆头螺钉M3×4:cast carbon steel:198:193:188"
                  ]
                }
              />
            </group>
            <group position={[-15, -29.56, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["内六角平圆头螺钉M3×4_node_18"].geometry}
                material={
                  materials[
                    "内六角平圆头螺钉M3×4:cast carbon steel:198:193:188"
                  ]
                }
              />
            </group>
            <group position={[-15, -21.06, -8.5]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["内六角平圆头螺钉M3×4_node_21"].geometry}
                material={
                  materials[
                    "内六角平圆头螺钉M3×4:cast carbon steel:198:193:188"
                  ]
                }
              />
            </group>
            <group
              position={[7.78, -63.16, 7.78]}
              rotation={[0, 0, Math.PI / 2]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["内六角圆柱头螺钉M3×6_node_0"].geometry}
                material={materials["内六角圆柱头螺钉M3×6:color:128:128:128"]}
              />
            </group>
            <group
              position={[-7.78, -63.16, 7.78]}
              rotation={[0, 0, Math.PI / 2]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["内六角圆柱头螺钉M3×6_node_3"].geometry}
                material={materials["内六角圆柱头螺钉M3×6:color:128:128:128"]}
              />
            </group>
            <group
              position={[7.78, -63.16, -7.78]}
              rotation={[0, 0, Math.PI / 2]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["内六角圆柱头螺钉M3×6_node_6"].geometry}
                material={materials["内六角圆柱头螺钉M3×6:color:128:128:128"]}
              />
            </group>
            <group
              position={[-7.78, -63.16, -7.78]}
              rotation={[0, 0, Math.PI / 2]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["内六角圆柱头螺钉M3×6_node_9"].geometry}
                material={materials["内六角圆柱头螺钉M3×6:color:128:128:128"]}
              />
            </group>
          </group>
          <group position={[143.17, 0, -58]} rotation={[-Math.PI, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.传感器安装块_node_3.geometry}
              material={materials["Titanium Rough #1"]}
            />
            <group position={[0, 4, -7]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["E32-C42_光纤传感器_node_6"].geometry}
                material={materials["Hard Rough Plastic Black #1"]}
              />
            </group>
            <group position={[4.6, 7, 11.5]} rotation={[1.96, 0, Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["内六角圆柱头螺钉M2．5×6_node_3"].geometry}
                material={
                  materials["内六角圆柱头螺钉M2．5×6:color:128:128:128"]
                }
              />
            </group>
            <group position={[0, -6, 14.6]} rotation={[0, Math.PI / 2, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["内六角圆柱头螺钉M3×16_node_3"].geometry}
                material={materials["Titanium Rough #2"]}
              />
            </group>
          </group>
          <group position={[-121.83, 24, 7.6]} rotation={[0, Math.PI / 2, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M4×6_node_0"].geometry}
              material={materials["Titanium Rough #1"]}
            />
          </group>
          <group position={[-121.83, 0, 7.6]} rotation={[0, Math.PI / 2, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M4×6_node_3"].geometry}
              material={materials["Titanium Rough #1"]}
            />
          </group>
          <group position={[-121.83, -24, 7.6]} rotation={[0, Math.PI / 2, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M4×6_node_6"].geometry}
              material={materials["Titanium Rough #1"]}
            />
          </group>
          <group position={[-95.83, -25, 7.6]} rotation={[0, Math.PI / 2, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M4×6_node_9"].geometry}
              material={materials["Titanium Rough #1"]}
            />
          </group>
          <group position={[-95.83, 25, 7.6]} rotation={[0, Math.PI / 2, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M4×6_node_12"].geometry}
              material={materials["Titanium Rough #1"]}
            />
          </group>
          <group position={[-15.83, 25, 7.6]} rotation={[0, Math.PI / 2, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M4×6_node_15"].geometry}
              material={materials["Titanium Rough #1"]}
            />
          </group>
          <group position={[-15.83, -25, 7.6]} rotation={[0, Math.PI / 2, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M4×6_node_18"].geometry}
              material={materials["Titanium Rough #1"]}
            />
          </group>
          <group position={[69.17, 17.5, 7.6]} rotation={[0, Math.PI / 2, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M4×6_node_21"].geometry}
              material={materials["Titanium Rough #1"]}
            />
          </group>
          <group position={[69.17, -17.5, 7.6]} rotation={[0, Math.PI / 2, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M4×6_node_24"].geometry}
              material={materials["Titanium Rough #1"]}
            />
          </group>
          <group
            position={[69.17, 17.5, -57.6]}
            rotation={[Math.PI / 2, -1.18, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M4×6_node_27"].geometry}
              material={materials["Titanium Rough #1"]}
            />
          </group>
          <group
            position={[69.17, -17.5, -57.6]}
            rotation={[Math.PI / 2, -1.18, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M4×6_node_30"].geometry}
              material={materials["Titanium Rough #1"]}
            />
          </group>
          <group
            position={[-15.83, 25, -57.6]}
            rotation={[Math.PI / 2, -1.18, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M4×6_node_33"].geometry}
              material={materials["Titanium Rough #1"]}
            />
          </group>
          <group
            position={[-15.83, -25, -57.6]}
            rotation={[Math.PI / 2, -1.18, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M4×6_node_36"].geometry}
              material={materials["Titanium Rough #1"]}
            />
          </group>
          <group
            position={[-95.83, 25, -57.6]}
            rotation={[Math.PI / 2, -1.18, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M4×6_node_39"].geometry}
              material={materials["Titanium Rough #1"]}
            />
          </group>
          <group
            position={[-121.83, 24, -57.6]}
            rotation={[Math.PI / 2, -1.18, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M4×6_node_42"].geometry}
              material={materials["Titanium Rough #1"]}
            />
          </group>
          <group
            position={[-121.83, 0, -57.6]}
            rotation={[Math.PI / 2, -1.18, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M4×6_node_45"].geometry}
              material={materials["Titanium Rough #1"]}
            />
          </group>
          <group
            position={[-121.83, -24, -57.6]}
            rotation={[Math.PI / 2, -1.18, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M4×6_node_48"].geometry}
              material={materials["Titanium Rough #1"]}
            />
          </group>
          <group
            position={[-95.83, -25, -57.6]}
            rotation={[Math.PI / 2, -1.18, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M4×6_node_51"].geometry}
              material={materials["Titanium Rough #1"]}
            />
          </group>
          <group position={[-4.7, 12.37, 8]} rotation={[0, Math.PI / 2, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M3×10_node_3"].geometry}
              material={materials["Titanium Rough #3"]}
            />
          </group>
          <group position={[-4.7, -12.37, 8]} rotation={[0, Math.PI / 2, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M3×10_node_6"].geometry}
              material={materials["Titanium Rough #3"]}
            />
          </group>
          <group position={[20.05, 12.37, 8]} rotation={[0, Math.PI / 2, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M3×10_node_9"].geometry}
              material={materials["Titanium Rough #3"]}
            />
          </group>
          <group position={[20.05, -12.37, 8]} rotation={[0, Math.PI / 2, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M3×10_node_12"].geometry}
              material={materials["Titanium Rough #3"]}
            />
          </group>
          <group
            position={[128.17, 13, -3]}
            rotation={[Math.PI, -Math.PI / 2, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角平圆头螺钉M5×10_node_6"].geometry}
              material={materials["Titanium Rough #1"]}
            />
          </group>
          <group
            position={[128.17, 13, -47]}
            rotation={[Math.PI / 2, -1.18, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角平圆头螺钉M5×10_node_9"].geometry}
              material={materials["Titanium Rough #1"]}
            />
          </group>
          <group
            position={[128.17, -13, -47]}
            rotation={[Math.PI / 2, -1.18, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角平圆头螺钉M5×10_node_12"].geometry}
              material={materials["Titanium Rough #1"]}
            />
          </group>
          <group position={[-117.33, 0, -40]} rotation={[0.39, 0, Math.PI]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M3×10_node_15"].geometry}
              material={materials["Titanium Rough #3"]}
            />
          </group>
          <group position={[-117.33, -15, -25]} rotation={[-1.18, 0, Math.PI]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M3×10_node_18"].geometry}
              material={materials["Titanium Rough #3"]}
            />
          </group>
          <group position={[-117.33, 0, -10]} rotation={[-2.75, 0, -Math.PI]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M3×10_node_21"].geometry}
              material={materials["Titanium Rough #3"]}
            />
          </group>
          <group position={[128.17, 0, 1]} rotation={[0, Math.PI / 2, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.housing_BGTNB606ZZA_node_3.geometry}
              material={
                materials[
                  "housing_BGTNB606ZZA:default texture:165:158:150 (matte steel.p2m)"
                ]
              }
            />
            <group position={[-4, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.B606ZZA_node_3.geometry}
                material={materials["Titanium Rough #2"]}
              />
            </group>
          </group>
        </group>
        <group position={[-20, -273, -55.4]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.大手臂支杆_node_0.geometry}
            material={materials["Metal Rough White #1"]}
          />
        </group>
        <group position={[-51.3, -224.43, 55.4]} rotation={[Math.PI, 0, -1.25]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.传感器安装块_node_6.geometry}
            material={materials["Titanium Rough #1"]}
          />
          <group position={[0, 4, -7]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["E32-C42_光纤传感器_node_9"].geometry}
              material={materials["Hard Rough Plastic Black #1"]}
            />
          </group>
          <group position={[4.6, 7, 11.5]} rotation={[1.96, 0, Math.PI]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M2．5×6_node_6"].geometry}
              material={materials["内六角圆柱头螺钉M2．5×6:color:128:128:128"]}
            />
          </group>
          <group position={[0, -6, 14.6]} rotation={[0, Math.PI / 2, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M3×16_node_6"].geometry}
              material={materials["Titanium Rough #2"]}
            />
          </group>
        </group>
        <group
          position={[54, -142.5, 0]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.传感器安装块_node_9.geometry}
            material={materials["Titanium Rough #1"]}
          />
          <group position={[0, 4, -7]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["E32-C42_光纤传感器_node_12"].geometry}
              material={materials["Hard Rough Plastic Black #1"]}
            />
          </group>
          <group position={[4.6, 7, 11.5]} rotation={[1.96, 0, Math.PI]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M2．5×6_node_9"].geometry}
              material={materials["内六角圆柱头螺钉M2．5×6:color:128:128:128"]}
            />
          </group>
          <group position={[0, -6, 14.6]} rotation={[0, Math.PI / 2, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M3×16_node_9"].geometry}
              material={materials["Titanium Rough #2"]}
            />
          </group>
        </group>
        <group position={[-20, -358, -55.4]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.大手臂支杆_node_3.geometry}
            material={materials["Metal Rough White #1"]}
          />
        </group>
        <group position={[-70, -358, -55.4]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.大手臂支杆_node_6.geometry}
            material={materials["Metal Rough White #1"]}
          />
        </group>
        <group position={[-70, -273, -55.4]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.大手臂支杆_node_9.geometry}
            material={materials["Metal Rough White #1"]}
          />
        </group>
        <group position={[37.5, -167.5, 70]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.驱动臂连杆_node_0.geometry}
            material={materials["Metal Rough White #1"]}
          />
        </group>
        <group position={[-48.98, -407.4, 40.6]} rotation={[Math.PI, 0, 2.07]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.传感器安装块_node_12.geometry}
            material={materials["Titanium Rough #1"]}
          />
          <group position={[0, 4, -7]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["E32-C42_光纤传感器_node_15"].geometry}
              material={materials["Hard Rough Plastic Black #1"]}
            />
          </group>
          <group position={[4.6, 7, 11.5]} rotation={[1.96, 0, Math.PI]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M2．5×6_node_12"].geometry}
              material={materials["内六角圆柱头螺钉M2．5×6:color:128:128:128"]}
            />
          </group>
          <group position={[0, -6, 14.6]} rotation={[0, Math.PI / 2, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["内六角圆柱头螺钉M3×16_node_12"].geometry}
              material={materials["Titanium Rough #2"]}
            />
          </group>
        </group>
        <group
          position={[-68.41, -171.59, 62.7]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M5×10_node_12"].geometry}
            material={materials["内六角圆柱头螺钉M5×10:color:128:128:128"]}
          />
        </group>
        <group
          position={[-52.5, -221.5, -94.3]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M5×16_node_9"].geometry}
            material={materials["Titanium Rough #1"]}
          />
        </group>
        <group position={[-27.5, -187.5, -56.1]} rotation={[0, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M5×8_node_21"].geometry}
            material={materials["Titanium Rough #1"]}
          />
        </group>
        <group
          position={[-76.54, -467.54, 79.7]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M5×16_node_12"].geometry}
            material={materials["Titanium Rough #1"]}
          />
        </group>
        <group
          position={[-77.5, -443.5, 41.3]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M5×8_node_24"].geometry}
            material={materials["Titanium Rough #1"]}
          />
        </group>
        <group
          position={[-68.41, -427.59, 48.1]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M5×10_node_15"].geometry}
            material={materials["内六角圆柱头螺钉M5×10:color:128:128:128"]}
          />
        </group>
        <group
          position={[-76.54, -419.46, -79.7]}
          rotation={[Math.PI / 2, -0.18, Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M5×16_node_15"].geometry}
            material={materials["Titanium Rough #1"]}
          />
        </group>
        <group position={[-77.5, -443.5, -41.1]} rotation={[0, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M5×8_node_27"].geometry}
            material={materials["Titanium Rough #1"]}
          />
        </group>
        <group position={[-87.5, -469.3, 53.2]} rotation={[0, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M4×12_node_0"].geometry}
            material={materials["Titanium Rough #2"]}
          />
        </group>
        <group position={[-87.5, -499.3, 53.2]} rotation={[0, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M4×12_node_3"].geometry}
            material={materials["Titanium Rough #2"]}
          />
        </group>
        <group position={[-87.5, -531.3, 53.2]} rotation={[0, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M4×12_node_6"].geometry}
            material={materials["Titanium Rough #2"]}
          />
        </group>
        <group position={[-87.5, -547, 53.2]} rotation={[0, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M4×12_node_9"].geometry}
            material={materials["Titanium Rough #2"]}
          />
        </group>
        <group position={[-38.5, -485.5, 53.2]} rotation={[0, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M4×12_node_12"].geometry}
            material={materials["Titanium Rough #2"]}
          />
        </group>
        <group
          position={[-87.5, -469.3, -53]}
          rotation={[Math.PI / 2, -1.18, Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M4×12_node_15"].geometry}
            material={materials["Titanium Rough #2"]}
          />
        </group>
        <group
          position={[-38.5, -485.5, -53]}
          rotation={[Math.PI / 2, -1.18, Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M4×12_node_18"].geometry}
            material={materials["Titanium Rough #2"]}
          />
        </group>
        <group
          position={[-87.5, -499.3, -53]}
          rotation={[Math.PI / 2, -1.18, Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M4×12_node_21"].geometry}
            material={materials["Titanium Rough #2"]}
          />
        </group>
        <group
          position={[-87.5, -531.3, -53]}
          rotation={[Math.PI / 2, -1.18, Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M4×12_node_24"].geometry}
            material={materials["Titanium Rough #2"]}
          />
        </group>
        <group
          position={[-87.5, -547, -53]}
          rotation={[Math.PI / 2, -1.18, Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M4×12_node_27"].geometry}
            material={materials["Titanium Rough #2"]}
          />
        </group>
        <group position={[-70, -358, 66.7]} rotation={[0, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M5×16_node_18"].geometry}
            material={materials["Titanium Rough #1"]}
          />
        </group>
        <group position={[-20, -358, 66.7]} rotation={[0, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M5×16_node_21"].geometry}
            material={materials["Titanium Rough #1"]}
          />
        </group>
        <group position={[-20, -273, 66.7]} rotation={[0, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M5×16_node_24"].geometry}
            material={materials["Titanium Rough #1"]}
          />
        </group>
        <group position={[-70, -273, 66.7]} rotation={[0, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M5×16_node_27"].geometry}
            material={materials["Titanium Rough #1"]}
          />
        </group>
        <group
          position={[-70, -273, -66.7]}
          rotation={[Math.PI / 2, -1.18, Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M5×16_node_30"].geometry}
            material={materials["Titanium Rough #1"]}
          />
        </group>
        <group
          position={[-20, -273, -66.7]}
          rotation={[Math.PI / 2, -1.18, Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M5×16_node_33"].geometry}
            material={materials["Titanium Rough #1"]}
          />
        </group>
        <group
          position={[-70, -358, -66.7]}
          rotation={[Math.PI / 2, -1.18, Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M5×16_node_36"].geometry}
            material={materials["Titanium Rough #1"]}
          />
        </group>
        <group
          position={[-20, -358, -66.7]}
          rotation={[Math.PI / 2, -1.18, Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M5×16_node_39"].geometry}
            material={materials["Titanium Rough #1"]}
          />
        </group>
        <group
          position={[37.5, -167.5, -81.3]}
          rotation={[Math.PI / 2, -1.18, Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M5×16_node_42"].geometry}
            material={materials["Titanium Rough #1"]}
          />
        </group>
        <group position={[37.5, -167.5, 81.3]} rotation={[0, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M5×16_node_45"].geometry}
            material={materials["Titanium Rough #1"]}
          />
        </group>
        <group
          position={[-52.5, -221.5, 94.3]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M5×16_node_48"].geometry}
            material={materials["Titanium Rough #1"]}
          />
        </group>
        <group
          position={[-18.5, -187.5, 94.3]}
          rotation={[-Math.PI, -Math.PI / 2, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M5×16_node_51"].geometry}
            material={materials["Titanium Rough #1"]}
          />
        </group>
        <group
          position={[-52.5, -153.5, 94.3]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M5×16_node_54"].geometry}
            material={materials["Titanium Rough #1"]}
          />
        </group>
        <group
          position={[-36.59, -171.59, 62.7]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M5×10_node_18"].geometry}
            material={materials["内六角圆柱头螺钉M5×10:color:128:128:128"]}
          />
        </group>
        <group
          position={[-36.59, -203.41, 62.7]}
          rotation={[Math.PI, -Math.PI / 2, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M5×10_node_21"].geometry}
            material={materials["内六角圆柱头螺钉M5×10:color:128:128:128"]}
          />
        </group>
        <group
          position={[-68.41, -203.41, 62.7]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M5×10_node_24"].geometry}
            material={materials["内六角圆柱头螺钉M5×10:color:128:128:128"]}
          />
        </group>
        <group
          position={[-52.5, -162.5, 56.1]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M5×8_node_30"].geometry}
            material={materials["Titanium Rough #1"]}
          />
        </group>
        <group
          position={[-77.5, -187.5, 56.1]}
          rotation={[Math.PI, Math.PI / 2, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M5×8_node_33"].geometry}
            material={materials["Titanium Rough #1"]}
          />
        </group>
        <group
          position={[-52.5, -212.5, 56.1]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M5×8_node_36"].geometry}
            material={materials["Titanium Rough #1"]}
          />
        </group>
        <group
          position={[-86.5, -187.5, -94.3]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M5×16_node_57"].geometry}
            material={materials["Titanium Rough #1"]}
          />
        </group>
        <group
          position={[-52.5, -153.5, -94.3]}
          rotation={[-Math.PI, Math.PI / 2, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M5×16_node_60"].geometry}
            material={materials["Titanium Rough #1"]}
          />
        </group>
        <group
          position={[-18.5, -187.5, -94.3]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M5×16_node_63"].geometry}
            material={materials["Titanium Rough #1"]}
          />
        </group>
        <group
          position={[-52.5, -162.5, -56.1]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M5×8_node_39"].geometry}
            material={materials["Titanium Rough #1"]}
          />
        </group>
        <group
          position={[-77.5, -187.5, -56.1]}
          rotation={[-Math.PI, -Math.PI / 2, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M5×8_node_42"].geometry}
            material={materials["Titanium Rough #1"]}
          />
        </group>
        <group
          position={[-52.5, -212.5, -56.1]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M5×8_node_45"].geometry}
            material={materials["Titanium Rough #1"]}
          />
        </group>
        <group
          position={[-28.46, -467.54, 79.7]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M5×16_node_66"].geometry}
            material={materials["Titanium Rough #1"]}
          />
        </group>
        <group
          position={[-28.46, -419.46, 79.7]}
          rotation={[-Math.PI, -Math.PI / 2, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M5×16_node_69"].geometry}
            material={materials["Titanium Rough #1"]}
          />
        </group>
        <group
          position={[-76.54, -419.46, 79.7]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M5×16_node_72"].geometry}
            material={materials["Titanium Rough #1"]}
          />
        </group>
        <group
          position={[-36.59, -427.59, 48.1]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M5×10_node_27"].geometry}
            material={materials["内六角圆柱头螺钉M5×10:color:128:128:128"]}
          />
        </group>
        <group
          position={[-36.59, -459.41, 48.1]}
          rotation={[Math.PI, -Math.PI / 2, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M5×10_node_30"].geometry}
            material={materials["内六角圆柱头螺钉M5×10:color:128:128:128"]}
          />
        </group>
        <group
          position={[-68.41, -459.41, 48.1]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M5×10_node_33"].geometry}
            material={materials["内六角圆柱头螺钉M5×10:color:128:128:128"]}
          />
        </group>
        <group
          position={[-76.54, -467.54, -79.7]}
          rotation={[Math.PI / 2, 1.39, Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M5×16_node_75"].geometry}
            material={materials["Titanium Rough #1"]}
          />
        </group>
        <group
          position={[-28.46, -467.54, -79.7]}
          rotation={[-Math.PI / 2, 0.18, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M5×16_node_78"].geometry}
            material={materials["Titanium Rough #1"]}
          />
        </group>
        <group
          position={[-28.46, -419.46, -79.7]}
          rotation={[-Math.PI / 2, -1.39, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M5×16_node_81"].geometry}
            material={materials["Titanium Rough #1"]}
          />
        </group>
        <group
          position={[-52.5, -468.5, -41.1]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M5×8_node_48"].geometry}
            material={materials["Titanium Rough #1"]}
          />
        </group>
        <group
          position={[-27.5, -443.5, -41.1]}
          rotation={[-Math.PI, -Math.PI / 2, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M5×8_node_51"].geometry}
            material={materials["Titanium Rough #1"]}
          />
        </group>
        <group
          position={[-52.5, -418.5, -41.1]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["内六角圆柱头螺钉M5×8_node_54"].geometry}
            material={materials["Titanium Rough #1"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/robot-arm.glb");