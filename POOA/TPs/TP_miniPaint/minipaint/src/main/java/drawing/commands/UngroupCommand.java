package drawing.commands;

import drawing.shapes.GroupShape;
import drawing.shapes.IShape;
import drawing.ui.DrawingPane;

import java.util.ArrayList;

public class UngroupCommand implements ICommand{

    private final DrawingPane drawingPane;
    private ArrayList<IShape> ungrouppedShapes;

    public UngroupCommand(DrawingPane drawingPane) {
        this.drawingPane = drawingPane;
        this.ungrouppedShapes = new ArrayList<>();

        for (IShape shape: drawingPane.getSelection()) {
            if (shape instanceof GroupShape) {
                for (IShape child : (GroupShape) shape)
                    ungrouppedShapes.add(child);
            }
        }
    }

    @Override
    public void execute() {
        for (IShape shape: drawingPane.getSelection()) {
            if (shape instanceof GroupShape) {
                drawingPane.removeShape(shape);
                for (IShape child : (GroupShape) shape)
                    drawingPane.addShape(child);
            }
        }
        drawingPane.getSelection().clearSelection();
    }

    @Override
    public void undo() {
        GroupShape group =  new GroupShape();
        for(IShape shape : ungrouppedShapes){
            drawingPane.removeShape(shape);
            group.addShape(shape);
        }
        drawingPane.addShape(group);
        drawingPane.getSelection().clearSelection();
    }
}
