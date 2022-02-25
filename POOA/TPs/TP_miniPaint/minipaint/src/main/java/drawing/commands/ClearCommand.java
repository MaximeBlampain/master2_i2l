package drawing.commands;

import drawing.shapes.IShape;
import drawing.ui.DrawingPane;

import java.util.ArrayList;

public class ClearCommand implements ICommand{
    private final DrawingPane drawingPane;
    private ArrayList<IShape> shapes;

    public ClearCommand(DrawingPane drawingPane) {
        this.drawingPane = drawingPane;
    }

    @Override
    public void execute() {
        shapes = new ArrayList<>();
        shapes.addAll(drawingPane.getShapes());
        this.drawingPane.clear();
        this.drawingPane.getSelection().clearSelection();
    }

    @Override
    public void undo() {
        for(IShape shape : shapes) {
            this.drawingPane.addShape(shape);
        }
    }

    @Override
    public void redo() {
        execute();
    }
}
