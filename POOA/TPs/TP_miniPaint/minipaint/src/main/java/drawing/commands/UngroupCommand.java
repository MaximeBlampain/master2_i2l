package drawing.commands;

import drawing.shapes.GroupShape;
import drawing.shapes.IShape;
import drawing.ui.DrawingPane;

import java.util.ArrayList;

public class UngroupCommand implements ICommand{

    private final DrawingPane drawingPane;
    private ArrayList<GroupShape> ungrouppedShapes;

    public UngroupCommand(DrawingPane drawingPane) {
        this.drawingPane = drawingPane;
    }

    @Override
    public void execute() {
        ungrouppedShapes = new ArrayList<>();

        for (IShape shape: drawingPane.getSelection()) {
            if (shape instanceof GroupShape) {
                ungrouppedShapes.add((GroupShape) shape);
                drawingPane.removeShape(shape);
                for (IShape child : (GroupShape) shape) {
                    drawingPane.addShape(child);
                }
            }
        }
        drawingPane.getSelection().clearSelection();
    }

    @Override
    public void undo() {
        for (GroupShape group: ungrouppedShapes) {
            for (IShape shape: group) {
                this.drawingPane.removeShape(shape);
            }
            this.drawingPane.addShape(group);
        }
    }

    @Override
    public void redo() {
        for (GroupShape group: ungrouppedShapes) {
            drawingPane.removeShape(group);
            for (IShape child : group)
                drawingPane.addShape(child);
        }
    }
}
