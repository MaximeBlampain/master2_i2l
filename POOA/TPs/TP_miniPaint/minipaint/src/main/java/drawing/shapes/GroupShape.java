package drawing.shapes;

import javafx.scene.layout.Pane;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Iterator;

public class GroupShape implements IShape, Iterable<IShape> {

    private ArrayList<IShape> shapes;

    public GroupShape() {
        this.shapes = new ArrayList<>();
    }

    public GroupShape(ArrayList<IShape> shapes) {
        this();
        for(IShape shape: shapes){
            addShape(shape);
        }
    }

    public void addShape(IShape shape) {
        this.shapes.add(shape);
    }

    @Override
    public void addShapeToPane(Pane pane) {
        for (IShape shape : shapes) {
            shape.addShapeToPane(pane);
        }
    }

    @Override
    public void removeShapeFromPane(Pane pane) {
        for (IShape shape : shapes) {
            shape.removeShapeFromPane(pane);
        }
    }

    @Override
    public IShape clone() {
        ArrayList<IShape> clonnedGroup = new ArrayList<>();
        for(IShape shape : shapes){
            clonnedGroup.add(shape.clone());
        }

        return new GroupShape(clonnedGroup);
    }

    @Override
    public boolean isSelected() {
        if (shapes.isEmpty())
            return false;
        return shapes.get(0).isSelected();
    }

    @Override
    public void setSelected(boolean selected) {
        for (IShape shape : shapes)
            shape.setSelected(selected);
    }

    @Override
    public boolean isOn(double x, double y) {
        for (IShape shape : shapes) {
            if (shape.isOn(x, y))
                return true;
        }
        return false;
    }

    @Override
    public void offset(double x, double y) {
        for (IShape shape : shapes) {
            shape.offset(x, y);
        }
    }

    @Override
    public Iterator iterator() {
        return shapes.iterator();
    }
}
