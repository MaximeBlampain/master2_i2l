package drawing.commands;

import drawing.shapes.GroupShape;
import drawing.shapes.IShape;
import drawing.ui.DrawingPane;

import java.util.ArrayList;

public class GroupCommand implements ICommand{

    private final DrawingPane drawingPane;
    private GroupShape groupShape;
    private ArrayList<IShape> grouppedShapes;

    public GroupCommand(DrawingPane drawingPane) {
        this.drawingPane = drawingPane;
        this.groupShape = new GroupShape();
        this.grouppedShapes = new ArrayList<>();

        if (drawingPane.getSelection().iterator().hasNext())
            for(IShape shape: drawingPane.getSelection()){
                grouppedShapes.add(shape);
            }
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
        for(IShape shape : grouppedShapes)
            drawingPane.addShape(shape);

        drawingPane.getSelection().clearSelection();
    }
}
