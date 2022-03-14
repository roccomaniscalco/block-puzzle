import GridLayout from "react-grid-layout";
import { useResizeDetector } from "react-resize-detector";

const Board = () => {
  const { width = 0, ref } = useResizeDetector();
  const layout = [
    {
      i: "1",
      x: 0,
      y: 0,
      w: 2,
      h: 2,
    },
  ];

  return (
    <GridLayout
      layout={layout}
      cols={12}
      rowHeight={30}
      useCSSTransforms={false}
      isDraggable={true}
      isResizable={false}
      width={width}
      innerRef={ref}
    >
      {layout.map((block) => (
        <div key={block.i} style={{ background: "red" }}>
          block
        </div>
      ))}
    </GridLayout>
  );
};

export default Board;
