package drawing.commands;

import drawing.shapes.IShape;
import drawing.ui.DrawingPane;

import java.util.ArrayList;

public class DeleteCommand implements ICommand{
    private final DrawingPane drawingPane;
    private ArrayList<IShape> shapes;

    public DeleteCommand(DrawingPane drawingPane){
        this.drawingPane = drawingPane;
        this.shapes = new ArrayList<>();

        for(IShape shape: drawingPane.getSelection())
            shapes.add(shape);
    }
    @Override
    public void execute() {
        for(IShape shape: drawingPane.getSelection())
            drawingPane.removeShape(shape);
        drawingPane.getSelection().clearSelection();
    }

    @Override
    public void undo() {
        for(IShape shape : shapes) {
            this.drawingPane.addShape(shape);
        }
        drawingPane.getSelection().clearSelection();
    }
}
