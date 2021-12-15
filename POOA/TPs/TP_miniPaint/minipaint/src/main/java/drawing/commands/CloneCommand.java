package drawing.commands;

import drawing.shapes.IShape;
import drawing.shapes.ShapeAdapter;
import drawing.ui.DrawingPane;

import java.util.ArrayList;

public class CloneCommand implements ICommand{

    private final DrawingPane drawingPane;
    private ArrayList<IShape> clonedShapes;
    public CloneCommand(DrawingPane drawingPane) {
        this.drawingPane = drawingPane;
    }

    @Override
    public void execute() {
        if (!drawingPane.getSelection().iterator().hasNext())
            return;

        clonedShapes = new ArrayList<>();
        for(IShape shape: drawingPane.getSelection()) {
            IShape clonedShape = shape.clone();
            drawingPane.addShape(clonedShape);
            clonedShapes.add(clonedShape);
        }
        drawingPane.getSelection().clearSelection();
    }

    @Override
    public void undo() {
        for(IShape shape: clonedShapes){
            drawingPane.removeShape(shape);
        }
    }

    @Override
    public void redo() {
        for(IShape shape: clonedShapes){
            drawingPane.addShape(shape);
        }
    }
}
