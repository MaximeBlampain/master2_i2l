package drawing.commands;

import drawing.shapes.GroupShape;
import drawing.shapes.IShape;
import drawing.ui.DrawingPane;

import java.util.ArrayList;

public class GroupCommand implements ICommand{

    private final DrawingPane drawingPane;
    private GroupShape groupShape;

    public GroupCommand(DrawingPane drawingPane) {
        this.drawingPane = drawingPane;
    }

    @Override
    public void execute() {
        if (!drawingPane.getSelection().iterator().hasNext())
            return;
        groupShape = new GroupShape();
        for(IShape shape: drawingPane.getSelection()) {
            drawingPane.removeShape(shape);
            groupShape.addShape(shape);
        }
        drawingPane.addShape(groupShape);
        drawingPane.getSelection().clearSelection();
    }

    @Override
    public void undo() {
        drawingPane.removeShape(groupShape);
        for(IShape shape : groupShape)
            drawingPane.addShape(shape);

        drawingPane.getSelection().clearSelection();
    }

    @Override
    public void redo() {
        for(IShape shape: groupShape) {
            drawingPane.removeShape(shape);
        }
        drawingPane.addShape(groupShape);
        drawingPane.getSelection().clearSelection();
    }
}
