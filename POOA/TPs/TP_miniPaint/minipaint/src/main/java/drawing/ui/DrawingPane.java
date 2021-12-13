package drawing.ui;

import drawing.commands.CommandHistory;
import drawing.handlers.MouseMoveHandler;
import drawing.handlers.SelectionHandler;
import drawing.shapes.IShape;
import javafx.scene.layout.Pane;
import javafx.scene.layout.Region;
import javafx.scene.shape.Rectangle;

import java.lang.Iterable;
import java.util.ArrayList;
import java.util.Iterator;

/**
 * Created by lewandowski on 20/12/2020.
 */
public class DrawingPane extends Pane implements Iterable<IShape> {

    private MouseMoveHandler mouseMoveHandler;

    private SelectionHandler selectionHandler;

    private ArrayList<IShape> shapes;

    private ArrayList<Observer> observers;

    private CommandHistory commandHistory;

    public DrawingPane() {
        clipChildren();
        shapes = new ArrayList<>();
        observers = new ArrayList<>();
        commandHistory = new CommandHistory();
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
        //this.getChildren().add(shape);
        notifObservers();
    }

    public void removeShape(IShape shape) {
        shapes.remove(shape);
        shape.removeShapeFromPane(this);
        notifObservers();
    }
    public Iterator<IShape> iterator() {
        return shapes.iterator();
    }
    public void addObserver(Observer observer) {
        observers.add(observer);
    }
    public void removeObserver(Observer observer){
        observers.remove(observer);
    }

    public ArrayList<IShape> getShapes(){
        return shapes;
    }

    public SelectionHandler getSelection() {
        return selectionHandler;
    }

    public void notifObservers() {
        if(observers.size() != 0)
            for(Observer obs : observers){
                obs.update(this);
            }
    }

    public void clear() {
        for( IShape shape : shapes){
            shape.removeShapeFromPane(this);
        }
        shapes.clear();
        notifObservers();
    }

    public CommandHistory getCommandHistory() {
        return commandHistory;
    }
}
