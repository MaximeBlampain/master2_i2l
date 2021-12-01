package drawing.commands;

import drawing.shapes.IShape;
import drawing.ui.DrawingPane;

import java.util.ArrayList;

public class ClearCommand implements ICommand{
    private final DrawingPane drawingPane;
    private ArrayList<IShape> shapes;

    public ClearCommand(DrawingPane drawingPane) {
        this.shapes = new ArrayList<>();
        this.drawingPane = drawingPane;

        shapes.addAll(drawingPane.getShapes());
    }

    @Override
    public void execute() {
        this.drawingPane.clear();
    }

    @Override
    public void undo() {
        for(IShape shape : shapes) {
            this.drawingPane.addShape(shape);
        }
    }
}
