package drawing.commands;

import drawing.shapes.IShape;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class MoveCommand implements ICommand {

    private List<IShape> shapes;
    private double deltaX, deltaY;

    public MoveCommand(List<IShape> shapes, double deltaX, double deltaY) {
        this.shapes = new ArrayList<>(shapes);
        this.deltaX = deltaX;
        this.deltaY = deltaY;
    }

    public MoveCommand(Iterator<IShape> it, double deltaX, double deltaY) {
        this.shapes = new ArrayList<>();
        while(it.hasNext())
            this.shapes.add(it.next());
        this.deltaX = deltaX;
        this.deltaY = deltaY;
    }

    @Override
    public void execute() {
        for (IShape shape: shapes) {
            shape.offset(deltaX, deltaY);
        }
    }

    @Override
    public void undo() {
        for (IShape shape: shapes) {
            shape.offset(-deltaX, -deltaY);
        }
    }

    @Override
    public void redo() {
        this.execute();
    }
}
