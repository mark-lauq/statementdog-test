import { NoSsr, Popper, Paper } from "@mui/material";
import { useAxisTooltip, useMouseTracker } from "@mui/x-charts/ChartsTooltip";

/**
 * Helper faking an element bounding box for the Popper.
 */
export function generateVirtualElement(
  mousePosition: { x: number; y: number } | null,
) {
  if (mousePosition === null) {
    return {
      getBoundingClientRect: () => ({
        width: 0,
        height: 0,
        x: 0,
        y: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        toJSON: () => "",
      }),
    };
  }
  const { x, y } = mousePosition;
  const boundingBox = {
    width: 0,
    height: 0,
    x,
    y,
    top: y,
    right: x,
    bottom: y,
    left: x,
  };
  return {
    getBoundingClientRect: () => ({
      ...boundingBox,
      toJSON: () => JSON.stringify(boundingBox),
    }),
  };
}

export default function AxisTooltip() {
  const tooltipData = useAxisTooltip();
  const mousePosition = useMouseTracker(); // Track the mouse position on chart.

  if (!tooltipData || !mousePosition) {
    // No data to display
    return null;
  }

  // The pointer type can be used to have different behavior based on pointer type.
  const isMousePointer = mousePosition?.pointerType === "mouse";
  // Adapt the tooltip offset to the size of the pointer.
  const yOffset = isMousePointer ? 0 : 40 - mousePosition.height;

  return (
    <NoSsr>
      <Popper
        sx={{
          pointerEvents: "none",
          zIndex: (theme) => theme.zIndex.modal,
        }}
        open
        placement={isMousePointer ? "top-end" : "top"}
        anchorEl={generateVirtualElement(mousePosition)}
        modifiers={[
          {
            name: "offset",
            options: {
              offset: [0, yOffset],
            },
          },
        ]}
      >
        <Paper
          variant="outlined"
          sx={{
            m: 1,
            p: 1.5,
            border: "solid",
            borderWidth: 1,
            borderColor: "divider",
            table: { borderSpacing: 0 },
            thead: {
              td: {
                py: 0.75,
                borderBottom: "solid",
                borderWidth: 1,
                borderColor: "divider",
                fontSize: 15,
                fontWeight: 600,
              },
            },
            tbody: {
              "tr:first-child": { td: { paddingTop: 1.5 } },
              "tr:last-child": { td: { paddingBottom: 1.5 } },
              tr: {
                "td:first-child": { paddingLeft: 1.5 },
                "td:last-child": { paddingRight: 1.5 },
                td: {
                  paddingRight: "7px",
                  paddingBottom: "10px",
                  fontWeight: 400,
                  fontSize: 14,
                },
              },
            },
          }}
        >
          <table>
            <thead>
              <tr>
                <td colSpan={3}>{tooltipData.axisFormattedValue}</td>
              </tr>
            </thead>
            <tbody>
              {tooltipData.seriesItems.map((seriesItem) => (
                <tr key={seriesItem.seriesId}>
                  <td>
                    <div
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        backgroundColor: seriesItem.color,
                      }}
                    />
                  </td>
                  <td>{seriesItem.formattedLabel}</td>
                  <td style={{ textAlign: "right" }}>
                    {seriesItem.formattedValue}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Paper>
      </Popper>
    </NoSsr>
  );
}
