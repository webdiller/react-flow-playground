import { useCallback } from "react";
import ReactFlow, {
  addEdge,
  Node,
  useNodesState,
  useEdgesState,
  Controls,
  MiniMap,
  Background,
  BackgroundVariant,
  Edge,
  Position
} from "reactflow";

const initialNodes: Node[] = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "root" }, className: "bg-indigo-400 min-h-[300px]" },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
  { id: "3", position: { x: 0, y: 200 }, data: { label: "3" } },
];
const initialEdges: Edge[] = [
    { id: "e1-2", source: "1", target: "2", },
    { id: "e2-3", source: "2", target: "3" }
  ];

export function BasicFlow() {
  const [nodes, _setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect}>
        <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Lines} className="opacity-40" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
