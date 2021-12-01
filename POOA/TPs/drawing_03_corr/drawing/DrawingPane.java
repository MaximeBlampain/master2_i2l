package drawing;

import javafx.scene.layout.Pane;
import javafx.scene.layout.Region;
import javafx.scene.shape.Rectangle;
import javafx.scene.shape.Shape;

import java.util.ArrayList;
import java.util.Iterator;

/**
 * Created by lewandowski on 20/12/2017.
 */
public class DrawingPane extends Pane implements Iterable<IShape> {

    private ArrayList<IShape> shapes;
    private ArrayList<Observer> observers;

    private MouseMoveHandler mouseMoveHandler;
    private SelectionHandler selectionHandler;

    public DrawingPane() {
        clipChildren();
        shapes = new ArrayList<>();
        observers = new ArrayList<>();
        mouseMoveHandler = new MouseMoveHandler(this);
        selectionHandler = new SelectionHandler(this);
    }


    /**
     * Clips the children of this {@link Region} to its current size.
     * This requires attaching a change listener to the region’s layout bounds,
     * as JavaFX does not currently provide any built-in way to clip children.
     */
    void clipChildren() {
        final Rectangle outputClip = new Rectangle();
        this.setClip(outputClip);

        this.layoutBoundsProperty().addListener((ov, oldValue, newValue) -> {
            outputClip.setWidth(newValue.getWidth());
            outputClip.setHeight(newValue.getHeight());
        });
    }

    public void addShape(IShape shape) {
        shapes.add(shape);
        shape.addShapeToPane(this);
        notifyAllObservers();
    }

    public void clear() {
        shapes.forEach(iShape -> iShape.removeShapeFromPane(this));
        shapes.clear();
        notifyAllObservers();
    }

    public int getNbShapes() {
        return shapes.size();
    }

    public void addObserver(Observer o) {
        observers.add(o);
    }

    public void removeObserver(Observer o) {
        observers.remove(o);
    }

    private void notifyAllObservers() {
        for (Observer o: observers)
            o.update();
    }

    public SelectionHandler getSelection() {
        return selectionHandler;
    }

    @Override
    public Iterator<IShape> iterator() {
        return shapes.iterator();
    }
}
